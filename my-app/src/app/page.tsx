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
      <div
        className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:px-10 md:p-16 lg:px-30 xl:p-24 font-[family-name:var(--font-geist-sans)]"
        id="home"
      >
        <Navbar />
        <main className="flex flex-col row-start-2 items-center justify-center text-center pr-6">
          <div className="block h-[22vh] lg:h-[15vh]  xl:h-[9vh] 2xl:h-[10vh] md:h-[15vh]"></div>

          <div className="text-[80px] xl:text-[130px] 2xl:text-[130px] lg:text-[130px] sm:text-[80px] sm:px-30">
            sravya.
          </div>
          <ol className="list-inside list-decimal text-center">
            <div
              className={`${gabarito.className} mb-5 text-[20px] sm:text-[20px] lg:text-[24px] px-5 sm:px-5 md:px-15 lg:px-25`}
            >
              Software Engineer and Designer crafting{" "}
              <b>seamless, innovative, and human-centered experiences </b>@ 
              <a href="https://slack.com/about" target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#D9D9D9]"
                        ><u>Slack</u></a>, <a href="https://www.developforgood.org/" target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#D9D9D9]"
                      ><u>Develop For Good</u></a>,<a href="https://nolimitlivingllc.com/" target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D9D9D9]"
                    ><u>No Limit Living</u></a>.
            </div>
          </ol>
          <div>
            <div className="block h-[30vh] lg:h-[25vh] xl:h-[25vh] 2xl:h-[25vh] md:h-[25vh]"></div>
            <section
              className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-16 px-6 lg:px-20"
              id="about"
            >
              <div className="flex justify-center pt-10 lg:pt-20">
                <Image
                  src="/id.png"
                  alt="id"
                  width={250}
                  height={350}
                  className="transform transition-all duration-300 hover:scale-105 sm:w-[300px] sm:h-[420px]"
                />
              </div>
              <div className="lg:col-span-2 mt-6 lg:mt-0">
                <h2 className="text-[40px] sm:text-[50px] lg:text-[74px] mb-4 text-left">
                  about me.
                </h2>
                <p
                  className={`${gabarito.className} mb-4 text-[18px] sm:text-[20px] lg:text-[24px] text-left`}
                >
                  I’m Sravya, a junior majoring in Computer Science and Data
                  Science with a Certificate in Entrepreneurship and Innovation
                  at Purdue University. <br />
                  <br />
                  <b>
                    I see technology as more than just lines of code; it’s a way
                    to shape ideas into something tangible, intuitive, and
                    meaningful. <br />
                    <br />
                  </b>
                  I’m always exploring new ways to bring these ideas to life,
                  whether through front-end development, thoughtful UX, or
                  simply reimagining how people interact with technology.
                  <b>
                    {" "}
                    I aim to create in such a way that fosters accessibility,
                    connection, and joyful human experiences for social good.
                  </b>{" "}
                  <br />
                </p>
              </div>
            </section>

            <div className="hidden lg:block h-[11vh]"></div>
            <section className="lg:px-20 xl:px-20 2xl:px-20 px-6 mt-20 text-left flex flex-col lg:grid lg:grid-cols-2 gap-0 sm:gap-16 md:gap-55 lg:gap-55 xl:gap-55 2xl:gap-16">
              <div>
                <h2 className="text-[40px] sm:text-[50px] lg:text-[74px] mb-4">
                  experience.
                </h2>
                <ul
                  className={`${gabarito.className} text-[18px] sm:text-[20px] lg:text-[24px]`}
                >
                  <li>
                    <b>Incoming Software Engineering Intern @ Slack</b>
                  </li>
                  <li>May - Aug 2025</li> <br />
                  <li>
                    <b>
                      Data Analysis and Software Engineering @ No Limit Living
                    </b>
                  </li>
                  <li>Jan - May 2025</li> <br />
                  <li>
                    <b>
                      <u>
                        <a
                          href="https://slack.engineering/driving-a-project-intern-edition/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#D9D9D9]"
                        >
                          Software Engineering Intern @ Slack
                        </a>
                      </u>
                    </b>
                  </li>
                  <li>May - Aug 2024</li> <br />
                  <li>
                    <b>Software Engineer @ Develop For Good</b>
                  </li>
                  <li>May - Aug 2023</li> <br />
                </ul>
              </div>
              <div className="mt-10 lg:mt-0">
                <h2 className="text-[40px] sm:text-[50px] lg:text-[74px] mb-4">
                  languages.
                </h2>
                <ul
                  className={`${gabarito.className} text-[18px] sm:text-[20px] lg:text-[24px]`}
                >
                  <li>Python</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>HTML/CSS</li>
                  <li>React</li>
                  <li>SQL</li>
                  <li>R</li>
                  <li>SwiftUI</li>
                  <li>
                    <b>and English obviously lol.</b>
                  </li>
                </ul>
              </div>
            </section>

            <section
              className="lg:px-20 xl:px-20 2xl:px-20 px-6 mt-20 text-left grid justify-start"
              id="projects"
            >
              <h2
                className="text-[40px] sm:text-[50px] lg:text-[74px] mb-8"
                id="work"
              >
                projects.
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <a
                  href="https://github.com/snagalak/fintra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/fintra.png"
                    alt="Project 1"
                    width={500}
                    height={350}
                    className="rounded-lg transform transition-all duration-300 hover:scale-105"
                  />
                </a>
                <a
                  href="https://github.com/snagalak/cashplus"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/cashplus.png"
                    alt="Project 2"
                    width={500}
                    height={350}
                    className="rounded-lg transform transition-all duration-300 hover:scale-105"
                  />
                </a>
                <div className="col-span-1 flex justify-center">
                  <a
                    href="https://github.com/snagalak/boilerbooks"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
          <section className="lg:px-20 xl:px-20 2xl:px-20 px-6 mt-20 text-left flex flex-col lg:grid lg:grid-cols-2 gap-0 sm:gap-16 md:gap-16 lg:gap-16 xl:gap-16 2xl:gap-16">
            <div>
              <h2 className="text-[40px] sm:text-[50px] lg:text-[74px] mb-4">
                leadership.
              </h2>
              <ul
                className={`${gabarito.className} text-[18px] sm:text-[20px] lg:text-[24px]`}
              >
                <li>
                  <b>
                    
                    <a href="https://www.purdue.edu/science/wisp/undergraduate/staff_listing.html" target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D9D9D9]"
                    ><u>Undergraduate Leadership Team Member @ Women in Science
                    Program</u></a>
                  </b>
                </li>
                <li>Aug 2024 - Present</li> <br />
                <li>
                  <b>CS Undergraduate Teaching Assistant</b>
                </li>
                <li>Aug 2023 - Present</li> <br />
                <li>
                  <b>CS Undergraduate Student Board Member</b>
                </li>
                <li>Jan 2023 - Present</li> <br />
                <li>
                  <b>Curriculum Director @ Girls Who Code Purdue</b>
                </li>
                <li>Aug 2023 - Aug 2024</li> <br />
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-[40px] sm:text-[50px] lg:text-[74px] mb-4">
                awards.
              </h2>
              <ul
                className={`${gabarito.className} text-[18px] sm:text-[20px] lg:text-[24px] list-disc`}
              >
                <li>Mortar Board Challenge Award</li>
                <li>Eli Lilly Make Life Better Scholarship</li>
                <li>
                  
                  <a href="https://devpost.com/software/fintra" target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D9D9D9]"
                    ><u>Best Financial Hack by Capital One & Best AI Hack @
                  TechTogether MLH Online</u></a>
                </li>
                <li>David & Dora Dodson Endowment Scholarship</li>
                <li>Jandos Scholarship</li>
                <li><a href=" https://www.cs.purdue.edu/news/articles/2023/2023_purdue_cs_awards.html" target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D9D9D9]"
                    ><u>Outstanding Freshman in Data Science</u></a></li>
               
                <li><a href="https://www.beeahgroup.com/the-beeah-school-of-environments-11th-environmental-excellence-school-award-sees-record-entries-of-over-700/
" target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D9D9D9]"
                    ><u>Environmental Excellence School Award for Best Mobile
                  Application</u></a>
                  </li>
              </ul>
            </div>
          </section>

          <section
            className="px-6 mt-20 text-left grid justify-start lg:px-20"
            id="contact"
          >
            {/* Contact Text Section */}
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-[40px] sm:text-[60px] lg:text-[74px] mb-4">
                contact me.
              </h2>
              <p
                className={`${gabarito.className} text-[20px] sm:text-[24px] lg:text-[24px]`}
              >
                Thanks for stopping by! <br />
                <b>Curious to collaborate? </b>Let's make it happen!
              </p>
            </div>

            {/* LinkedIn and Email Icons in the same row (for large screens) */}
            <div className="flex justify-center gap-8 mt-10">
              <a
                href="https://www.linkedin.com/in/sravyanagalakunta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={80}
                  height={80}
                  className="rounded-full transform transition-all duration-300 hover:scale-105"
                />
              </a>
              <a
                href="mailto:sravya2704@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/email.png"
                  alt="Email"
                  width={80}
                  height={80}
                  className="rounded-full transform transition-all duration-300 hover:scale-105"
                />
              </a>
            </div>
          </section>
        </main>
      </div>
      <div>
        <footer
          className={`${gabarito.className} text-[18px] w-full bg-[#313131] text-center text-white py-5`}
        >
          <p>Made with ♥ by Sravya © 2025.</p>
        </footer>
      </div>
    </div>
  );
}
