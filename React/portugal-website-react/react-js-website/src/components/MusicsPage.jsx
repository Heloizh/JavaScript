import React, { useState, useEffect, useRef } from 'react';

export default function MusicsPage({ activeElement, setActiveElement }) {
  const musicPlaylist = [
    { type: 'music', title: 'Saudade', media: 'audio', src: 'src/assets/music/maro_saudade-saudade.mp3' },
    { type: 'music', title: 'O Pastor', media: 'audio', src: 'src/assets/music/madredeus_opastor.mp3' },
    { type: 'music', title: 'Amália R.', media: 'audio', src: 'src/assets/music/uma_casa_portuguesa_amalia.mp3' }
  ]; 

  const instrumentPlaylist = [
    { type: 'instrument', title: 'Adufe Sl.', media: 'audio', src: 'src/assets/instrument/adufe_solo_by_Tiago_ManuelSoares.mp4' },
    { type: 'instrument', title: 'Guitar Pt.', media: 'audio', src: 'src/assets/instrument/cancaoverdes_anos.mp3' },
    { type: 'instrument', title: 'Concertin', media: 'audio', src: 'src/assets/instrument/asdaConcertina_Espanholada_a_Portuguesa.mp4' }
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('Musica 1');

  // Reference for audio element
  const audioRef = useRef(null);

  // Handle play/pause functionality
  const handlePlayMusic = (src, title) => {
    if (currentTrack === src) {
      setIsPlaying(!isPlaying);
      isPlaying ? audioRef.current.pause() : audioRef.current.play();
    } else {
      setCurrentTrack(src);
      setCurrentTitle(title);
      audioRef.current.src = src;
      setIsPlaying(true);
      audioRef.current.play();
    }
  };

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      audioRef.current.src = '';
    };
  }, []);

  return (
    <div className='musicsPage' id='music'>
      <header className='headerVinil'>
        <div className='choseOption'>
          <img src='src/assets/musicpage/vinil.png' alt='vinil' />
          <div className='titleMusic_and_addComents'>
            <h2>{currentTitle}</h2>
            <i className='bx bxs-comment-add'>0</i>
          </div>
        </div>
      </header>

      <header className='musicsHeader'>
        <h1>MUSIC</h1>
        <ul id='optionsMusicpage'>
          <li onClick={() => setActiveElement('musics')}>
            <img src='src/assets/musicpage/vinil_com_fundo.png' alt='vinil' />
            <h4>Music</h4>
          </li>
          <li onClick={() => setActiveElement('instrument')}>
            <img src='src/assets/musicpage/guitarraportuguesa.png' alt='guitarra portuguesa' />
            <h4>Instrument</h4>
          </li>
        </ul>

        <div id='playlist'>
          <h4>Playlist</h4>
          {activeElement === 'musics' && (
            <ul id='playlistMusic'>
              {musicPlaylist.map((music) => (
                <li className='info' key={music.title}>
                  {music.title}
                  <button onClick={() => handlePlayMusic(music.src, music.title)}>
                    <i className={`fa-solid ${currentTrack === music.src && isPlaying ? 'fa-circle-pause' : 'fa-circle-play'}`}></i>
                  </button>
                </li>
              ))}
            </ul>
          )}

          {activeElement === 'instrument' && (
            <ul id='playlistInstrument'>
              {instrumentPlaylist.map((instrument) => (
                <li className='info' key={instrument.title}>
                  {instrument.title}
                  <button onClick={() => handlePlayMusic(instrument.src, instrument.title)}>
                    <i className={`fa-solid ${currentTrack === instrument.src && isPlaying ? 'fa-circle-pause' : 'fa-circle-play'}`}></i>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      {/* Audio element */}
      <audio ref={audioRef} id='audio' />
    </div>
  );
}
