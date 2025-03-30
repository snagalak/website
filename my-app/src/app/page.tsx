import { Gabarito } from "next/font/google";
import Navbar from "./navbar";
import Image from "next/image";


const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export default function Home() {
  return (
    
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-10 md:p-16 lg:px-30 xl:p-24 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col row-start-2 items-center justify-center text-center">
        <div className="text-[130px] font-s">sravya.</div>
        <ol className="list-inside list-decimal text-center">
          <div className={`${gabarito.className} mb-5 tracking-[-.01em] text-[24px] px-40`}>
            Software Engineer and Designer crafting <b>seamless, innovative, and human-centered experiences </b>@ Slack, Develop for Good, No Limit Living.
          </div>
        </ol>
        <div>
          <div className="hidden lg:block h-[41vh]"></div>
        <section className="grid grid-cols-3 gap-0">
      <div className="col-span-1 pl-20 pt-20">
      <Image src="/id.png" alt="id" width={354} height={488} />

      </div>
      <div className="col-span-2 pl-20">
        <h2 className="text-[74px] mb-4 text-left">about me.</h2>
        <p className={`${gabarito.className} text-left mb-4 text-[24px]`}>
        I’m Sravya, a junior majoring in Computer Science and Data Science with a Certificate in Entrepreneurship and Innovation at Purdue University. <br></br><br></br>

<b>I see technology as more than just lines of code, it’s a way to shape ideas into something tangible, intuitive, and meaningful. <br></br><br></br>
</b>
I’m always exploring new ways to bring these ideas to life, whether through front-end development, thoughtful UX, or simply reimagining how people interact with technology. <b>I aim to create in such a way that fosters accessibility, connection, and joyful human experiences for social good. </b> <br></br>      </p>
      </div>
    </section>
        </div>
      </main>
    </div>
  );
}
