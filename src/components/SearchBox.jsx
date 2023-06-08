import React, { useState } from 'react';

const SearchBox = ({ setSearchAnime }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchAnime(searchInput);
  };

  return (
    <main className='flex-grow p-4 w-4/5 mx-auto flex items-center justify-center'>
      <form className='w-full max-w-md flex' onSubmit={handleSubmit}>
        <label htmlFor='search' className='sr-only'>
          Cari Anime
        </label>
        <input
          type='text'
          id='search'
          name='search'
          placeholder='Judul Anime...'
          className='w-full py-2 px-4 text-[#2E51A2] border border-[#2E51A2] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#2E51A2] text-lg'
          value={searchInput}
          onChange={handleSearchInput}
        />
        <button type='submit' className='bg-[#2E51A2] text-white py-2 px-4 rounded-r-lg font-semibold text-lg'>
          Cari
        </button>
      </form>
    </main>
  );
};

export default SearchBox;
