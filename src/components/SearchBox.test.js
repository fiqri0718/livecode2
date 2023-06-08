/* eslint-disable testing-library/no-unnecessary-act */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from './SearchBox';
import { act } from 'react-dom/test-utils';

const mockSetSearchAnime = jest.fn();

describe('SearchBox', () => {
  it('updates input value when typed', () => {
    render(<SearchBox setSearchAnime={mockSetSearchAnime} />);

    const input = screen.getByPlaceholderText(/Judul Anime\.\.\./i);

    act(() => {
      userEvent.type(input, 'Attack on Titan');
    });

    expect(input).toHaveValue('Attack on Titan');
  });

  it('calls setSearchAnime on form submit', () => {
    render(<SearchBox setSearchAnime={mockSetSearchAnime} />);

    act(() => {
      userEvent.type(screen.getByPlaceholderText(/Judul Anime\.\.\./i), 'Attack on Titan');
    });
    userEvent.click(screen.getByRole('button', { name: /cari/i }));

    expect(mockSetSearchAnime).toHaveBeenCalledWith('Attack on Titan');
  });
});
