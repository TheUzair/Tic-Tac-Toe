import { Trophy } from 'lucide-react';

const GameStatistics = ({ theme, themeColors, gameStats, playerNames }) => {
  return (
    <div className={`mt-6 p-4 rounded-lg shadow-lg ${themeColors[theme].card}`}>
      <h2 className="text-xl font-bold mb-4 flex items-center">
        <Trophy className="w-5 h-5 mr-2" />
        Game Statistics
      </h2>
      <div className="grid grid-cols-3 gap-4 text-center">
        {[
          { player: 'X', stats: gameStats.X },
          { player: 'O', stats: gameStats.O },
          { label: 'Draws', stats: gameStats.draws }
        ].map((item, index) => (
          <div key={index} className={`p-2 rounded ${themeColors[theme].statsCard[index]}`}>
            <div className="font-bold">
              {item.player ? playerNames[item.player] : item.label}
            </div>
            <div className="text-2xl">{item.stats}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameStatistics;