import {FC} from 'react';

const IntroSection: FC = () => {
    return <section className="flex justify-center items-start md:items-center flex-col px-5 py-16 gap-5 md:pl-16">
        <h1 className="text-start text-heading-1-mobile md:text-heading-1-desktop font-sen">Desenvolver em ação</h1>
        <h2 className="text-start font-cantarell text-text-mobile md:text-text-desktop">Buscando oportunidades para impactar o mercado
            com projetos desafiadores e inovadores.</h2>
    </section>;
};

export default IntroSection;