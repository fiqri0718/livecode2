import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NoAnimeFound from './NoAnimeFound';

describe('NoAnimeFound component', () => {
  test('renders "Tidak ada anime yang ditemukan." text', () => {
    render(<NoAnimeFound />);
    const noAnimeText = screen.getByText(/Tidak ada anime yang ditemukan\./i);
    expect(noAnimeText).toBeInTheDocument();
  });
});
