export default async function steamApiHandler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const steamId = '76561199030909808'; // Replace with your Steam ID
  const apiKey = '4B2BD52EAD314B926B9E3465E2FC4CD3'; // Replace with your Steam Web API key

  try {
    const response = await fetch(
      `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=${apiKey}&steamid=${steamId}&count=3`
    );

    if (response.ok) {
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        const data = await response.json();

        if (data.response && data.response.games && data.response.games.length > 0) {
          const sortedGames = data.response.games.sort((a, b) => b.playtime_forever - a.playtime_forever);
          res.status(200).json(sortedGames);
        } else {
          res.status(200).json([]);
        }
      } else {
        console.error('Invalid response format:', response);
        res.status(500).json({ error: 'Invalid response format' });
      }
    } else {
      console.error('Error fetching recently played games:', response.status);
      res.status(500).json({ error: 'Error fetching recently played games' });
    }
  } catch (error) {
    console.error('Error fetching recently played games:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
