import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnimeCard from './AnimeCard';

describe('AnimeCard', () => {
  const anime = {
    title: 'My Hero Academia',
    image: 'https://example.com/image.jpg',
    status: 'Finished Airing',
    episodes: '220',
    synopsis: 'A brief description of the anime.',
  };

  test('renders the anime card with the provided data', () => {
    render(<AnimeCard {...anime} />);

    expect(screen.getByText(anime.title)).toBeInTheDocument();
    expect(screen.getByText(anime.status)).toBeInTheDocument();
    expect(screen.getByText(anime.episodes + ' episodes')).toBeInTheDocument();
    expect(screen.getByText(anime.synopsis)).toBeInTheDocument();

    const imageElement = screen.getByAltText(anime.title);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', anime.image);
  });
});
