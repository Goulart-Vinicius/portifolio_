import {FC} from 'react';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";

const Footer: FC = () => {
    return (
        <section className="flex justify-center items-center flex-col px-5 py-12 gap-8 font-cantarell text-text-mobile bg-amber-300">

            <ul className="flex justify-around w-2/3 items-center  text-4xl">
                <li><FontAwesomeIcon icon={faInstagram}/></li>
                <li><FontAwesomeIcon icon={faLinkedinIn}/></li>
                <li><FontAwesomeIcon icon={faGithub}/></li>
            </ul>
            <div className="border-1  rounded-2xl w-full"></div>
            <div>
                <p>Feito com carinho por Vinícius</p>
            </div>
        </section>
    )
}

export default Footer;