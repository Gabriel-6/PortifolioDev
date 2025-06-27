import { FaDownload } from "react-icons/fa"

const About = () => {

    return (
        <div id="about" className="pt-20 bg-gray-800">
            <div>
                <h1 className="text-gradient text-3xl font-bold text-center mb-16">Sobre Mim</h1>
            </div>
            <div className="flex justify-center px-4 md:px-10">
                <div className="md:w-1/2 mb-10">
                    <h1 className="text-gray-300 text-2xl font-semibold pb-3">Quem sou eu?</h1>
                    <p className="text-gray-300 text-xl mb-5">Minha jornada no mundo da tecnologia começou de um jeito um pouco diferente: passei 1 ano e 5 meses atuando como Analista de Sistemas e prestando suporte técnico. Essa experiência me deu uma base super importante em resolução de problemas e me ensinou a me comunicar bem com todo tipo de gente, tanto equipes quanto clientes.</p>
                    <p className="text-gray-300 text-xl mb-5">Mas foi nesse caminho que descobri minha verdadeira paixão: construir coisas. A transição para o desenvolvimento Full-Stack foi um passo natural, e hoje me sinto em casa codificando. Sou proficiente em Python, React, JavaScript, MySQL e PostgreSQL e adoro colocar a mão na massa para criar aplicações web que realmente funcionam e fazem a diferença.</p>
                    <p className="text-gray-300 text-xl mb-5">Sou uma pessoa que valoriza muito a colaboração e a comunicação clara. Acredito que os melhores resultados vêm quando a gente trabalha junto, trocando ideias e aprendendo uns com os outros. Estou sempre de olho nas novidades e animado para aplicar o que aprendo em projetos que gerem um impacto positivo.</p>
                    <div className="flex text-gray-300 mt-10 justify-center pb-5">
                        <a className="flex items-center px-6 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg" href="/curriculo-gabriel.pdf" download="curriculo-gabriel.pdf"><i className="mr-2"><FaDownload /></i>Baixar Curriculo</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About