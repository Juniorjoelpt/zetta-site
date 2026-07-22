import "./BackToTop.css";
import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";

function BackToTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 500) {
                setShow(true);
            } else {
                setShow(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    function voltarTopo() {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    return (

        <button
            className={show ? "back-top show" : "back-top"}
            onClick={voltarTopo}
        >

            <FaArrowUp />

        </button>

    );

}

export default BackToTop;