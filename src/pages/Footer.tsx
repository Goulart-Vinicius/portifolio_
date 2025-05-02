import {FC} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
    return (
        <section
            className="px-5 py-12 font-cantarell text-text-mobile md:text-text-desktop bg-amber-300">
            <div className="md:w-2/3 flex justify-center items-center flex-col md:m-auto gap-8 w-full">
                <ul className="flex justify-around items-center text-4xl md:justify-center gap-20">
                    <li>
                        <a 
                          href="https://www.instagram.com/v.hrafn/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                        >
                          <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </li>
                    <li>
                        <a 
                          href="https://www.linkedin.com/in/goulart-vinicius" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                        >
                          <FontAwesomeIcon icon={faLinkedinIn}/>
                        </a>
                    </li>
                    <li>
                        <a 
                          href="https://github.com/Goulart-Vinicius" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                        >
                          <FontAwesomeIcon icon={faGithub}/>
                        </a>
                    </li>
                </ul>
                <div className=" border-2 rounded-2xl w-full"></div>
                <div>
                    <p>Feito com carinho por Vinícius</p>
                </div>
            </div>
        </section>
    )
}

export default Footer;