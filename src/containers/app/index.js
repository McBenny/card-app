import Header from '../../components/header';
import Nav from '../../components/nav';
import Cards from '../../components/cards';
import Footer from '../../components/footer';

import './styles.scss';
import BackToTop from '../../components/back-to-top';

function App() {
    return (
        <div className="app" id="top">
            <Header />
            <main>
                <Nav />
                <Cards />
            </main>
            <Footer />
            <BackToTop />
        </div>
    );
}

export default App;
