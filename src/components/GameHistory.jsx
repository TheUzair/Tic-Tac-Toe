import { Clock } from "lucide-react";

const GameHistory = ({
    theme,
    themeColors,
    gameHistory,
    currentMove,
    isAscending,
    setIsAscending,
    jumpTo,
    getHistoryMessage,
}) => {
    return (
        <div className={`p-4 rounded-lg shadow-lg ${themeColors[theme].card}`}>
            <div className="flex justify-between items-center mb-12">
                <h2 className="text-xl font-bold">Game History</h2>
                <button
                    onClick={() => setIsAscending(!isAscending)}
                    className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                    <Clock className="w-5 h-5 mr-2" />
                    {isAscending ? "Sort Descending" : "Sort Ascending"}
                </button>
            </div>
            <div className="max-h-max overflow-y-auto">
                <ol
                    className={`space-y-3 ${
                        !isAscending ? "flex flex-col-reverse" : ""
                    }`}
                >
                    {gameHistory.map((_, move) => (
                        <li key={move} className="flex items-center">
                            <button
                                onClick={() => jumpTo(move)}
                                className={`flex-1 p-2 rounded hover:bg-opacity-80 ${
                                    currentMove === move
                                        ? "bg-blue-500 text-white"
                                        : theme === "dark"
                                        ? "hover:bg-gray-700"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {getHistoryMessage(move)}
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default GameHistory;
