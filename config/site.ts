import navLinks from "./site.json"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "1874's 开发记录笔记",
  description: "1874's 开发记录笔记",
  mainNav: [
    {
      title: "1874's 开发记录笔记",
      href: "/",
    },
  ],
  links: {
    blog: "https://1874.cool",
    github: "https://github.com/LetTTGACO",
  },
  navLinks,
}
