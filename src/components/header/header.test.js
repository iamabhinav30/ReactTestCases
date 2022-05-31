import { render, screen } from '@testing-library/react';
import Header from './header'

// test('Test header', () => {
//   render(<Header title={title} />);
 
//   expect(screen.getByText("title")).toBeInTheDocument();
// });


test('TCheck props has  title as some header', () => {
    render(<Header title={"some header"} />);
   
    expect(screen.getByText("some header")).toBeInTheDocument();
  });