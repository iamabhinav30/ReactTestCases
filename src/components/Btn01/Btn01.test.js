
import { render, screen } from '@testing-library/react'
import Btn01 from './Btn01'

test("Render the Btn01 component: string arg.", () => {
  render(<Btn01 />)
//   screen.debug()

  expect(screen.getByText("Give me all the cookies!")).toBeInTheDocument()

});

test("Render the Btn01 component: use of regex", () => {
    render(<Btn01 />)
  //   screen.debug()
  
    expect(screen.getByText(/cookies/)).toBeInTheDocument()
  
  });
