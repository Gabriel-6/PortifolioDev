import { FaBell, FaEnvelope, FaGithub, FaLinkedin, FaPhone } from "react-icons/fa"

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-900 py-20">
      <h1 className="text-gradient text-3xl font-bold text-center mb-16">Entre em Contato</h1>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 px-4 md:px-10">
          <div>
            <div>
              <h1 className="text-2xl text-gray-300 font-medium">Vamos conversar!</h1>
              <h3 className="py-5 text-gray-300 text-xl">Estou na busca de novos desafios profissionais! Se você tem uma vaga bacana, um projeto legal ou conhece alguém que esteja contratando, adoraria bater um papo. Disponível para oportunidades fixas ou projetos pontuais onde eu possa colocar minhas habilidades em prática. Manda uma mensagem e vamos conversar!</h3>
            </div>
            <div className="space-y-5">
              <div className="flex items-center">
                <div className="py-4 px-3 bg-indigo-900 rounded-full">
                  <FaEnvelope className="text-indigo-300" />
                </div>
                <div className="text-gray-300 ml-3">
                  <h1 className="text-xl font-medium">Email</h1>
                  <p className="text-lg">gs75352@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="py-4 px-3 bg-blue-900 rounded-full">
                  <FaPhone className="text-blue-300" />
                </div>
                <div className="text-gray-300 ml-3">
                  <h1 className="text-xl font-medium">Telefone</h1>
                  <p className="text-lg">(35) 99942-7007</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="py-4 px-3 bg-green-600 rounded-full">
                  <FaEnvelope className="text-green-300"/>
                </div>
                <div className="text-gray-300 ml-3">
                  <h1 className="text-xl font-medium">Localização</h1>
                  <p className="text-lg">Pouso Alegre, MG - Brasil</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gray-300 text-xl font-medium pt-5">Redes Sociais</p>
              <div className="flex gap-5 justify-normal pt-3">
                <a href="https://github.com/Gabriel-6" target="_blank" rel="noreferrer" className=""><FaGithub className="w-10 h-10 text-gray-300 hover:text-black"/></a>
                <a href="https://www.linkedin.com/in/gabriel-silva-pereira/" target="_blank" rel="noreferrer" className=""><FaLinkedin className="w-10 h-10 text-gray-300 hover:text-blue-600"/></a>
              </div>
            </div>
          </div>
          <div className="relative w-fit mx-auto my-auto hidden md:block">
            <img className="w-[360px]" src="https://png.pngtree.com/png-clipart/20230206/ourmid/pngtree-cell-phone-mockup-png-image_6584021.png" alt="Phone Img" />
            <FaBell className="absolute top-1/2 left-1/2 -translate-x-[35%] -translate-y-1/2 text-white w-10 h-10 animate-bell-shake " />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact