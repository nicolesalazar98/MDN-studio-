// esperar a que cargue la pagina
window.onload = () => {
  loadAllSongs();
};

class Song {

  constructor (id, title, artist, duration, album, year, gender, cover, urlSong) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.album = album;
    this.year = year;
    this.gender = gender;
    this.cover = cover;
    this.urlSong = urlSong;
    this.album = album;
  }
}
// const SONGS = [
//   new Song ({
//     id: '1',
//     title: 'Lost on you',
//     artist: 'Lp',
//     duration: null,
//     album: 'Lost on you',
//     year: '2016',
//     gender: 'Indie-rock',
//     cover: '1lostOnYouCover.jpg',
//     urlSong: '1lostOnYouCover.mp3'
//   }),
//   new Song ({
//     id: '2',
//     title: 'Melancolicasong2',
//     artist: 'Lp',
//     duration: null,
//     album: 'Lost on you',
//     year: '2016',
//     gender: 'Indie-rock',
//     cover: '2lostOnYouCover.jpg',
//     urlSong: '2lostOnYouCover.mp3'
//   }),

// ];

const SONGS = [
  {
    id: '1',
    title: 'Lost on you',
    artist: 'Lp',
    duration: null,
    album: 'Lost on you',
    year: '2016',
    gender: 'Indie-rock',
    cover: '1lostOnYouCover.jpg',
    urlSong: '1lostOnYouCover.mp3'
  },
  {
    id: '2',
    title: 'Melancolicasong2',
    artist: 'Lp',
    duration: null,
    album: 'Lost on you',
    year: '2016',
    gender: 'Indie-rock',
    cover: '2lostOnYouCover.jpg',
    urlSong: '2lostOnYouCover.mp3'
  }

];

const MAIN_SONG_ICONS = ['far fa-play-circle', 'far fa-heart', 'fa fa-solid fa-plus'];

function loadAllSongs() {
  // tomar lista principal de canciones
  const list = document.getElementById('main_song_list');

  SONGS.forEach((song) => {
    debugger
    // crear elemento li para cada cancion
    const songElement = document.createElement('li');
    songElement.className = 'song';
    // crear elemento strong para el titulo de la cancion y agregarlo al li
    const songTitle = document.createElement('strong');
    songTitle.innerHTML = song.title;
    songElement.appendChild(songTitle);
    // crear elemento button para el boton de reproduccion y agregarlo al li
    MAIN_SONG_ICONS.forEach((iconClass) => {
      const icon = document.createElement('i');
      icon.className = iconClass;
      // agregar evento
      icon.addEventListener('click', () => handleIconClick(song, iconClass));
      // agregar icono al li
      songElement.appendChild(icon);
    });
    // agregar li al ul principal de canciones
    list.appendChild(songElement);
  });
}

function handleIconClick(song, iconClass) {
  if (iconClass === 'far fa-play-circle') {
    alert('reproducir cancion ' + song.name);
    return;
  }

  if (iconClass === 'far fa-heart') {
    alert('agregar a favoritos ' + song.name);
    return;
  }

  alert('agregar a mi lista de reproduccion ' + song.name);
}


const audio = new Audio('https://cdn.pixabay.com/audio/2024/01/15/audio_9914e58808.mp3')
audio.volume = 0.1
audio.currentTime = 245


const play = document.getElementById('play')
const play2 = document.getElementById('play')
const stop = document.getElementById('stop')
const pause = document.getElementById('pause')
const mute = document.getElementById('mute')
const sound = document.getElementById('sound')

play.addEventListener('click', () => {
  audio.play()
})

play2.addEventListener('click', () => {
  audio.play()
})


pause.addEventListener('click', () => {
  audio.pause()
})

mute.addEventListener('click', () => {
  audio.volume = 0
})

sound.addEventListener('click', () => {
  audio.volume = 0.1
})

search.addEventListener('click', () => {
  audio.src = input.value
})

audio.addEventListener('ended', () => {
  alert('siguiente')
  audio.src = 'https://cdn.pixabay.com/audio/2024/01/16/audio_e2b992254f.mp3'
  audio.play()
})



let miAudio = document.getElementById("miAudio");
miAudio.pause();
miAudio.currentTime = 0; 


stop.addEventListener('click', () => {
  audio.stop
} )