import React, { useContext } from 'react';
import Header from './Components/Header';
import Contents from './Components/Contents';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeContext } from '../../HomeProvider';
const Home = () => {
    const theme = useContext(HomeContext)
    return (
        <div className={`home-container ${theme.theme ? "bg-light" : "bg-dark"}`}>
            <Sidebar className={theme.theme} />
            <main className={`main`}>
                <div className={`main-left ${theme.theme ? "bg-light" : "bg-dark"}`}>
                    <Header className={theme.theme} />
                    <Contents className="contents" />
                    <Footer className="footer" />
                </div>
            </main>
        </div>
    );
};

export default Home;
