import React, { useState } from 'react';
import AnimeCardList from './AnimeCardList';

const Content = () => {
  const [searchAnime, setSearchAnime] = useState('');

  const handleSearchAnime = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const animeTitle = formData.get('searchAnime');
    setSearchAnime(animeTitle);
  };

  return (
    <div>
      {searchAnime === '' ? (
        <form onSubmit={handleSearchAnime}>
          <input
            type="text"
            name="searchAnime"
            placeholder="Judul Anime..."
          />
          <button type="submit">Cari</button>
        </form>
      ) : (
        <AnimeCardList searchAnime={searchAnime} setSearchAnime={setSearchAnime} />
      )}
    </div>
  );
};

export default Content;
