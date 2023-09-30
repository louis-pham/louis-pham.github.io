import { FaGraduationCap, FaCertificate, FaRegCalendar } from "react-icons/fa6"
import { Noto_Sans_JP } from 'next/font/google'
import Experience from "@/components/experience"
import PhotoAlbum from "@/components/photo-album"

const jpFont = Noto_Sans_JP({ weight: "300", preload: false })

export default function Home() {
  return (
    <>
      <section className="my-6">
        <h1 className="text-3xl md:text-4xl font-medium mb-8">I&apos;m Louis Pham,</h1>
        <p>and welcome to my page! 👋 I&apos;m a software developer based in the Greater Toronto Area. I love all sorts of creating and tinkering, whether it be coding, dance, PC building — you name it!</p>
        <br />
        <p>I&apos;m at <b>Zensurance</b> (<a href="https://www.zensurance.com/careers" target="_blank">we&apos;re hiring!</a>), taking a tech-first approach with insurance to give small business owners a bit of relief in their already hectic lives.</p>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-normal mb-2">My journey...</h2>
        <div className="flex flex-col gap-2">
          <Experience 
            header={"Zensurance"}
            position={"Software Developer"}
            location={"Toronto, CA"}
            timeline={"2020 - now"}
            active={true}
            blurb={<>"Looks like <s>meat</s> software's back on the menu!"</>}
          >
            <ul className="list-disc list-inside">
              <li>pioneered approach for team&apos;s monolith to microservices migration (NestJS)</li>
              <li>deploy new + manage existing services (Kubernetes, Docker, GitHub Actions)</li>
              <li>share knowledge on product&apos;s latest technical changes (intra- and cross-team), and help new hires with legacy knowledge</li>
              <li>learning fancy insurance jargon</li>
            </ul>
          </Experience>
          <Experience
            header={"Link Interac Inc."}
            position={"Assistant Language Teacher"}
            location={"Yokohama, JP"}
            timeline={"2017 - 2019"}
            blurb={"What does everyone do after graduating university? Moving halfway across the globe for two years, of course!"}
          >
            <ul className="list-disc list-inside">
              <li>prepared and ran English lessons for 3 public elementary schools, working with homeroom teachers to ensure retention of topics</li>
              <li>ate delicious school lunches and outran all the kids during recess</li>
            </ul>
          </Experience>
          <Experience
            header={"Canadian Institute for Theoretical Astrophysics"}
            position={"Student Researcher"}
            location={"Toronto, CA"}
            timeline={"2017"}
            blurb={"Keep doing what you were doing in school, but get paid for it this time? Count me in!"}
          >
            <ul className="list-disc list-inside">
              <li>created Python wrapper scripts for an existing gravitational lensing tool to facilitate team&apos;s custom maps and theoretical models</li>
              <li>got to use a supercomputer (SciNet)!</li>
            </ul>
          </Experience>
          <section className="outline-dotted outline-stone-400 py-3 px-5 mb-2 rounded-md text-black/[0.55]">
            <div className="flex justify-between">
              <h3 className="flex-1 text-lg font-medium">University of Toronto</h3>
              <div className="flex gap-x-3 flex-wrap justify-start content-center text-sm font-light">
                <span><FaGraduationCap style={{ display: "inline", verticalAlign: "-7%" }} /> 2017</span>
              </div>
            </div>
            <FaCertificate className="text-red-600" style={{ display: "inline", verticalAlign: "-7%" }} /> HBSc.
            <p className="text-sm font-medium">
              Computer Science + Astronomy & Astrophysics 
            </p>
          </section>
          <Experience
            header={"University of Toronto, KPE Faculty"}
            position={"Student Developer"}
            location={"Toronto, CA"}
            timeline={"2015 - 2016"}
          >
            <ul className="list-disc list-inside">
              <li>built UofT&apos;s online Sports Hall of Fame</li>
              <li>created schedule displays for gyms across campus</li>
              <li>improved user experience with overhauled e-forms in OSCAR EMR</li>
            </ul>
          </Experience>
          <Experience
            header={"Canada Health Infoway"}
            position={"Software Developer, Co-op"}
            location={"Toronto, CA"}
            timeline={"2014 - 2015"}
          >
            <ul className="list-disc list-inside">
              <li>created plugins for a Confluence-based website, such as hover tooltips and lookup tools</li>
              <li>improved several AngularJS websites with new features and styling</li>
            </ul>
          </Experience>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-2xl font-medium mb-2">Check out my <a href="/Louis Pham - Resume.pdf" target="_blank">resumé</a>.</h2>
        <p>You can also take a peek at my <a href="https://www.linkedin.com/in/louispham" target="_blank">LinkedIn</a> and <a href="https://github.com/louis-pham" target="_blank">GitHub</a>, and if you want to contact me directly, send me an <a href="mailto:louis.c.pham@gmail.com">email</a>!</p>
      </section>
      <section className="my-6">
        <h2 className="text-lg font-medium mb-2">Fun facts:</h2>
        <ul className="list-disc list-inside">
          <li>can spin on my head</li>
          <li>will take up any opportunity to snowboard</li>
          <li className={jpFont.className}>日本語能力試験２級を持っています！</li>
          <li>favourite emoji: 😬</li>
          {/* <li>recent top tracks: </li> */}
        </ul>
        <PhotoAlbum />
      </section>
      <section className="my-6">
        <h2 className="text-lg font-medium mb-2">Thanks for visiting!</h2>
      </section>
      <section className="mt-12">
        <p className="text-xs">You&apos;ve made it this far! Have a cookie 🍪.</p>
      </section>
    </>
  )
}
