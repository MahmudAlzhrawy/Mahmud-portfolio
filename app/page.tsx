import AboutMe from "@/src/components/AboutMe";
import Intro from "@/src/components/Intro";
import Projects from "@/src/components/Projects";
import Skills from "@/src/components/Skills";
import EducationExperience from "@/src/components/Edu&Exp";
import HeroSection from "@/src/components/Hero";
export default function Home() {
  return (
    <div className=" min-h-screen font-sans ">
      <video
        id="home"
        src="/videos/bg.mp4"
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />
      <div className="absolute inset-0 bg-black/20 z-10"></div>
      <div className="relative max-[391px]:mt-20 ">
        <Intro />
      </div>
      <section  id="about" className="About  relative " >
          <AboutMe/>  
      </section>
      <section id="skill"  className=" relative z-20">
        {/* @ts-ignore */}
        <Skills />
      </section>
      <section id="projects">
        <Projects/>
      </section>
      <section className="hireme">
      <HeroSection/>
      </section>
      <section>
        <EducationExperience/>
      </section>
    </div>
  );
}
