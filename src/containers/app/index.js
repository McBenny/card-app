import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../components/header';
import Nav from '../../components/nav';
import Cards from '../../components/cards';
import Footer from '../../components/footer';

import './styles.scss';

/**
 * This is the assembled page showing:
 *
 * - `<Header />`
 * - `<Nav />`
 * - Set of `<Card />`s
 * - `<Footer />`
 */
function App() {
    const getDataUrl = 'https://raw.githubusercontent.com/netfront/UI-code-challenge/master/data.json';
    const [cardsData, setCardsData] = useState([]);
    const loadCardsData = useCallback(async () => {
        const response = await axios.get(getDataUrl);
        setCardsData(response.data);
    }, []);

    useEffect(() => {
        loadCardsData().then();
    }, []);

    return (
        <div className="app" id="top" tabIndex={-1}>
            <Header />
            <main>
                <Nav />
                <Cards data={cardsData} updateCards={setCardsData} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
