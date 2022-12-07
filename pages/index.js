import Head from "next/head";
import Image from "next/image";
import { CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="bg-[#0e0f11] pb-[100px]">
      <Head>
        <title>Design maestro</title>
      </Head>
      <div className={`z-[5] bg-[#0e0f11]/50 w-full fixed top-0`}>
        <div className="w-full px-4 sm:px-10 flex items-center justify-between flex-row max-w-7xl mx-auto">
          <div className="w-[200px] sm:w-[15vw]">
            <Image
              className="cursor-pointer"
              loading="lazy"
              alt="logo"
              width={400}
              height={100}
              src="/logo.svg"
              quality={90}
              blurDataURL={`/_next/image?url=/logo.svg&w=16&q=1`}
            />
          </div>
          <div className="flex flex-row gap-10">
            <ul className="hidden sm:flex items-center flex-row gap-6">
              <li className="text-gray-500 text-md">Features</li>
              <li className="text-gray-500 text-md">Macros</li>
              <li className="text-gray-500 text-md">FAQ</li>
            </ul>
            <button className="w-[25vw] max-w-[150px] truncate text-ellipsis oveflow-hidden text-xs sm:text-md px-3 py-2 sm:px-4 sm:py-3 font-semibold text-black bg-white rounded-full">
              Get Design Maestro
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pt-[100px] flex flex-col gap-10">
          <div className="justify-center px-6 max-w-2xl mx-auto flex gap-8 flex-col items-center">
            <h4 className="text-3xl 2xl:text-7xl md:text-[5vw] leading-tight text-white font-bold max-w-6xl text-center">
              Boost your design productivity
            </h4>
            <h4 className="text-md 2xl:text-3xl lg:text-[1.3vw] font-normal text-white/60 max-w-6xl text-center">
              Design Maestro is a free extension for Keyboard Maestro app. It
              lets you automate tasks that you repeat hundreds of times each
              day.
            </h4>
            <div className="flex truncate flex-col sm:flex-row gap-10 h-min">
              <button className="w-[35vw] max-w-[220px] truncate text-ellipsis oveflow-hidden bg-white px-4 h-min sm:px-6 py-2 sm:py-2 text-sm md:text-lg font-medium rounded-full">
                Get Design Maestro
              </button>
            </div>
          </div>
          <div>
            <div className="relative group h-full">
              <div
                className="z-[0] mx-auto absolute
              -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 
              rounded-lg blur opacity-25 group-hover:opacity-100 w-[80%] sm:w-[60%]
              transition duration-1000 group-hover:duration-200"
              ></div>
              <div className="items-center z-[1] w-full justify-center flex">
                <div className="w-[80%] sm:w-[60%] bg-gradient-to-r p-[2px] from-[#7928ca] to-[#ff0080] rounded-xl overflow-hidden">
                  <Image
                    src="/top-01.png"
                    width={824}
                    height={474}
                    layout="responsive"
                    quality={90}
                    alt="top-01.png"
                    className="rounded-xl"
                    loading="lazy"
                    blurDataURL={`/_next/image?url=/top-01.png&w=16&q=1`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-translate-y-[80px] banner--fadeBottom"></div>
      </div>
      <div className="justify-center mx-auto flex gap-20 flex-col items-center">
        <div className="px-6 max-w-2xl flex flex-col gap-8">
          <h4 className="text-3xl 2xl:text-5xl md:text-[3vw] leading-tight text-white font-bold max-w-6xl text-center">
            Don&apos;t repeat yourself
          </h4>
          <h4 className="text-md 2xl:text-xl lg:text-[1.3vw] font-normal text-white/60 max-w-6xl text-center">
            Design Maestro is a free extension for Keyboard Maestro app. It lets
            you automate tasks that you repeat hundreds of times each day.
          </h4>
        </div>
        <div className="px-6 flex max-w-6xl w-full justify-center flex-row flex-wrap gap-10">
          <div className="flex flex-col max-w-sm gap-5 items-center">
            <div className="bg-pink-600/10 p-3 rounded-xl w-min">
              <CodeBracketIcon className="text-pink-400 h-6 w-6" />
            </div>
            <h4 className="font-semibold text-white text-center text-lg">
              Shortcut to a better productivity
            </h4>
            <p className="font-normal text-gray-400 text-center text-md">
              Design Maestro is a free extension for Keyboard Maestro app. It
              lets you automate tasks that you repeat hundreds of times each
              day.
            </p>
          </div>
          <div className="flex flex-col max-w-sm gap-5 items-center">
            <div className="bg-yellow-600/10 p-3 rounded-xl w-min">
              <CodeBracketIcon className="text-yellow-400 h-6 w-6" />
            </div>
            <h4 className="font-semibold text-white text-center text-lg">
              Shortcut to a better productivity
            </h4>
            <p className="font-normal text-gray-400 text-center text-md">
              Design Maestro is a free extension for Keyboard Maestro app. It
              lets you automate tasks that you repeat hundreds of times each
              day.
            </p>
          </div>
          <div className="flex flex-col max-w-sm gap-5 items-center">
            <div className="bg-green-600/10 p-3 rounded-xl w-min">
              <CodeBracketIcon className="text-green-400 h-6 w-6" />
            </div>
            <h4 className="font-semibold text-white text-center text-lg">
              Shortcut to a better productivity
            </h4>
            <p className="font-normal text-gray-400 text-center text-md">
              Design Maestro is a free extension for Keyboard Maestro app. It
              lets you automate tasks that you repeat hundreds of times each
              day.
            </p>
          </div>
          <div className="flex flex-col max-w-sm gap-5 items-center">
            <div className="bg-blue-600/10 p-3 rounded-xl w-min">
              <CodeBracketIcon className="text-blue-400 h-6 w-6" />
            </div>
            <h4 className="font-semibold text-white text-center text-lg">
              Shortcut to a better productivity
            </h4>
            <p className="font-normal text-gray-400 text-center text-md">
              Design Maestro is a free extension for Keyboard Maestro app. It
              lets you automate tasks that you repeat hundreds of times each
              day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
