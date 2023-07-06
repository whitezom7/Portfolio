"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function MostPlayed() {
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetchGameData();
  }, []);

  async function fetchGameData() {
    try {
      const response = await fetch('/api/steamapi');
      const data = await response.json();

      if (Array.isArray(data) && data.length > 0) {
        setGameData(data);
      }
    } catch (error) {
      console.error('Error fetching game data:', error);
    }
  }

  const handleImageError = (event) => {
    event.target.onerror = null;
    event.target.src = 'https://cdn.discordapp.com/attachments/1028002458913488986/1126548162891489280/IMG_20210110_071632.jpg'; // Replace with the correct path to your default image
  };

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            Recent Played Steam Games
          </h1>

        </div>
        <div className="flex flex-wrap -m-4">
          {gameData.map((game) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={game.appid}>
              <a href={`https://store.steampowered.com/app/${game.name}`} target="_blank" rel="noopener noreferrer">
                <div className="relative">
                  <div className="w-full bg-gray-900 opacity-75 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="px-8 py-6 text-center">

                      <h1 className="title-font text-lg font-medium text-white mb-3">
                        {game.name}
                      </h1>
                      <p className="leading-relaxed text-gray-300">
                        {game.playtime_forever} total minutes played
                      </p>
                    </div>
                  </div>
                  <Image
                    alt={game.name}
                    src={`https://cdn.cloudflare.steamstatic.com/steam/apps/${game.appid}/capsule_184x69.jpg`}
                    layout="responsive"
                    width={400}
                    height={200}
                    objectFit="cover"
                    onError={handleImageError}
                  />
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
