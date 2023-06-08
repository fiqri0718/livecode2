import React from 'react';

const AnimeCard = ({ title, image, status, episodes, synopsis }) => {
  return (
    <div className='anime-card bg-white shadow-md rounded-lg p-4 relative' data-testid='anime-card'>
      <div className='relative'>
        <img className='w-full h-[400px] object-cover rounded-lg mb-2' src={image} alt={title} />
        <div className='absolute bottom-0 left-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded-tl-lg'>
          <p className="rating-text">{status}</p>
        </div>
        <div className='absolute bottom-0 right-0 p-2 bg-black bg-opacity-50 text-white text-xs rounded-tl-lg'>
          <p className="score-text">{episodes} episodes</p>
        </div>
      </div>
      <h3 className="title-text text-xl font-semibold mb-2">{title}</h3>
      <p className='text-synopsis text-sm'>{synopsis}</p>
    </div>
  );
};

export default AnimeCard;
