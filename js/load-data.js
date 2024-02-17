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
  new Song('1', 'Take On Me', 'a-ha', null, 'Hunting High and Low', 1985, 'Synth pop, New wave', 'assets/music/1A-ha - Take On Me.mp3', 'assets\principlesImages\1a-ha - Take On Me.jpg'),
  new Song('2', 'Azul', 'Zoe', null, 'Aztlán', 2018, 'Alternativa/independiente, Rock en español, Argentinian Rock', 'assets/music/.2Azul -Zoé.mp3', 'assets\principlesImages\2zoe_azul-portada.jpg'),
  new Song('3', 'Kahalid-Lovely', 'Billie Eilish', null, 'Making Mirrors', 2011, 'Indie-rock', 'assets/music/3Billie Eilish, Khalid ,lovely', 'assets\principlesImages\love dive.jpg'),
  new Song('4', 'Cant Get You out of My Head (Cover)', 'AnnenMayKantereit x Parcels', null, 'Remix', 2019, 'Indie-rock', 'assets/music/Cant Get You out of My Head (Cover).mp3', 'cancion3-cover.jpg'),
  new Song('5', 'De la noche a la mañana', 'Elefante', null, 'El que busca encuentra', 2012, 'Funk, Electropop, Disco', 'assets/music/5De la noche a la mañana -Elefante.mp3', 'cancion3-cover.jpg'),
  new Song('6', 'Boyfriend', 'Dove Cameron', null, 'Summer Viral Hits 2022', 2022, 'Indie-rock', '6Dove Cameron, Boyfriend.mp3', 'cancion3-cover.jpg'),
  new Song('7', 'EME', 'Bardo José, Miel', null, 'EME', 2021, 'Dance-electronica', 'assets/music/7EME -miel.mp3', 'cancion3-cover.jpg'),
  new Song('8', 'Somebody That I Used To Know (feat. Kimbra)', 'Gotye', null, 'Making Mirrors', 2011, 'Indie-rock', 'assets/music/9Gotye - Somebody That I Used To Know.mp3', 'cancion1-cover.jpg'),
  new Song('9', 'Super Lady', 'GI-DLE', null, 'Remix', 2019, 'Indie-rock', 'assets/music/8G-IDLE - Super Lady.mp3', 'cancion3-cover.jpg'),
  new Song('10','Hasta la raiz', 'Natalia Fourcade', null, 'Remix', 2019, 'Indie-rock', 'assets/music/10Hasta la raíz -Natalia lafourcade.mp3', 'cancion3-cover.jpg'),
  new Song('11','I hate you I love you', 'Gnash', null, 'Remix', 2015, 'Pop', 'assets/music/11I hate you, I love you -gnash.mp3', 'cancion2-cover.jpg'),
  new Song('12','IU(아이유)', 'eight(에잇)', null, 'Making Mirrors', 2011, 'Indie-rock', 'assets/music/12IU(아이유) _ eight(에잇).mp3', 'cancion1-cover.jpg'),
  new Song('13', 'Love', 'IVE 아이브', null, 'Remix', 2015, 'Pop', 'assets/music/13IVE 아이브 LOVE.mp3', 'cancion4-cover.jpg'),
  new Song('14', 'Peaches', 'Jack Black', null, 'Remix', 2015, 'Pop', 'assets/music/14Jack Black,Peaches.mp3', 'cancion4-cover.jpg'),
  new Song('15', 'Mi traicionero amor', 'Jarawi', null, 'Remix', 2015, 'Pop', 'assets/music/15Jarawi,Mi traicionero amor.mp3', 'cancion4-cover.jpg'),
  new Song('16', 'Todos tenemos un amor', 'La mosca Tse-Tse', null, 'Remix', 2015, 'Pop', 'assets/music/16La Mosca Tse-Tse-Todos Tenemos Un Amor.mp3', 'cancion4-cover.jpg'),
  new Song('17', 'Lo malo de ser bueno', 'Cuarteto de nos', null, 'Remix', 2015, 'Pop', 'assets/music/17Lo malo de ser bueno -Cuarteto de nos.mp3', 'cancion4-cover.jpg'),
  new Song('18', 'Lost on you', 'LP', null, 'Remix', 2015, 'Pop', 'assets/music/18lp. lost on you.mp3', 'cancion4-cover.jpg'),
  new Song('19', 'Starry Night', 'MAMAMOO(마마무) ', null, 'Remix', 2015, 'Pop', 'assets/music/19MAMAMOO(마마무) _ Starry Night.mp3', 'cancion4-cover.jpg'),
  new Song('20', 'While Your Lips Are Still Red', 'Nightwish', null, 'Remix', 2015, 'Pop', 'assets/music/21Nightwish- While Your Lips Are Still Red..mp3', 'cancion4-cover.jpg'),
  new Song('21', 'Payphone', 'Maroon 5 ', null, 'Remix', 2015, 'Pop', 'assets/music/22Payphone -Maroon 5.mp3', 'cancion4-cover.jpg'),
  new Song('22', 'Photograph', 'Ed Sheeran ', null, 'Remix', 2015, 'Pop', 'assets/music/23Photograph - Ed Sheeran.mp3', 'cancion4-cover.jpg'),
  new Song('23', 'Reflexiones', 'Esto es eso ', null, 'Remix', 2015, 'Pop', 'assets/music/25Reflexiones -Esto es eso.mp3', 'cancion4-cover.jpg'),
  new Song('24', 'Lonely Day', 'System Of A Down ', null, 'Remix', 2015, 'Pop', 'assets/music/26System Of A Down - Lonely Day.mp3', 'cancion4-cover.jpg'),
  new Song('25', 'INVU', 'TAEYEON 태연 ', null, 'Remix', 2015, 'Pop', 'assets/music/27TAEYEON 태연 INVU.mp3', 'cancion4-cover.jpg'),
  new Song('26', 'In Hell I ll Be In Good Company', 'The Dead South ', null, 'Remix', 2015, 'Pop', 'assets/music/28The Dead South - In Hell Ill Be In Good Company.mp3', 'cancion4-cover.jpg'),
  new Song('27', 'Tu falta de querer ', 'Mon Laferte ', null, 'Remix', 2015, 'Pop', 'assets/music/29Tu falta de querer -Mon Laferte.mp3', 'cancion4-cover.jpg'),
  new Song('28', 'Inside Out', 'Zedd, Griff', null, 'Remix', 2015, 'Pop', 'assets/music/30Zedd, Griff - Inside Out.mp3', 'cancion4-cover.jpg'),
  new Song('29', 'WALK THE MOON', 'Shut Up and Dance', null, 'Remix', 2014, 'Pop', 'assets/music/Walk The Moon - Shut Up And Dance.mp3', 'cancion4-cover.jpg'),
  new Song('30', 'Reality', 'Lost Frequencies', null, 'Remix', 2015, 'Pop', 'assets/music/Reality.mp3', 'cancion4-cover.jpg'),
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
