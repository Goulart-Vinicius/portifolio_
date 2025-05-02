import {FC} from 'react';
import Home from './components/Home';
import Description from "./components/Description.tsx";
import SkillSection from "./components/SkillSection.tsx";

const Skills: FC = () => {
    return (
        <>
            <Home/>
            <Description/>
            <SkillSection/>
        </>
    )
}

export default Skills;