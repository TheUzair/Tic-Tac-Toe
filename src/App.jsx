import { useState, useEffect } from "react";
import { RotateCcw } from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GameBoard from "./components/GameBoard";
import GameSettings from "./components/GameSettings";
import GameStatistics from "./components/GameStatistics";
import GameHistory from "./components/GameHistory";
import "./App.css";

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const [gameHistory, setGameHistory] = useState([]);
    const [currentMove, setCurrentMove] = useState(0);
    const [isAscending, setIsAscending] = useState(true);
    const [playerNames, setPlayerNames] = useState({
        X: "Player X",
        O: "Player O",
    });
    const [gameStats, setGameStats] = useState({ X: 0, O: 0, draws: 0 });
    const [gameTime, setGameTime] = useState(0);
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [theme, setTheme] = useState("default");

    useEffect(() => {
        const savedData = {
            history: localStorage.getItem("ticTacToeHistory"),
            names: localStorage.getItem("ticTacToePlayerNames"),
            stats: localStorage.getItem("ticTacToeStats"),
            theme: localStorage.getItem("ticTacToeTheme"),
        };

        if (savedData.history) setGameHistory(JSON.parse(savedData.history));
        if (savedData.names) setPlayerNames(JSON.parse(savedData.names));
        if (savedData.stats) setGameStats(JSON.parse(savedData.stats));
        if (savedData.theme) setTheme(savedData.theme);
    }, []);

    useEffect(() => {
        localStorage.setItem("ticTacToeHistory", JSON.stringify(gameHistory));
        localStorage.setItem(
            "ticTacToePlayerNames",
            JSON.stringify(playerNames)
        );
        localStorage.setItem("ticTacToeStats", JSON.stringify(gameStats));
        localStorage.setItem("ticTacToeTheme", theme);
    }, [gameHistory, playerNames, gameStats, theme]);

    useEffect(() => {
        let interval;
        if (isTimerActive) {
            interval = setInterval(() => {
                setGameTime((time) => time + 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isTimerActive]);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return { winner: squares[a], line: lines[i] };
            }
        }
        return null;
    };

    const handleClick = (i) => {
        if (!isTimerActive) {
            setIsTimerActive(true);
        }

        const currentHistory = gameHistory.slice(0, currentMove + 1);
        const current =
            currentHistory[currentHistory.length - 1] || Array(9).fill(null);

        if (calculateWinner(current) || current[i]) return;

        const newBoard = current.slice();
        newBoard[i] = xIsNext ? "X" : "O";
        const newHistory = [...currentHistory, newBoard];

        setGameHistory(newHistory);
        setBoard(newBoard);
        setXIsNext(!xIsNext);
        setCurrentMove(newHistory.length - 1);

        const winner = calculateWinner(newBoard);
        if (winner || newBoard.every((square) => square)) {
            setIsTimerActive(false);
            if (winner) {
                setGameStats((prev) => ({
                    ...prev,
                    [winner.winner]: prev[winner.winner] + 1,
                }));
            } else {
                setGameStats((prev) => ({
                    ...prev,
                    draws: prev.draws + 1,
                }));
            }
        }
    };

    const jumpTo = (move) => {
        setCurrentMove(move);
        setBoard(gameHistory[move]);
        setXIsNext(move % 2 === 0);
        setIsTimerActive(move < gameHistory.length - 1);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setXIsNext(true);
        setGameHistory([]);
        setCurrentMove(0);
        setGameTime(0);
        setIsTimerActive(false);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, "0")}`;
    };

    const winnerInfo = calculateWinner(board);
    const winner = winnerInfo?.winner;
    const winningLine = winnerInfo?.line;
    const status = winner
        ? `Congratulations: ${playerNames[winner]} Won`
        : board.every((square) => square)
        ? "Game Draw!"
        : `Next player: ${playerNames[xIsNext ? "X" : "O"]}`;

    const themeColors = {
        default: {
            background: "bg-blue-100",
            text: "text-gray-900",
            header: "text-blue-800",
            card: "bg-white",
            button: "bg-blue-500 hover:bg-blue-600 text-white",
            statsCard: ["bg-blue-100", "bg-red-100", "bg-gray-100"],
        },
        dark: {
            background: "bg-gray-900",
            text: "text-gray-100",
            header: "text-blue-400",
            card: "bg-gray-800",
            button: "bg-blue-600 hover:bg-blue-700 text-white",
            statsCard: ["bg-gray-700", "bg-gray-700", "bg-gray-700"],
        },
        colorful: {
            background: "bg-gradient-to-br from-blue-400 to-purple-500",
            text: "text-gray-900",
            header: "text-white",
            card: "bg-white",
            button: "bg-purple-500 hover:bg-purple-600 text-white",
            statsCard: ["bg-blue-100", "bg-purple-100", "bg-pink-100"],
        },
    };

    const getHistoryMessage = (move) => {
        if (move === 0) {
            return `Game Start - ${playerNames.X} vs ${playerNames.O}`;
        }

        const currentBoard = gameHistory[move];
        const previousBoard = gameHistory[move - 1];
        const position = currentBoard.findIndex(
            (square, i) => square !== previousBoard[i]
        );
        const player = move % 2 === 0 ? playerNames.O : playerNames.X;
        const row = Math.floor(position / 3) + 1;
        const col = (position % 3) + 1;

        const winner = calculateWinner(currentBoard);
        if (winner || currentBoard.every((square) => square)) {
            if (winner) {
                return `Game End - ${playerNames[winner.winner]} Wins!`;
            }
            return "Game End - Draw!";
        }

        return `Move #${move} - ${player} placed at (${row},${col})`;
    };

    return (
        <div
            className={`min-h-screen flex flex-col ${themeColors[theme].background}`}
        >
            <Header
                theme={theme}
                onThemeToggle={() =>
                    setTheme(theme === "dark" ? "default" : "dark")
                }
                onSettingsClick={() => setShowSettings(!showSettings)}
                showSettings={showSettings}
                onPlayGame={resetGame}
            />
            <main className="flex-1 container mx-auto px-4 py-8">
                {showSettings && (
                    <GameSettings
                        theme={theme}
                        themeColors={themeColors}
                        playerNames={playerNames}
                        setPlayerNames={setPlayerNames}
                        setTheme={setTheme}
                    />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <div id="game-board">
                            <GameBoard
                                board={board}
                                onSquareClick={handleClick}
                                status={status}
                                gameTime={gameTime}
                                formatTime={formatTime}
                                theme={theme}
                                themeColors={themeColors}
                                winningLine={winnerInfo?.line}
                            />

                            <div className="mt-4 flex space-x-4">
                                <button
                                    onClick={resetGame}
                                    className={`flex items-center px-4 py-2 rounded transition-colors ${themeColors[theme].button}`}
                                >
                                    <RotateCcw className="w-5 h-5 mr-2" />
                                    Reset Game
                                </button>
                            </div>
                        </div>

                        <div id="game-stats">
                            <GameStatistics
                                theme={theme}
                                themeColors={themeColors}
                                gameStats={gameStats}
                                playerNames={playerNames}
                            />
                        </div>
                    </div>

                    <div id="game-history">
                        <GameHistory
                            theme={theme}
                            themeColors={themeColors}
                            gameHistory={gameHistory}
                            currentMove={currentMove}
                            isAscending={isAscending}
                            setIsAscending={setIsAscending}
                            jumpTo={jumpTo}
                            getHistoryMessage={getHistoryMessage}
                        />
                    </div>
                </div>
            </main>
            <Footer theme={theme} />
        </div>
    );
}

export default App;
