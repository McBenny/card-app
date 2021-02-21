import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header';
import Nav from '../../components/nav';
import Cards from '../../components/cards';
import Footer from '../../components/footer';
import BackToTop from '../../components/back-to-top';

import './styles.scss';

function App() {
    const getDataUrl = '/data/data.json';
    const [cardsData, setCardsData] = useState([]);
    const loadCardsData = useCallback(async () => {
        const response = await axios.get(getDataUrl);
        setCardsData(response.data);
    }, []);

    useEffect(() => {
        loadCardsData().then();
    }, []);

    return (
        <div className="app" id="top">
            <Header />
            <main>
                <Nav />
                <Cards data={cardsData} updateCards={setCardsData} />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
