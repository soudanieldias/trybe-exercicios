const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ]
  
  function findMusic(id, element) {
    // Adicione seu código aqui
    element.find( (music) => music.id === id );
  }
  
  console.log(findMusic('31031685', 'musicas'));