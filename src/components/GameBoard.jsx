import { Clock } from 'lucide-react';

const GameBoard = ({ board, onSquareClick, status, gameTime, formatTime, theme, themeColors, winningLine }) => {
  const getSquareClassName = (index) => {
    const baseClass = "w-20 h-20 text-4xl font-bold flex items-center justify-center border rounded transition-colors"
    const themeClasses = {
      default: winningLine?.includes(index)
        ? 'bg-green-200 hover:bg-green-300 border-gray-200'
        : 'bg-gray-50 hover:bg-gray-100 border-gray-200',
      dark: winningLine?.includes(index)
        ? 'bg-green-600 hover:bg-green-700 text-white border-gray-600'
        : 'bg-gray-700 hover:bg-gray-600 text-white border-gray-600',
      colorful: winningLine?.includes(index)
        ? 'bg-yellow-300 hover:bg-yellow-400 border-yellow-400'
        : 'bg-blue-100 hover:bg-blue-200 border-blue-300'
    }
    return `${baseClass} ${themeClasses[theme]}`
  }

  return (
    <div className={`mb-4 p-4 rounded-lg shadow-lg ${themeColors[theme].card}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold">{status}</div>
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>{formatTime(gameTime)}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {board.map((square, i) => (
          <button
            key={i}
            className={getSquareClassName(i)}
            onClick={() => onSquareClick(i)}
          >
            {square}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;