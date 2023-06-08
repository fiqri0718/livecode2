import React from 'react';

const Loading = () => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <div className='animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-500 mb-2'></div>
      <p className='text-lg font-semibold'>Loading...</p>
    </div>
  );
};

export default Loading;
