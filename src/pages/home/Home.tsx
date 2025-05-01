import {FC} from 'react';
import Header from "./components/Header.tsx";
import IntroSection from "./components/IntroSection.tsx";
import Skills from "./components/Skills.tsx";


const Home: FC = () => {
    return (
        <>
            <Header/>
            <IntroSection/>
            <Skills />
        </>
    )
}

export default Home;