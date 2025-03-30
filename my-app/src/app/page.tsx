import { Gabarito } from "next/font/google";
import Navbar from "./navbar";
import Image from "next/image";

const gabarito = Gabarito({
  variable: "--font-gabarito",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-10 md:p-16 lg:px-30 xl:p-24 font-[family-name:var(--font-geist-sans)]" id="home">
      <Navbar />
      <main className="flex flex-col row-start-2 items-center justify-center text-center">
        <div className="text-[130px] font-s">sravya.</div>
        <ol className="list-inside list-decimal text-center">
          <div className={`${gabarito.className} mb-5 tracking-[-.01em] text-[24px] px-40`}>
            Software Engineer and Designer crafting <b>seamless, innovative, and human-centered experiences </b>@ Slack, Develop for Good, No Limit Living.
          </div>
        </ol>
        <div>
          <div className="hidden lg:block h-[41vh]" ></div>
            <section className="grid grid-cols-3 gap-0" id="about">
              <div className="col-span-1 pl-20 pt-20">
              <Image src="/id.png" alt="id" width={354} height={488} className="transform transition-all duration-300 hover:scale-105"/>
              </div>
              <div className="col-span-2 pl-20">
                <h2 className="text-[74px] mb-4 text-left">about me.</h2>
                <p className={`${gabarito.className} text-left mb-4 text-[24px]`}>
                I’m Sravya, a junior majoring in Computer Science and Data Science with a Certificate in Entrepreneurship and Innovation at Purdue University. <br></br><br></br>
                <b>I see technology as more than just lines of code, it’s a way to shape ideas into something tangible, intuitive, and meaningful. <br></br><br></br></b>I’m always exploring new ways to bring these ideas to life, whether through front-end development, thoughtful UX, or simply reimagining how people interact with technology. <b>I aim to create in such a way that fosters accessibility, connection, and joyful human experiences for social good. </b> <br></br>      </p>
              </div>
          </section>
          <div className="hidden lg:block h-[11vh]"></div>
          <section className="grid grid-cols-2 gap-16 px-20 mt-20 text-left">
            <div>
              <h2 className="text-[74px] mb-4">experience.</h2>
              <ul className={`${gabarito.className} text-[24px]`}>
                <li><b>Incoming Software Engineering Intern @ Slack</b></li>
                <li>May - Aug 2025</li> <br></br>
                <li><b>Data Analysis and Software Engineering @ No Limit Living</b></li>
                <li>Jan - May 2025</li> <br></br>
                <li><b><u><a href="https://slack.engineering/driving-a-project-intern-edition/" target="_blank" rel="noopener noreferrer" className="hover:text-[#D9D9D9]">Software Engineering Intern @ Slack</a></u></b></li>
                <li>May - Aug 2024</li> <br></br>
                <li><b>Software Engineer @ Develop For Good</b></li>
                <li>May - Aug 2023</li> <br></br>
              </ul>
            </div>
            <div className="pl-10">
              <h2 className="text-[74px] mb-4">languages.</h2>
              <ul className={`${gabarito.className} text-[24px]`}>
              <li>Python</li>
                <li>Java</li>
                <li>C/C++</li>
                <li>HTML/CSS</li>
                <li>React</li>
                <li>SQL</li>
                <li>R</li>
                <li>SwiftUI</li>
                <li><b>and English obviously lol.</b></li>
              </ul>
            </div>
          </section>
          <section className="px-20 mt-20 text-left">
  <h2 className="text-[74px] mb-8" id="work">projects.</h2>
  <div className="grid grid-cols-2 gap-8">
    <a href="https://github.com/snagalak/fintra" target="_blank" rel="noopener noreferrer">
      <Image 
        src="/fintra.png" 
        alt="Project 1" 
        width={500} 
        height={350} 
        className="rounded-lg transform transition-all duration-300 hover:scale-105"
      />
    </a>
    <a href="https://github.com/snagalak/cashplus" target="_blank" rel="noopener noreferrer">
      <Image 
        src="/cashplus.png" 
        alt="Project 2" 
        width={500} 
        height={350} 
        className="rounded-lg transform transition-all duration-300 hover:scale-105"
      />
    </a>
    <br></br>
    <div className="col-span-2 flex justify-center">
      <a href="https://github.com/snagalak/boilerbooks" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/boilerbooks.png" 
          alt="Project 3" 
          width={500} 
          height={350} 
          className="rounded-lg transform transition-all duration-300 hover:scale-105"
        />
      </a>
    </div>
  </div>
</section>

        </div>
        <div className="hidden lg:block h-[3vh]"></div>
          <section className="grid grid-cols-2 gap-16 px-20 mt-20 text-left">
            <div>
              <h2 className="text-[74px] mb-4">leadership.</h2>
              <ul className={`${gabarito.className} text-[24px]`}>
              <li><b>Undergraduate Leadership Team Member @ Women in Science Program</b></li>
                <li>Aug 2024 - Present</li> <br></br>
                <li><b>CS Undergraduate Teaching Assistant</b></li>
                <li>Aug 2023 - Present</li> <br></br>
                <li><b>CS Undergraduate Student Board Member</b></li>
                <li>Jan 2023 - Present</li> <br></br>
                <li><b>Curriculum Director @ Girls Who Code Purdue</b></li>
                <li>Aug 2023 - Aug 2024</li> <br></br>
              </ul>
            </div>
            <div className="pl-10">
              <h2 className="text-[74px] mb-4">awards.</h2>
              <ul className={`${gabarito.className} text-[24px] list-disc`}>
              <li>Mortar Board Challenge Award</li>
              <li>Eli Lilly Make Life Better Scholarship</li>
              <li>Best Financial Hack by Capital One & Best AI Hack @ TechTogether MLH Online</li>
              <li>David & Dora Dodson Endowment Scholarship</li>
              <li>Jandos Scholarship</li>
              <li>Outstanding Freshman in Data Science</li>
              <li>Environmental Excellence School Award for Best Mobile Application</li>
            </ul>
            </div>
          </section>
          <section className="px-20 mt-20 text-left grid justify-start" id="contact">
  <div className="flex items-center justify-between">
    <div className="mr-20">
      <h2 className="text-[74px] mb-4">contact me.</h2>
      <p className={`${gabarito.className} text-[24px]`}>
        Thanks for stopping by! <br />
        <b>Curious to collaborate? </b>Let's make it happen!
      </p>
    </div>
    <div className="flex gap-8">
      {/* LinkedIn Image */}
      <a href="https://www.linkedin.com/in/sravyanagalakunta" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/linkedin.png" 
          alt="LinkedIn" 
          width={80} 
          height={80} 
          className="rounded-full transform transition-all duration-300 hover:scale-105"
        />
      </a>
      {/* Email Image */}
      <a href="mailto:sravya2704@gmail.com" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/email.png" 
          alt="Email" 
          width={80} 
          height={80} 
          className="rounded-full transform transition-all duration-300 hover:scale-105"
        />
      </a>
    </div>
  </div>
</section>
      </main>
    </div>
    <div>
<footer className={`${gabarito.className} text-[18px] w-full bg-[#313131] text-center text-white py-5`}>
        <p>Made with ♥ by Sravya © 2025.</p>
      </footer>
    </div>
    </div>
    
  );
}
