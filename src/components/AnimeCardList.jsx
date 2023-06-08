import { useState, useEffect } from 'react';
import { ArrowLeftIcon } from '@heroicons/react/solid';
import AnimeCard from './AnimeCard';
import Loading from './Loading';
import NoAnimeFound from './NoAnimeFound';

function AnimeCardList({ searchAnime, setSearchAnime }) {
  const [animesList, setAnimesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetBack = () => {
    setSearchAnime('');
  };

  const fetchAnime = async () => {
    // API URL
    const URL = `https://api.jikan.moe/v4/anime?q=${searchAnime}`;

    try {
      // fetching data
      const response = await fetch(URL);
      const data = await response.json();

      // set anime data to state
      setAnimesList(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // set loading to true
    setIsLoading(true);

    // panggil fetchAnime dan ketika promise selesai set loading ke false
    fetchAnime().then(() => {
      setIsLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='min-w-[80%]'>
      {/* button kembali */}
      <button className='bg-[#2E51A2] text-white py-2 px-4 rounded-r-lg font-semibold text-lg flex items-center' onClick={handleGetBack}><ArrowLeftIcon className='w-5 h-5 mr-1' />Kembali</button>
      {/* if loading render loading */}
      {isLoading && <Loading />}
      {/* if not loading and animesList length > 0 render anime card list */}
      {!isLoading && animesList.length > 0 && (
        <div>
          <p>Hasil Pencarian Anime : {searchAnime}</p>
          {animesList.map((anime, index) => (
            <AnimeCard key={index} anime={anime} />
          ))}
        </div>
      )}
      {/* if not loading and animesList length === 0 render no anime found */}
      {!isLoading && animesList.length === 0 && <NoAnimeFound />}
    </div>
  );
}

export default AnimeCardList;
