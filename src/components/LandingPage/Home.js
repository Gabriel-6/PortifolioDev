import Typing from "../Utils/Typing"

const Home = () => {
    return (
        <div id="start" className="bg-gray-900 min-h-screen flex items-center pt-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-white text-4xl font-bold md:text-6xl">Olá, eu sou o <span className="text-gradient">Gabriel Silva</span></h1>
                        <h2 className="text-gray-300 text-2xl mt-5">Desenvolvedor <span className="text-cyan-500 font-bold"><Typing words={["Fullstack", "Frontend", "Backend"]} /></span></h2>
                        <h2 className="text-gray-300 text-xl mt-3">Transformo ideias em soluções digitais inovadoras com código limpo e eficiente.</h2>
                        <div className="flex md:gap-10 md:justify-normal mt-10 justify-between">
                            <a href="#contact" className="px-10 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700">Contate-me</a>
                            <a href="#projects" className="px-10 py-2 rounded-lg border border-blue-800 text-blue-700 hover:bg-gray-800">Ver Projetos</a>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full opacity-20 blur-xl" />
                            <img className="w-full h-full rounded-full floating" src="https://avatars.githubusercontent.com/u/116814159?s=400&u=17139c2aadeece7305cfdfd86626648955f72d24&v=4" alt="Dev Img" />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home