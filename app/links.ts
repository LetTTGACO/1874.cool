import { siteConfig } from "@/config/site"

export default function getNavLinks() {
  return siteConfig.navLinks
}

export type CategoryWithLinks = {
  icon: string
  title: string
  links: NavItems[]
}

export interface NavItems {
  icon: string
  url: string
  title: string
  description: string
}
