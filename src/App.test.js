import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders', () => {
    const {getByText} = render(<App/>);

    expect(getByText('Customer Rewards Program')).toBeInTheDocument;
    expect(screen.findByTestId('tabs')).toBeInTheDocument;
  });
})
