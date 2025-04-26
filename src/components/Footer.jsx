import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";

const Footer = ({ theme }) => {
    const themeColors = {
        default: "bg-white text-gray-600",
        dark: "bg-gray-800 text-gray-300",
        colorful: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    };

    const linkClass = `hover:text-blue-500 transition-colors ${
        theme === "dark" ? "text-gray-300" : "text-gray-600"
    }`;

    return (
        <footer className={`${themeColors[theme]} shadow-md mt-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <span>Made with</span>
                            <Heart className="w-4 h-4 text-red-500" />
                            <span>using React</span>
                        </div>

                        <div className="flex items-center space-x-6">
                            <a
                                href="https://github.com/TheUzair"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="https://linkedin.com/in/mohd-uzair-33b166204"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                                aria-label="LinkednIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>

                        <div className="mt-4 md:mt-0">
                            <p className="text-sm">
                                © {new Date().getFullYear()} Tic Tac Toe. All
                                rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
