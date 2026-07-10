export function SiteFooter() {
  return (
    <div className="w-full text-sm md:px-6 lg:absolute lg:bottom-0 lg:max-w-[1600px]">
      <footer className="block py-4">
        <div className="mx-auto">
          <hr className="mb-4 border-b border-gray-200" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4">
              <div className="mb-2 flex justify-between text-center md:mb-0 md:text-left">
                <a
                  href="https://1874.cool"
                  target="_blank"
                  rel="noreferrer"
                  className="py-1 text-center text-sm font-semibold text-slate-500 md:text-left"
                >
                  Copyright © 2026 1874
                </a>
                <a
                  href="https://beian.miit.gov.cn/"
                  target="_blank"
                  rel="noreferrer"
                  className="ml-2 py-1 text-center text-sm font-semibold text-slate-500 md:text-left"
                >
                  陕ICP备18013290号-3
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
