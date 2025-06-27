import { FaServer, FaTerminal, FaPython, FaReact, FaHtml5, FaJs, FaNode } from "react-icons/fa"
import { SiTailwindcss, SiPostgresql, SiFlask } from "react-icons/si";

const Skills = () => {
    return (
        <div id="skills" className='py-20 bg-gray-900 text-center'>
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-gradient mb-16">Minhas Habilidades</h1>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="bg-gray-800 rounded-lg m-5">
                        <div className="ml-7 flex items-center my-10">
                            <div className="flex w-10 h-10 bg-blue-900 items-center rounded-full">
                                <i className="m-auto text-blue-500"><FaTerminal /></i>
                            </div>
                            <h1 className="ml-3 text-xl text-gray-300 font-semibold">Frontend</h1>
                        </div>
                        <div className="mb-5">
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <FaHtml5 className="w-10 h-10 text-blue-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">HTML/CSS</span>
                                        <span className="text-gray-300">90%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <FaReact className="w-10 h-10 text-blue-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">React</span>
                                        <span className="text-gray-300">85%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <FaJs className="w-10 h-10 text-blue-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">JavaScript</span>
                                        <span className="text-gray-300">85%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <SiTailwindcss className="w-10 h-10 text-blue-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">TailwindCSS</span>
                                        <span className="text-gray-300">65%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-800 rounded-lg m-5">
                        <div className="ml-7 flex items-center my-10">
                            <div className="flex w-10 h-10 bg-indigo-900 items-center rounded-full">
                                <i className="m-auto text-indigo-500"><FaServer /></i>
                            </div>
                            <h1 className="ml-3 text-xl text-gray-300 font-semibold">Backend</h1>
                        </div>
                        <div className="mb-5">
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <FaPython className="w-10 h-10 text-indigo-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">Python</span>
                                        <span className="text-gray-300">95%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "95%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <SiFlask className="w-10 h-10 text-indigo-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">APIs REST</span>
                                        <span className="text-gray-300">90%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <SiPostgresql className="w-10 h-10 text-indigo-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">Banco de Dados</span>
                                        <span className="text-gray-300">70%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="ml-7 mr-7">
                                <div className="flex items-center">
                                    <FaNode className="w-10 h-10 text-indigo-500" />
                                    <div className="flex justify-between items-center w-full ml-3">
                                        <span className="text-gray-300">Node</span>
                                        <span className="text-gray-300">40%</span>
                                    </div>
                                </div>

                                <div className="mt-2 bg-gray-700 rounded-full h-2.5 w-full mb-3">
                                    <div className="bg-indigo-500 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-gray-300 text-2xl font-semibold pt-5">Outras Habilidades</h1>
                    <div className="flex justify-center flex-wrap gap-3 p-5">
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">Git/Github</span>
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">Testes Unitarios</span>
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">Analise de Dados</span>
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">React Native</span>
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">Selenium</span>
                        <span className="py-2 px-4 rounded-xl bg-gray-800 text-gray-300">UI/UX</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills