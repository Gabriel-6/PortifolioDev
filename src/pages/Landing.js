import About from "../components/LandingPage/About"
import Contact from "../components/LandingPage/Contact"
import Footer from "../components/LandingPage/Footer"
import Header from "../components/LandingPage/Header"
import Home from "../components/LandingPage/Home"
import Projects from "../components/LandingPage/Projects"
import Skills from "../components/LandingPage/Skills"

const Landing = () => {
    return (
        <>
            <Header />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Landing