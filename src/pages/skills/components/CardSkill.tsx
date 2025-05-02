// src/pages/skills/components/CardSkill.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface CardSkillProps {
  icon: IconDefinition;
  title: string;
  level: number; // de 1 a 5, representando o nível de habilidade
  description?: string;
  tag: string;
}

const CardSkill: React.FC<CardSkillProps> = ({ icon, title, level, tag, description }) => {
  // Função para renderizar os pontos de nível
  const renderLevelDots = () => {
    const dots = [];
    for (let i = 1; i <= 5; i++) {
      dots.push(
        <div 
          key={i} 
          className={`w-3 h-3 rounded-full mx-1 ${i <= level ? 'bg-amber-400' : 'bg-gray-300'}`}
          aria-hidden="true"
        />
      );
    }
    return dots;
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 font-cantarell text-text-mobile md:text-text-desktop">
      <div className="flex flex-col items-center">
        <div className="text-3xl bg-amber-400 mb-3 p-4 w-18 h-18 flex justify-center items-center  rounded-full">
          <FontAwesomeIcon icon={icon} />
        </div>
        <h3 className="text-xl font-semibold mb-2 font-sen text-heading-4-mobile md:text-heading-4-desktop">{title}</h3>
        
        <div className="flex my-2" aria-label={`Nível ${level} de 5`}>
          {renderLevelDots()}
        </div>
        <p className="text-gray-600 text-center text-sm">{tag}</p>
        
        {description && (
          <p className="text-gray-600 text-center text-sm mt-2">{description}</p>
        )}
      </div>
    </div>
  );
};

export default CardSkill;