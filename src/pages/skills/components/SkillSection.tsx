import {FC} from 'react';
import {IconDefinition} from "@fortawesome/fontawesome-svg-core";
import CardSkill from "./CardSkill";
// Importação correta dos ícones
import {faReact, faJs, faNodeJs, faHtml5, faCss3, faFigma, faPhp} from '@fortawesome/free-brands-svg-icons';
import {faDatabase, faTape, faTerminal} from '@fortawesome/free-solid-svg-icons';

interface CardSkillProps {
    icon: IconDefinition;
    title: string;
    level: number; // de 1 a 5, representando o nível de habilidade
    tag: string;
    description?: string;
}

const skills: CardSkillProps[] = [
    {
        icon: faReact,
        title: 'React',
        level: 3,
        tag: 'FrontEnd',
        description: 'Desenvolvimento de interfaces modernas com React'
    },
    {
        icon: faJs,
        title: 'JavaScript',
        level: 4,
        tag: 'FrontEnd',
        description: 'ES6+, manipulação DOM, async/await'
    },
    {
        icon: faHtml5,
        title: 'HTML5',
        level: 5,
        tag: 'FrontEnd',
    },
    {
        icon: faCss3,
        title: 'CSS3',
        level: 3,
        tag: 'FrontEnd',
        description: 'Flexbox, Grid'
    },
    {
        icon: faPhp,
        title: 'PHP',
        level: 3,
        tag: 'BackEnd',
        description: 'Desenvolvimento paged Websites'
    },
    {
        icon: faNodeJs,
        title: 'NodeJS',
        level: 1,
        tag: 'BackEnd',
        description: 'Conhecimento Básico'
    },
    {
        icon: faDatabase,
        title: 'MongoDB',
        level: 1,
        tag: 'Banco de Dados',
        description: 'Bancos NoSQL, queries básicas'
    },
    {
        icon: faDatabase,
        title: 'PostgreSQL',
        level: 4,
        tag: 'Banco de Dados',
        description: 'View, Trigger, modelagem de dados'
    },
    {
        icon: faDatabase,
        title: 'Firebird',
        level: 5,
        tag: 'Banco de Dados',
        description: 'View, Trigger, modelagem de dados'
    },
    {
        icon: faFigma,
        title: 'Figma',
        level: 2,
        tag: 'UI/UX',
        description: 'Design de interfaces e prototipagem'
    },
    {
        icon: faTape,
        title: "API RESTful",
        level: 3,
        tag: "Outros",
        description: "Desenvolvimento e uso de APIs RESTful"
    },
    {
        icon: faTerminal,
        title: "Delphi",
        level: 5,
        tag: "Outros",
        description: "Desenvolvimento aplicações desktop"
    }
]

const groups: string[] = ['FrontEnd', 'BackEnd', 'Banco de Dados', 'UI/UX', "Outros"];

/**
 * Componente que renderiza uma seção com todas as habilidades técnicas
 * Exibe múltiplos cartões de habilidades em uma grade
 */
const SkillSection: FC = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5 bg-amber-300">
            {groups.map((group) => {
                const filteredSkills = skills.filter((skill) => skill.tag === group);
                return (
                    <div key={group} className="mb-6">
                        <h2 className="text-xl font-bold mb-4">{group}</h2>
                        {filteredSkills.length > 0 ? (
                            <div className="grid gap-4">
                                {filteredSkills.map((skill) => (
                                    <CardSkill
                                        key={skill.title}
                                        icon={skill.icon}
                                        title={skill.title}
                                        level={skill.level}
                                        tag={skill.tag}
                                        description={skill.description}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className="text-gray-500">Nenhuma habilidade adicionada para esta categoria.</p>
                        )}
                    </div>
                );
            })}
        </section>
    );
};

export default SkillSection;