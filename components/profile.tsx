"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import { NavItems } from "@/app/links"

export function Profile({ socials }: { socials: NavItems[] }) {
  return (
    <div className=" w-auto items-center px-8 py-12 max-[400px]:px-7 max-[360px]:px-5 lg:w-full lg:max-w-[500px] lg:px-0">
      <Image
        src="https://image.1874.cool/1874/202401271817867.png"
        alt=""
        width={160}
        height={160}
        className="h-48 w-48 rounded-full max-[400px]:h-32 max-[400px]:w-32 max-[360px]:h-28 max-[360px]:w-28"
      />
      <h1 className="mt-8 break-words text-3xl font-semibold text-slate-950 dark:text-slate-50 lg:text-5xl">
        1874
      </h1>
      <p className="mt-6 whitespace-pre-line text-xl text-slate-600 dark:text-gray-50 max-[400px]:mt-5 max-[360px]:mt-4">
        有粤语歌就不会有世界末日
      </p>
      <div className="mt-6 flex">
        {socials.map((social, index) => {
          return (
            <Link href={social.url} target="_blank" key={index}>
              <div className="mr-2 h-10 w-10 rounded-full leading-10">
                <Image
                  src={social.icon}
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 rounded-full fill-amber-300 leading-10"
                />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
