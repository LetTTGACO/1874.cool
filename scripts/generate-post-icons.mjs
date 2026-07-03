import { createHash } from "node:crypto"
import { readFile, writeFile } from "node:fs/promises"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

export const COLORS = [
  "gray",
  "lightgray",
  "brown",
  "yellow",
  "orange",
  "green",
  "blue",
  "purple",
  "pink",
  "red",
]

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, "..")
const sitePath = resolve(root, "config/site.json")
const slugsPath = resolve(root, "config/notion-icon-slugs.json")

function digestFor(value) {
  return createHash("sha256").update(value).digest()
}

export function iconForUrl(url, slugs) {
  if (!slugs.length) throw new Error("config/notion-icon-slugs.json is empty")

  const digest = digestFor(url)
  const slug = slugs[digest.readUInt32BE(0) % slugs.length]
  const color = COLORS[digest.readUInt32BE(4) % COLORS.length]

  return `https://www.notion.so/icons/${slug}_${color}.svg`
}

export function assignPostIcons(site, slugs) {
  const next = structuredClone(site)

  for (const category of next.posts ?? []) {
    for (const link of category.links ?? []) {
      if (link.url) link.icon = iconForUrl(link.url, slugs)
    }
  }

  return next
}

export function stringifyJson(value) {
  return JSON.stringify(value, null, 2).replace(
    /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
    (pair) =>
      pair
        .split("")
        .map(
          (char) =>
            `\\u${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, "0")}`
        )
        .join("")
  )
}

async function main() {
  const site = JSON.parse(await readFile(sitePath, "utf8"))
  const slugs = JSON.parse(await readFile(slugsPath, "utf8"))

  await writeFile(sitePath, `${stringifyJson(assignPostIcons(site, slugs))}\n`)
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main()
}
