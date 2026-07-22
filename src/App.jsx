import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import BackToTop from "./components/BackToTop/BackToTop";
import Loader from "./components/Loader/Loader";

function App() {
    return (
         <Loader>

            <Navbar />
            <Home />
	    <WhatsappButton />
	    <BackToTop />
        </Loader>
    );
}

export default App;