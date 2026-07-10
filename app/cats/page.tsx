import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { friends } from "@/config/friends"
import { siteConfig } from "@/config/site"
import Cat77 from "@/public/77.jpg"
import AliPay from "@/public/alipay.jpg"
import WeChat from "@/public/wechat.jpg"
import CatMilkyTea from "@/public/奶茶.jpg"

export const metadata: Metadata = {
  title: "喂猫的朋友们",
  description: siteConfig.description,
}

export default function CatsPage() {
  return (
    <div className="relative mx-auto min-h-screen w-full max-w-[1600px] px-0">
      <div className="flex-col">
        <div className="lg:mx-auto lg:flex lg:max-w-[1600px] lg:justify-between lg:px-16">
          <div className="w-auto items-center px-8 py-12 max-[400px]:px-7 max-[360px]:px-5 lg:w-full lg:max-w-[500px] lg:px-0">
            <Link href="/" aria-label="返回首页" className="inline-block">
              <Image
                src="https://image.1874.cool/1874/202401271817867.png"
                alt="1874 的头像"
                width={160}
                height={160}
                className="size-48 rounded-full max-[400px]:size-32 max-[360px]:size-28"
              />
            </Link>
            <h1 className="mt-8 text-3xl font-semibold break-words text-slate-950 lg:text-5xl dark:text-slate-50">
              1874
            </h1>
            <p className="mt-6 text-xl font-bold whitespace-pre-line text-slate-600 max-[400px]:mt-5 max-[360px]:mt-4 dark:text-gray-50">
              觉得不错？可以给我家「77 & 奶茶」买 🥫 罐头吃！
            </p>
          </div>
          <div className="px-8 py-6 max-[400px]:px-7 max-[360px]:px-5 lg:w-[820px] lg:px-0 lg:py-12">
            <div className="mx-auto w-full px-4 md:px-6">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
                <Image
                  src={Cat77}
                  alt="猫咪 77"
                  className="mb-6 w-full rounded-full"
                />
                <Image
                  src={CatMilkyTea}
                  alt="猫咪奶茶"
                  className="mb-6 w-full rounded-full"
                />
              </div>
              <div className="mt-10 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
                <div
                  className="mb-6 w-full rounded-lg border-4"
                  style={{ borderColor: "#1CAB1A" }}
                >
                  <Image src={WeChat} alt="微信支付二维码" className="p-6" />
                  <div
                    className="h-[60px] text-center text-xl leading-[60px] font-bold"
                    style={{ color: "white", backgroundColor: "#1fAB1A" }}
                  >
                    微信支付
                  </div>
                </div>
                <div
                  className="mb-6 w-full rounded-lg border-4 text-center text-xl font-bold"
                  style={{ borderColor: "#166DFF" }}
                >
                  <Image src={AliPay} alt="支付宝二维码" className="p-6" />
                  <div
                    className="h-[60px] text-center text-xl leading-[60px] font-bold"
                    style={{ color: "white", backgroundColor: "#166DFF" }}
                  >
                    支付宝
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-10 w-full">
        <h1 className="mt-2 w-full px-4 text-center text-5xl leading-tight font-bold text-gray-700 lg:text-6xl">
          喂猫的朋友们
        </h1>
        <div className="mx-auto mt-8 w-full px-4 text-center text-xl sm:px-12 lg:w-4/5">
          {friends.join("、")}
          <p className="mt-3 text-center text-sm text-gray-500">
            数据每周手动更新，当前 {friends.length} 位朋友喜欢「77 & 奶茶」
          </p>
        </div>
      </div>
    </div>
  )
}
