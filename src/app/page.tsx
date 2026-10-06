import About from "@/components/about/About";
import Contact from "@/components/contact/Contatct";
import HeroVideo from "@/components/hero/HeroVideo";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";


export default function Home() {
    return (
        <>
            <HeroVideo />
            <About />
            <Projects />
            <Skills/>
            <Contact/>
        </>
        
    );
}
