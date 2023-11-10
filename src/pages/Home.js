import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Movies from '../components/Movies';
import Navbar from '../components/Navbar';

function Main() {
    return(
        <main>
            <Hero />
            <Movies />
        </main>
    )
}

const Home = () => {
    return (
        <>
            <Navbar />
            <Main />
            <Footer />
        </>
    );
}

export default Home;
