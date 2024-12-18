import "./global.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";

const appStyle = {
    padding: "0 9rem",
    paddingTop: "4rem",
    backgroundColor: "#f7f2e9",
    color: "#27272a",
};

function App() {
    return (
        <div style={appStyle}>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}

export default App;
