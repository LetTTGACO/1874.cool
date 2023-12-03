import { Content } from "@/components/content"
import { Profile } from "@/components/profile"
import { SiteFooter } from "@/components/site-footer"

import getNavLinks from "./links"

export const revalidate = 86400

export default async function IndexPage() {
  const navResources = getNavLinks()
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex-col">
        <div className="lg:mx-auto lg:flex lg:max-w-[1600px] lg:justify-between lg:px-16">
          {/*左边个人简介*/}
          <Profile socials={navResources.socials} />
          {/*内容*/}
          <Content links={navResources.links} posts={navResources.posts} />
        </div>
        {/*底部*/}
        <SiteFooter />
      </div>
    </div>
  )
}
