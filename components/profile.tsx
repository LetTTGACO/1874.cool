import Image from "next/image"
import Link from "next/link"

import type { NavItems } from "@/app/links"

export function Profile({ socials }: { socials: NavItems[] }) {
  return (
    <div className="w-auto items-center px-8 py-12 max-[400px]:px-7 max-[360px]:px-5 lg:w-full lg:max-w-[500px] lg:px-0">
      <Image
        src="https://image.1874.cool/1874/202401271817867.png"
        alt="1874 的头像"
        width={160}
        height={160}
        className="size-48 rounded-full max-[400px]:size-32 max-[360px]:size-28"
      />
      <h1 className="mt-8 text-3xl font-semibold break-words text-slate-950 lg:text-5xl dark:text-slate-50">
        1874
      </h1>
      <p className="mt-6 text-xl whitespace-pre-line text-slate-600 max-[400px]:mt-5 max-[360px]:mt-4 dark:text-gray-50">
        有粤语歌就不会有世界末日
      </p>
      <div className="mt-6 flex">
        {socials.map((social) => (
          <Link
            href={social.url}
            target="_blank"
            rel="noreferrer"
            aria-label={social.title}
            key={social.url}
          >
            <div className="mr-2 size-10 rounded-full leading-10">
              <Image
                src={social.icon}
                alt=""
                width={24}
                height={24}
                className="size-6 rounded-full leading-10"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
