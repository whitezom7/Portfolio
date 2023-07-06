import { useEffect, useState } from 'react';

export default function Home() {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetchPlayedGames();
  }, []);

  async function fetchPlayedGames() {
    try {
      const response = await fetch('/api/steamapi');
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setGameList(data);
      }
    } catch (error) {
      console.error('Error fetching recently played games:', error);
    }
  }

  return (
    <div>
      <h1>Recently Played Games</h1>
      {gameList.length > 0 ? (
        <ul>
          {gameList.map((game) => (
            <li key={game.appid}>
              <img src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_184x69.jpg`} alt={game.name} />
              {game.name} - {game.playtime_forever} minutes
            </li>
          ))}
        </ul>
      ) : (
        <p>No recently played games found.</p>
      )}
    </div>
  );
}
