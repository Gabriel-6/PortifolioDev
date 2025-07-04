import { FaGithub } from "react-icons/fa"
import { FaArrowUpRightFromSquare } from "react-icons/fa6"

const Projects = () => {
    return (
        <div id="projects" className="py-20 bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-gradient text-3xl font-bold text-center mb-16">Meus Projetos</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 m-5">
                    <div className="bg-gray-700 rounded-xl overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img src="https://res.cloudinary.com/dnbwedpku/image/upload/v1751391309/Routiny_af47s6.gif" alt="Routiny GIF" className="w-full h-full object-cover transition duration-500 hover:scale-110" />
                        </div>
                        <div>
                            <div className="flex justify-between px-4 py-4 items-center">
                                <h1 className="text-xl font-medium text-gray-300">Routiny - Planejador de Rotina</h1>
                                <span className="px-3 py-1 bg-indigo-900 rounded-xl text-gray-300 text-sm">Fullstack</span>
                            </div>
                            <div className="px-4 py-4">
                                <span className="text-gray-300 mb-4">Plataforma para criação e organização de rotinas diárias com tarefas personalizadas. Permite definir objetivos e horários, ajudando o usuário a manter foco, produtividade e disciplina ao longo do dia.</span>
                            </div>
                            <div className="px-4 py-4 flex flex-wrap gap-3">
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">React</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">JavaScript</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Python</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Fast API</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">JWT</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">PostgreSQL</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Tailwind CSS</span>
                            </div>
                            <div className="flex items-center px-4 py-4 text-blue-500 cursor-pointer">
                                <i><FaArrowUpRightFromSquare /></i>
                                <a href="https://routiny.vercel.app/" target="_blank" rel="noreferrer" className="ml-2 underline">Site</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-xl overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img src="https://res.cloudinary.com/dnbwedpku/image/upload/v1751391344/PetsInn_qdinon.png" alt="PetsInn" className="w-full h-full object-cover transition duration-500 hover:scale-110" />
                        </div>
                        <div>
                            <div className="flex justify-between px-4 py-4 items-center">
                                <h1 className="text-xl font-medium text-gray-300">Pets Inn - Reservas para Pets</h1>
                                <span className="px-3 py-1 bg-green-900 rounded-xl text-gray-300 text-sm">Mobile</span>
                            </div>
                            <div className="px-4 py-4">
                                <span className="text-gray-300 mb-4">Sistema para hotéis e creches pet que permite agendamentos, favoritos e gestão de reservas. Empresas e clientes podem editar perfis e acompanhar hospedagens, facilitando a organização para ambos.</span>
                            </div>
                            <div className="px-4 py-4 flex flex-wrap gap-3">
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">React Native</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">JavaScript</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Python</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Flask</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">WebSocket</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">MySQL</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">CSS</span>
                            </div>
                            <div className="flex items-center px-4 py-4 text-blue-500 cursor-pointer">
                                <i><FaGithub /></i>
                                <a href="https://github.com/Gabriel-6/Pets-Inn" target="_blank" rel="noreferrer" className="ml-2 underline">Github</a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-700 rounded-xl overflow-hidden">
                        <div className="h-48 overflow-hidden">
                            <img src="https://res.cloudinary.com/dnbwedpku/image/upload/v1751400709/spotify_ykjeq4.png" alt="Spotify-Converter" className="w-full h-full object-cover transition duration-500 hover:scale-110" />
                        </div>
                        <div>
                            <div className="flex justify-between px-4 py-4 items-center">
                                <h1 className="text-xl font-medium text-gray-300">Spotify Converter - Suas playlists do Spotify no YouTube</h1>
                                <span className="px-3 py-1 bg-indigo-900 rounded-xl text-gray-300 text-sm">Fullstack</span>
                            </div>
                            <div className="px-4 py-4">
                                <span className="text-gray-300 mb-4">Converta playlists do Spotify para o YouTube de forma rápida e simples. Basta colar o link da playlist e o sistema encontra os vídeos correspondentes no YouTube automaticamente.</span>
                            </div>
                            <div className="px-4 py-4 flex flex-wrap gap-3">
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">React</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">JavaScript</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Python</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">FastAPI</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">AioHTTP</span>
                                <span className="py-1 px-2 bg-gray-600 rounded-full text-gray-100 text-xs">Asyncio</span>
                            </div>
                            <div className="flex px-4 py-4 gap-5 text-blue-500 cursor-pointer">
                                <div className="flex items-center">
                                    <i><FaGithub /></i>
                                    <a href="https://github.com/Gabriel-6/PlaylistConverter" target="_blank" rel="noreferrer" className="ml-2 underline">Github</a>
                                </div>
                                <div className="flex items-center">
                                    <i><FaArrowUpRightFromSquare /></i>
                                    <a href="https://spotify-converter.vercel.app/" target="_blank" rel="noreferrer" className="ml-2 underline">Site</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
