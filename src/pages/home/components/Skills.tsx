import {FC} from 'react';

/**
 * Um componente funcional que renderiza uma seção exibindo uma lista de tecnologias
 * e ferramentas dominadas pelo usuário. A seção inclui descrições sobre as tecnologias
 * principais, ferramentas adicionais e um botão de chamada para ação para exploração adicional.
 *
 * O componente é estilizado com várias classes para garantir um layout bem organizado e
 * visualmente atraente. Ele destaca a proficiência em múltiplas linguagens de programação
 * e ferramentas de desenvolvimento, enquanto promove um foco na melhoria contínua em
 * tecnologias modernas.
 *
 * Recursos:
 * - Exibe um título e uma breve descrição introdutória.
 * - Lista as principais tecnologias dominadas, incluindo linguagens de programação e frameworks.
 * - Destaca ferramentas adicionais como sistemas de controle de versão usados no processo de desenvolvimento.
 * - Inclui um botão "Ver Mais" para interação adicional.
 */
const Skills: FC = () => {
    return (
        <section className="px-5 py-16 md:px-32 font-cantarell flex flex-col gap-6 bg-gray-950 text-white">
            <div className="flex flex-col gap-6">


                <div className="flex gap-6 flex-col">
                    <h1 className="text-heading-1-mobile md:text-heading-1-desktop font-sen">Tecnologias e Ferramentas
                        que Domino</h1>
                    <p className="text-text-mobile md:text-text-desktop">Estou sempre em busca de aprimoramento nas
                        tecnologias mais atuais. Minha experiência abrange
                        diversas linguagens e ferramentas que são essenciais para o desenvolvimento moderno.
                    </p>
                </div>

                <div className="flex gap-6 flex-col py-2">

                    <div>
                        <h2 className="font-sen text-heading-4-mobile md:text-heading-4-desktop">Principais Tecnologias</h2>
                        <p className="text-text-mobile md:text-text-desktop">Domino Delphi 7, Firebird, PHP, Typescript,
                            React, MongoDB e GIT.</p>
                    </div>
                    <div className="">
                        <h2 className="font-sen text-heading-4-mobile md:text-heading-4-desktop">Ferramentas Adicionais</h2>
                        <p className="text-text-mobile md:text-text-desktop">Utilizo GIT para versionamento e integração
                            de APIs em meus projetos.</p>
                    </div>
                </div>
            </div>

            <div>
                <button type="button"
                        className="bg-transparent border-2 px-6 py-2.5 rounded-[6px] active:bg-amber-400 active:text-gray-900 transition
                        text-text-mobile md:text-text-desktop">Ver
                    mais
                </button>
            </div>

        </section>
    )
}

export default Skills;