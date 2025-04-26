import React from "react";
import GitHubIcon from "@mui/icons-material/Github";
import { Settings } from "lucide-react";

const Header = ({ theme, onSettingsClick, showSettings }) => {
    const themeColors = {
        default: "bg-white text-gray-900",
        dark: "bg-gray-800 text-white",
        colorful: "bg-gradient-to-r from-blue-500 to-purple-500 text-white",
    };

    const buttonClass = {
        default: "hover:bg-gray-100 text-gray-700",
        dark: "hover:bg-gray-700 text-gray-300",
        colorful: "hover:bg-white/10 text-white",
    };

    return (
        <header className={`${themeColors[theme]} shadow-md sticky top-0 z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <svg
                                className="w-8 h-8"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M4 4h16v16H4z" />
                                <path d="M4 12h16M12 4v16" />
                            </svg>
                            <h1 className="text-2xl font-bold hidden sm:block">
                                Tic Tac Toe
                            </h1>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onSettingsClick}
                            className={`p-2 rounded-full transition-colors ${
                                buttonClass[theme]
                            } ${
                                showSettings
                                    ? "bg-blue-500 text-white hover:bg-blue-600"
                                    : ""
                            }`}
                            title="Settings"
                        >
                            <Settings className="w-5 h-5" />
                        </button>
                        <a
                            href="https://github.com/TheUzair/Tic-Tac-Toe"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2 rounded-full transition-colors ${buttonClass[theme]}`}
                            aria-label="GitHub"
                        >
                            <GitHubIcon className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
