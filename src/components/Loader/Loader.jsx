import "./Loader.css";
import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";

function Loader({ children }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const timer = setTimeout(() => {

            setLoading(false);

        }, 1800);

        return () => clearTimeout(timer);

    }, []);

    if (loading) {

        return (

            <div className="loader">

                <img
                    src={logo}
                    alt="Logo"
                    className="loader-logo"
                />

                <div className="loader-bar">

                    <span></span>

                </div>

            </div>

        );

    }

    return children;

}

export default Loader;