import {Outlet} from "react-router";
import Navbar from "./pages/Navbar.tsx";
import {FC} from "react";
import Footer from "./pages/Footer.tsx";

const App: FC = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default App
