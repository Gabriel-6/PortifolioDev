import { FaGithub, FaLinkedin } from "react-icons/fa"

const Header = () => {

    return (
        <div className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50 shadow-sm">
            <div className="flex justify-between h-16 items-center">
                <div className="flex items-center">
                    <span className="font-bold text-xl text-gradient ml-10">PortifolioDev</span>
                </div>
                <div className="hidden md:flex space-x-12 mr-10">
                    <a className="text-white hover:text-gray-300" href="#start">Inicio</a>
                    <a className="text-white hover:text-gray-300" href="#about">Sobre</a>
                    <a className="text-white hover:text-gray-300" href="#skills">Habilidades</a>
                    <a className="text-white hover:text-gray-300" href="#projects">Projetos</a>
                    <a className="text-white hover:text-gray-300" href="#contact">Contato</a>
                </div>
                <div className="flex space-x-12 mr-10">
                    <div className="flex items-center">
                        <a className="text-gray-300 hover:text-black" href="https://github.com/Gabriel-6" target="_blank" rel="noreferrer" ><FaGithub className="w-6 h-6"/></a>
                    </div>
                    <div>
                        <a className="text-gray-300 hover:text-blue-600" href="https://www.linkedin.com/in/gabriel-silva-pereira/" target="_blank" rel="noreferrer" ><FaLinkedin className="w-6 h-6"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header