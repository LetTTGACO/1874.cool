import { Content } from "@/components/content"
import { Profile } from "@/components/profile"
import { SiteFooter } from "@/components/site-footer"

import getNavLinks from "./links"

export const revalidate = 86400

export default function IndexPage() {
  const navResources = getNavLinks()

  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[1600px] px-0">
      <div className="flex-col">
        <div className="lg:mx-auto lg:flex lg:max-w-[1600px] lg:justify-between lg:px-16">
          <Profile socials={navResources.socials} />
          <Content links={navResources.links} posts={navResources.posts} />
        </div>
        <SiteFooter />
      </div>
    </div>
  )
}
