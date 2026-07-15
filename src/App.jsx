import "./app.css";

import Header from "./components/Header/Header";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Button from "./components/Button/Button";

function App() {

    return (
        <div className="app">

            <Header />

            <main>

                <Counter />

            </main>

            <Footer />

        </div>
    );

}

export default App;
