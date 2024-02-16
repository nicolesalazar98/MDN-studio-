// esperar a que cargue la pagina
window.onload = () => {
  loadAllSongs();
};
let audioPanelIzquierdo;
// la clase constructora ya tiene definido los parametros de entrada
class Song {
  constructor(id, title, artist, duration, album, year, gender, urlSong, cover) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.album = album;
    this.year = year;
    this.gender = gender;
    this.urlSong = urlSong;
    this.cover = cover;
  }
}
// en la variable SONGS instanciamos 2 objetos de prueba con los valores necesarios
// no es necesario definir nuevamente los atributos, va solo los valores en el constructor
const SONGS = [
  new Song('1', 'Somebody That I Used To Know (feat. Kimbra)', 'Gotye', null, 'Making Mirrors', 2011, 'Indie-rock', 'assets/music/Somebody That I Used To Know.mp3', 'cancion1-cover.jpg'),
  new Song('2', 'Reality', 'Lost Frequencies', null, 'Remix', 2015, 'Pop', 'assets/music/Reality.mp3', 'cancion2-cover.jpg'),
  new Song('3', 'Cant Get You out of My Head (Cover)', 'AnnenMayKantereit x Parcels', null, 'Remix', 2019, 'Indie-rock', 'assets/music/Cant Get You out of My Head (Cover).mp3', 'cancion3-cover.jpg'),
];

const MAIN_SONG_ICONS = ['fa fa-play-circle', 'fa fa-heart', 'fa fa-solid fa-plus'];
const MAIN_PLAYLIST_ICONS = ['fa fa-play-circle', 'fa fa-heart', 'fa fa-solid fa-minus'];

function loadAllSongs() {
  // tomar lista principal de canciones
  const list = document.getElementById('main_song_list');
  SONGS.forEach((song) => {
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
      icon.id = song.id;
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

function playSongSelected(song) {
  // validar si existe una reproduccion
  if (audioPanelIzquierdo) {
    audioPanelIzquierdo.pause();
    audioPanelIzquierdo.currentTime = 0;
  }
  audioPanelIzquierdo = new Audio(song.urlSong);
  song.currentTime = audioPanelIzquierdo.currentTime;
  audioPanelIzquierdo.volume = 0.2;
  audioPanelIzquierdo.play();
}

function handleIconClick(song, iconClass) {
  if (iconClass === 'fa fa-play-circle') {
    playSongSelected(song);
  } else if (iconClass === 'fa fa-heart') {
    alert('agregar a favoritos ' + song.title);
  } else {
    const list = document.getElementById('my_playlist');
    // agregar al playlista si no existe la cancion en la lista
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (!existeCancion) {
      agregarAPlayList(song, list);
    }
  }
}

function agregarAPlayList(song, list) {
  const songElement = document.createElement('li');
  songElement.id = song.id;
  songElement.className = 'song';
  // crear elemento strong para el titulo de la cancion y agregarlo al li
  const songTitle = document.createElement('strong');
  songTitle.innerHTML = song.title;
  songElement.appendChild(songTitle);
  MAIN_PLAYLIST_ICONS.forEach((iconClass) => {
    const icon = document.createElement('i');
    icon.id = song.id;
    icon.className = iconClass;
    // agregar evento
    icon.addEventListener('click', () => handleIconPlayListClick(song, iconClass));
    // agregar icono al li
    songElement.appendChild(icon);
  });
  // agregar li al ul principal de canciones
  list.appendChild(songElement);
}

function handleIconPlayListClick(song, iconClass) {
  if (iconClass === 'fa fa-play-circle') {
    playSongSelected(song);
  } else if (iconClass === 'fa fa-heart') {
    alert('agregar a favoritos ' + song.title);
  } else {
    const list = document.getElementById('my_playlist');
    // eliminar del playlist
    let existeCancion = Array.from(list.children).find(child => child.id === song.id);
    if (existeCancion) {
      // eliminar de la lista la cancion
      list.removeChild(existeCancion);
    }
  }
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

// search.addEventListener('click', () => {
//   audio.src = input.value
// })

audio.addEventListener('ended', () => {
  alert('siguiente')
  audio.src = 'https://cdn.pixabay.com/audio/2024/01/16/audio_e2b992254f.mp3'
  audio.play()
});

stop.addEventListener('click', () => {
  audio.stop
});
