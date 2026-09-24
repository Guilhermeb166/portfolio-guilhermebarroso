import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import HeroVideo from "@/components/hero/HeroVideo";
import Projects from "@/components/projects/Projects";


export default function Home() {
    return (
        <>
           <HeroVideo />
            <About />
            <Projects />
        </>
        
    );
}
