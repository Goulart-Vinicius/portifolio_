import React, {useState} from 'react';
import {NavLink} from "react-router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";

/**
 * Navbar é um componente funcional React que renderiza uma barra de navegação responsiva.
 * Inclui menus para desktop e mobile, permitindo que os usuários naveguem entre diferentes
 * seções do website. O componente usa estado para alternar a visibilidade do menu mobile.
 *
 * Estado:
 * - isOpen: Um booleano que representa se o menu mobile está aberto ou fechado.
 *
 * Funcionalidades:
 * - Renderiza links de navegação para visualizações desktop e mobile.
 * - Fornece um botão de alternância para abrir e fechar o menu mobile.
 * - Inclui atributos de acessibilidade como `aria-label` e `aria-expanded` para melhor usabilidade.
 *
 * Classes CSS:
 * - Utiliza uma combinação de classes utilitárias para estilização, incluindo layout, responsividade,
 *   e efeitos hover.
 */
const Navbar: React.FC = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (


        <nav id="navbar-desktop" role="navigation"
             className="navbar flex justify-end items-end flex-col   font-[family-name:var(--body-font)] bg-amber-300  text-[1rem]">
            <ul className="hidden md:flex md:justify-end md:items-center w-full md:gap-4  ">
                <li>
                    <NavLink className="hover:bg-amber-400 h-full p-4 justify-end flex" to="/" end>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:bg-amber-400 h-full p-4 justify-end flex" to="/" end>
                        Habilidades
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:bg-amber-400 h-full p-4 justify-end flex" to="/" end>
                        Projetos
                    </NavLink>
                </li>
                <li>
                    <NavLink className="hover:bg-amber-400 h-full p-4 justify-end flex" to="/" end>
                        Contato
                    </NavLink>
                </li>
            </ul>


            <button
                className="md:hidden text-xl p-4"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toogle Menu"
                aria-expanded={isOpen}

            >
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars}/>
            </button>

            {isOpen && (
                <ul className="md:hidden flex flex-col justify-center items-center w-full ">
                    <li className="w-full">
                        <NavLink className="active:bg-amber-400 w-full p-2 justify-end flex transition" to="/" end>
                            Home
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink className="active:bg-amber-400 h-full p-4 justify-end flex transition" to="/skills" end>
                            Habilidades
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink className="active:bg-amber-400 h-full p-4 justify-end flex transition" to="/" end>
                            Projetos
                        </NavLink>
                    </li>
                    <li className="w-full">
                        <NavLink className="active:bg-amber-400 h-full p-4 justify-end flex transition  " to="/" end>
                            Contato
                        </NavLink>
                    </li>
                </ul>
            )}

        </nav>

    )
}

export default Navbar;