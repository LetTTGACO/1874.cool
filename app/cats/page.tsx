import { ReactNode } from "react"
import * as React from "react"
import Image from "next/image"
import Cat77 from "@/public/77.jpg"
import CatMilkyTea from "@/public/milkytea.jpg"
import AliPay from "@/public/alipay.jpg"
import Avatar from "@/public/avatar.jpg"
import WeChat from "@/public/wechat.jpg"

/**
 * Cats page.
 *
 * @returns {ReactNode} The rendered CatsPage component.
 */
export default function CatsPage(): ReactNode {
  return (
    <div className="container relative mx-auto min-h-screen w-full px-0">
      <div className="flex-col">
        <div className="lg:mx-auto lg:flex lg:max-w-[1600px] lg:justify-between lg:px-16">
          <div className="w-auto items-center px-8 py-12 max-[400px]:px-7 max-[360px]:px-5 lg:w-full lg:max-w-[500px] lg:px-0">
            <Image
              src={Avatar}
              alt=""
              width={160}
              height={160}
              className="h-48 w-48 rounded-full max-[400px]:h-32 max-[400px]:w-32 max-[360px]:h-28 max-[360px]:w-28"
            />
            <h1 className="mt-8 break-words text-3xl font-semibold text-slate-950 dark:text-slate-50 lg:text-5xl">
              1874
            </h1>
            <p className="mt-6 whitespace-pre-line text-xl font-bold text-slate-600 dark:text-gray-50 max-[400px]:mt-5 max-[360px]:mt-4">
              觉得不错？可以给我家「77 & 奶茶」买 🥩🍤 罐头吃！
            </p>
          </div>
          <div className="px-8 py-6 max-[400px]:px-7 max-[360px]:px-5 lg:w-[820px] lg:px-0 lg:py-12">
            <div className="mx-auto w-full px-4 md:px-6">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
                <Image
                  src={Cat77}
                  alt=""
                  className="mb-6 h-80 w-80 rounded-full max-[400px]:h-32 max-[400px]:w-32 max-[360px]:h-28 max-[360px]:w-28"
                />
                <Image
                  src={CatMilkyTea}
                  alt=""
                  className="mb-6 h-80 w-80 rounded-full max-[400px]:h-32 max-[400px]:w-32 max-[360px]:h-28 max-[360px]:w-28"
                />
              </div>
              <div className="mt-20 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-6 lg:grid-cols-2">
                <div
                  className="h-120 mb-6 w-80 rounded-lg border-4"
                  style={{ borderColor: "#1CAB1A" }}
                >
                  <Image src={WeChat} alt="" className="p-6"  />
                  <div
                    className="h-[60px] text-center text-xl font-bold leading-[60px]"
                    style={{ color: "white", backgroundColor: "#1fAB1A" }}
                  >
                    微信支付
                  </div>
                </div>
                <div
                  className="h-120 mb-6 w-80 rounded-lg border-4 text-center text-xl font-bold"
                  style={{ borderColor: "#166DFF" }}
                >
                  <Image src={AliPay} alt="" className="p-6" />
                  <div
                    className="h-[60px] text-center text-xl font-bold leading-[60px]"
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
    </div>
  )
}
