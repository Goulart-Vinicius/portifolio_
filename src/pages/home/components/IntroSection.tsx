import {FC} from 'react';

const IntroSection: FC = () => {
    return <section className="flex justify-center items-start flex-col px-5 py-16 gap-5 md:pl-16">
        <h1 className="text-start text-4xl font-[family-name:var(--header-font)]">Desenvolver em ação</h1>
        <h2 className="text-start font-[family-name:var(--body-font)] md:text-xl">Buscando oportunidades para impactar o mercado
            com projetos desafiadores e inovadores.</h2>
    </section>;
};

export default IntroSection;