const player = {
  name: "Virat Kohli",
  age: 36,
  role: "Batsman",
  photo: "https://cdn.britannica.com/48/252748-050-C514EFDB/Virat-Kohli-India-celebrates-50th-century-Cricket-November-15-2023.jpg",
  stats: {
    matches: 254,
    runs: 12898,
    wickets: 4
  }
};
document.getElementById('player-photo').src = player.photo;
document.getElementById('player-name').textContent = player.name;
document.getElementById('player-role-age').textContent = `${player.role}, Age: ${player.age}`;
document.getElementById('stat-matches').textContent = player.stats.matches;
document.getElementById('stat-runs').textContent = player.stats.runs;
document.getElementById('stat-wickets').textContent = player.stats.wickets;

const statsBtn = document.getElementById('stats-btn');
const statsDiv = document.getElementById('player-stats');

statsBtn.addEventListener('click', () => {
  const isHidden = statsDiv.classList.toggle('hidden');
  statsBtn.textContent = isHidden ? 'Show Stats' : 'Hide Stats';
});
