/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Content from './Content';
import { act } from 'react-dom/test-utils';

describe('Content component', () => {
  test('renders search box correctly when searchAnime is empty', () => {
    render(<Content />);
    const searchBoxElement = screen.getByPlaceholderText(/Judul Anime.../i);
    expect(searchBoxElement).toBeInTheDocument();
  });

  test('renders AnimeCardList after setting searchAnime', async () => {
    render(<Content />);
    const setSearchAnimeInput = screen.getByPlaceholderText(/Judul Anime/i);

    fireEvent.change(setSearchAnimeInput, { target: { value: 'Naruto' } });
    expect(setSearchAnimeInput.value).toBe('Naruto');

    const submitButton = screen.getByRole('button', { name: /Cari/i });

    act(() => {
      userEvent.click(submitButton);
    });

    const backButton = screen.getByRole('button', { name: /Kembali/i });
    expect(backButton).toBeInTheDocument();
  });
});
