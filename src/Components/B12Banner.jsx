import React, { useState, useEffect } from "react";

const B12Banner = ({ onClose, onShow }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShow(true);
            onShow && onShow();
        }, 300);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setShow(false);
        onClose && onClose();
    };

    return (
        <div
            className={`
                fixed top-0 left-0 w-full z-[9999]
                bg-[#141c26] text-white
                transition-all duration-500
                ${show ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}
        >
            <div className="max-w-7xl mx-auto px-4 py-3 relative flex justify-center items-center">

                <div className="flex flex-col md:flex-row items-center gap-3 text-center">
                    <p className="text-sm md:text-base">
                        Website designed with the{" "}
                        <span className="font-semibold">B12 website builder</span>.
                        Create your own website today.
                    </p>

                    <a
                        href="https://www.b12.io/ai-web-design/?utm_source=client&utm_medium=banner&utm_campaign=ai-web-design"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-2 text-sm font-semibold"
                    >
                        Start for free
                    </a>
                </div>

                <button
                    onClick={handleClose}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl cursor-pointer"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default B12Banner;
