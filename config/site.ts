import navLinks from "./site.json"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "1874's WebNav",
  description: "1874's WebNav",
  mainNav: [
    {
      title: "1874's Home",
      href: "/",
    },
  ],
  links: {
    blog: "https://1874.cool",
    github: "https://github.com/LetTTGACO",
  },
  navLinks,
}
