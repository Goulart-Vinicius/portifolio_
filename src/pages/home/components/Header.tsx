import {FC} from 'react'

const Header: FC = () => {
    return (
        <header className="
             w-full
             h-screen
             bg-cover
             bg-[url('./assets/home.png')]
             flex
             justify-center
             items-center
             flex-col
             text-text-mobile
             md:text-text-desktop

         ">
            <div className="px-5 pb-6 flex justify-center gap-5 flex-col fa-1 lg:w-4/6  text-white">
                <h1 className="font-sen text-heading-1-mobile  md:text-6xl text-center ">Olá, eu sou <br
                    className="md:hidden"/> Vinícius
                    Goulart</h1>
                <h2 className=" text-center ">Engenheiro de Computação em
                    formação, apaixonado por desenvolvimento web e inovação. Aqui você encontra
                    meus projetos em React, MeteorJS e muito mais!</h2>
            </div>

            <div className="flex justify-center items-center gap-4 font-bold md:font-medium">
                <button
                    className="px-6 py-2.5 bg-amber-300 rounded-[6px] active:bg-amber-400 cursor-pointer hover:bg-amber-400 ">Ver
                    Projetos
                </button>
                <button
                    className=" transition-all px-6 py-2.5 bg-transparent rounded-[6px] border-2 active:bg-amber-400 cursor-pointer
                     hover:bg-amber-400 text-white active:text-gray-900">
                    Baixar CV
                </button>
            </div>
        </header>
    )
}

export default Header;