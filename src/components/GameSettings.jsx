const GameSettings = ({ theme, themeColors, playerNames, setPlayerNames, setTheme }) => {
  return (
    <div className={`mb-6 p-4 rounded-lg shadow-lg ${themeColors[theme].card}`}>
      <h2 className="text-xl font-bold mb-4">Game Settings</h2>
      <div className="space-y-4">
        <div className="flex md:flex-row flex-col space-4 gap-4">
          <input
            type="text"
            value={playerNames.X}
            onChange={(e) => setPlayerNames(prev => ({ ...prev, X: e.target.value }))}
            className={`px-3 py-2 border rounded flex-1 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
            placeholder="Player X Name"
          />
          <input
            type="text"
            value={playerNames.O}
            onChange={(e) => setPlayerNames(prev => ({ ...prev, O: e.target.value }))}
            className={`px-3 py-2 border rounded flex-1 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white'}`}
            placeholder="Player O Name"
          />
        </div>
        <div className="flex space-x-4">
          {['default', 'dark', 'colorful'].map(themeOption => (
            <button
              key={themeOption}
              onClick={() => setTheme(themeOption)}
              className={`px-4 py-2 rounded ${theme === themeOption ? themeColors[theme].button : 'bg-gray-200 dark:bg-gray-700'}`}
            >
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)} Theme
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSettings;