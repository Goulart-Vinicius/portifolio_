// SocialButtons.tsx
import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faYoutube,
    faTiktok, faGithub
} from '@fortawesome/free-brands-svg-icons';

interface SocialButtonProps {
    icon: any;
    color: string;
    hoverColor: string;
    label: string;
    url: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({icon, color, hoverColor, label, url}) => {
    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 p-4 rounded-lg text-white ${color} ${hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
        >
            <FontAwesomeIcon icon={icon} className="text-xl"/>
            <span>{label}</span>
        </a>
    );
};

const SocialButtons: React.FC = () => {
    const socialLinks = [

        {
            icon: faInstagram,
            color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500',
            hoverColor: 'hover:from-purple-600 hover:via-pink-600 hover:to-orange-600',
            label: 'Instagram',
            url: 'https://www.instagram.com/v.hrafn/'
        },
        {
            icon: faLinkedin,
            color: 'bg-blue-700',
            hoverColor: 'hover:bg-blue-800',
            label: 'LinkedIn',
            url: 'https://www.linkedin.com/in/goulart-vinicius/'
        },
        {
            icon: faGithub,
            color: 'bg-gray-800',
            hoverColor: 'hover:bg-gray-900',
            label: 'GitHub',
            url: 'https://github.com/Goulart-Vinicius'
        }

    ];

    return (
        <div className="h-[50vh] flex flex-col items-center justify-center bg-amber-400 p-6 ">
            <h2 className="text-heading-4-mobile md:text-heading-4-desktop font-sen font-bold mb-6 text-gray-950">
                Minhas Redes Sociais</h2>
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl font-cantarell text-text-mobile md:text-text-desktop">
                {socialLinks.map((social, index) => (
                    <SocialButton
                        key={index}
                        icon={social.icon}
                        color={social.color}
                        hoverColor={social.hoverColor}
                        label={social.label}
                        url={social.url}
                    />
                ))}
            </div>
        </div>
    );
};

export default SocialButtons;