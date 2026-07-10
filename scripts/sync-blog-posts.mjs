import { readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { XMLParser, XMLValidator } from "fast-xml-parser"

import { stringifyJson } from "./generate-post-icons.mjs"

const RSS_URL = "https://blog.1874.cool/rss.xml"
const POST_COUNT = 6
const RECENT_NEWS_TITLE = "Recent News"

const __dirname = dirname(fileURLToPath(import.meta.url))
const sitePath = resolve(__dirname, "../config/site.json")

function requiredText(value, field, index) {
  const text = typeof value === "string" ? value.trim() : ""

  if (!text) {
    throw new Error(`RSS item ${index + 1} is missing ${field}`)
  }

  return text
}

function parseRecentPosts(xml) {
  const validation = XMLValidator.validate(xml)
  if (validation !== true) {
    throw new Error(`Invalid RSS XML: ${validation.err.msg}`)
  }

  const parser = new XMLParser({ parseTagValue: false })
  const parsed = parser.parse(xml)
  const rawItems = parsed?.rss?.channel?.item
  const items = Array.isArray(rawItems) ? rawItems : rawItems ? [rawItems] : []

  if (items.length < POST_COUNT) {
    throw new Error(
      `RSS contains ${items.length} items; expected at least ${POST_COUNT}`
    )
  }

  return items.slice(0, POST_COUNT).map((item, index) => ({
    icon: "",
    url: requiredText(item.link, "link", index),
    title: requiredText(item.title, "title", index),
    description: requiredText(item.description, "description", index),
  }))
}

function replaceRecentPosts(site, posts) {
  const next = structuredClone(site)
  const category = next.posts?.find(({ title }) => title === RECENT_NEWS_TITLE)

  if (!category) {
    throw new Error(
      `config/site.json is missing the ${RECENT_NEWS_TITLE} category`
    )
  }

  category.links = posts
  return next
}

async function fetchRss() {
  const response = await fetch(RSS_URL, {
    headers: {
      accept: "application/rss+xml, application/xml;q=0.9, text/xml;q=0.8",
    },
    signal: AbortSignal.timeout(15_000),
  })

  if (!response.ok) {
    throw new Error(`RSS request failed with HTTP ${response.status}`)
  }

  return response.text()
}

async function main() {
  const [xml, siteSource] = await Promise.all([
    fetchRss(),
    readFile(sitePath, "utf8"),
  ])
  const site = JSON.parse(siteSource)
  const posts = parseRecentPosts(xml)
  const next = replaceRecentPosts(site, posts)

  await writeFile(sitePath, `${stringifyJson(next)}\n`)
  console.log(`Synced ${posts.length} recent blog posts from ${RSS_URL}`)
}

await main()
