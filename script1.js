const playlist = [
  { title: "Unmela-Aasapattu", src: "‪C:\Users\Admin\Music\Unmela-Aasapattu.mp3" },

];

const audio = document.getElementById("audio-player");
const ul = document.getElementById("playlist");
const nowPlaying = document.getElementById("now-playing");

// Build playlist list
playlist.forEach((song, i) => {
  const li = document.createElement("li");
  li.textContent = song.title;
  li.dataset.index = i;
  ul.appendChild(li);
});

// Handle click on song
ul.addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    const idx = e.target.dataset.index;
    document.querySelectorAll("#playlist li").forEach(el => el.classList.remove("active"));
    e.target.classList.add("active");
    audio.src = playlist[idx].src;
    audio.play();
    nowPlaying.textContent = "C:\Users\Admin\Music\Unmela-Aasapattu.mp3: " + playlist[idx].title;
  }
});
