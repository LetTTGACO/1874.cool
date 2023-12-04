import Image from "next/image"
import Link from "next/link"

import { CategoryWithLinks, NavItems } from "@/app/links"

export function LinkItem({ link }: { link: NavItems }) {
  return (
    <Link href={link.url} target="_blank">
      <div className="relative mb-6 flex min-h-[224px] min-w-0 cursor-pointer flex-col break-words rounded-3xl border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg xl:mb-0">
        <div className="flex items-center">
          <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
            {link.icon ? (
              <Image
                src={link.icon}
                className="object-fill"
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <span className="h-full w-full rounded-full border text-center font-bold leading-10">
                {link.title.slice(0, 1)}
              </span>
            )}
          </div>
          <span className="text-xl font-bold text-primary">{link.title}</span>
        </div>
        <div className="mt-2 line-clamp-5 text-sm text-primary">
          {link.description}
        </div>
        <div className="absolute bottom-6 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
          {link.url}
        </div>
      </div>
    </Link>
  )
}

export function PostItem({ link }: { link: NavItems }) {
  return (
    <Link href={link.url} target="_blank">
      <div className="relative mb-6 flex min-h-[190px] min-w-0 cursor-pointer flex-col break-words rounded-3xl border border-gray-200 p-4 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:bg-border hover:shadow-lg xl:mb-0">
        <div className="flex items-center">
          <div className="mr-3 flex h-10 w-10 overflow-hidden rounded-full">
            {link.icon ? (
              <Image
                src={link.icon}
                className="object-fill"
                alt=""
                width={40}
                height={40}
              />
            ) : (
              <span className="h-full w-full rounded-full border text-center font-bold leading-10">
                {link.title.slice(0, 1)}
              </span>
            )}
          </div>
          <span className="text-xl font-bold text-primary">{link.title}</span>
        </div>
        <div className="mt-2 line-clamp-3 text-sm text-primary">
          {link.description}
        </div>
        <div className="absolute bottom-6 line-clamp-1 text-xs text-slate-500 dark:text-slate-400">
          {link.url}
        </div>
      </div>
    </Link>
  )
}

export function Content({
  links,
  posts,
}: {
  links: CategoryWithLinks[]
  posts: CategoryWithLinks[]
}) {
  return (
    <div className="px-8 py-6 max-[400px]:px-7 max-[360px]:px-5 lg:w-[820px] lg:px-0 lg:py-12">
      <div className="mx-auto w-full px-4 md:px-6">
        {links.map((category) => {
          return (
            <div id={category.title} key={category.title} className="mb-12">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
                {category.links.map((link) => (
                  <LinkItem link={link} key={link.url} />
                ))}
              </div>
            </div>
          )
        })}
        {posts.map((category) => {
          return (
            <div id={category.title} key={category.title} className="mb-12">
              <div className="my-4">
                <h1 className="mb-2 text-2xl font-bold text-primary/80 sm:text-3xl">
                  {category.title}
                </h1>
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-1 md:gap-6 lg:grid-cols-2">
                {category.links.map((link) => (
                  <PostItem link={link} key={link.url} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
