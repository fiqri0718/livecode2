import React from 'react';
import { render, screen, act } from '@testing-library/react';
import AnimeCardList from './AnimeCardList';

const mockSetSearchAnime = jest.fn();

const mockFetchAnimeData1 = [
  {
    titleEnglish: 'Attack on Titan',
    images: {
      webp: {
        image_url: 'https://example.com/image.webp',
      },
    },
    rating: 'PG-13',
    score: 9.0,
    synopsis: 'A story about humanity on the brink of extinction...',
  },
];

const mockFetchAnimeData2 = [
  {
    titleEnglish: 'Attack on Titan',
    images: {
      webp: {
        image_url: 'https://example.com/image.webp',
      },
    },
    rating: 'PG-13',
    score: 9.0,
    synopsis: 'A story about humanity on the brink of extinction...',
  },
  {
    titleEnglish: 'One Punch Man',
    images: {
      webp: {
        image_url: 'https://example.com/one_punch_man_image.webp',
      },
    },
    rating: 'PG-13',
    score: 9.0,
    synopsis: 'Saitama is a superhero who can defeat any enemy with just one punch...',
  },
  {
    titleEnglish: 'Fullmetal Alchemist: Brotherhood',
    images: {
      webp: {
        image_url: 'https://example.com/fullmetal_alchemist_brotherhood_image.webp',
      },
    },
    rating: 'R',
    score: 9.1,
    synopsis: 'Two brothers embark on a journey to regain their lost bodies using Alchemy...',
  },
  {
    titleEnglish: 'Your Name',
    images: {
      webp: {
        image_url: 'https://example.com/your_name_image.webp',
      },
    },
    rating: 'PG',
    score: 9.0,
    synopsis: 'Two strangers find themselves linked in a bizarre way, where they swap bodies...',
  },
  {
    titleEnglish: 'Demon Slayer: Kimetsu no Yaiba',
    images: {
      webp: {
        image_url: 'https://example.com/demon_slayer_image.webp',
      },
    },
    rating: 'R',
    score: 8.9,
    synopsis: 'A young boy befriends a demon after his family is slaughtered and his sister turns into one...',
  },
];

describe('AnimeCardList', () => {
  it('renders loading indicator when data is being fetched', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ data: mockFetchAnimeData1 }),
    });

    render(<AnimeCardList searchAnime='Attack on Titan' setSearchAnime={mockSetSearchAnime} />);

    const loadingElement = screen.getByText(/Loading/i);
    const backButtonElement = screen.getByText(/Kembali/i);

    expect(loadingElement).toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    await act(() => Promise.resolve());

    expect(loadingElement).not.toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.jikan.moe/v4/anime?q=Attack on Titan');

    expect(screen.getByText(/Hasil Pencarian Anime : Attack on Titan/i)).toBeInTheDocument();

    //expect class anime-card to be rendered 1 times
    expect(screen.getAllByTestId('anime-card')).toHaveLength(1);
  });

  it('renders anime card list when data is fetched mockFetchAnimeData1', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ data: mockFetchAnimeData1 }),
    });

    render(<AnimeCardList searchAnime='Attack on Titan' setSearchAnime={mockSetSearchAnime} />);

    const loadingElement = screen.getByText(/Loading/i);
    const backButtonElement = screen.getByText(/Kembali/i);

    expect(loadingElement).toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    await act(() => Promise.resolve());

    expect(loadingElement).not.toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.jikan.moe/v4/anime?q=Attack on Titan');

    expect(screen.getByText(/Hasil Pencarian Anime : Attack on Titan/i)).toBeInTheDocument();

    expect(screen.getAllByTestId('anime-card')).toHaveLength(1);
  });

  it('renders anime card list when data is fetched mockFetchAnimeData2', async () => {
    global.fetch = jest.fn().mockResolvedValueOnce({
      json: () => Promise.resolve({ data: mockFetchAnimeData2 }),
    });

    render(<AnimeCardList searchAnime='random anime' setSearchAnime={mockSetSearchAnime} />);

    const loadingElement = screen.getByText(/Loading/i);
    const backButtonElement = screen.getByText(/Kembali/i);

    expect(loadingElement).toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    await act(() => Promise.resolve());

    expect(loadingElement).not.toBeInTheDocument();
    expect(backButtonElement).toBeInTheDocument();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith('https://api.jikan.moe/v4/anime?q=random anime');

    expect(screen.getByText(/Hasil Pencarian Anime : random anime/i)).toBeInTheDocument();

    expect(screen.getAllByTestId('anime-card')).toHaveLength(5);
  });
});
