import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders the Vite and React logos", () => {
    render(<App />);

    const viteLogo = screen.getByAltText("Vite logo");
    const reactLogo = screen.getByAltText("React logo");

    expect(viteLogo).toBeInTheDocument();
    expect(reactLogo).toBeInTheDocument();
  });

  it("renders the correct header text", () => {
    render(<App />);

    const header = screen.getByText("Vite + React V-1.0.7");
    expect(header).toBeInTheDocument();
  });

  it("increments the counter when the button is clicked", () => {
    render(<App />);

    const button = screen.getByRole("button", { name: /count is 0/i });
    expect(button).toBeInTheDocument();

    // Simulate clicking the button
    fireEvent.click(button);

    expect(button).toHaveTextContent("count is 1");
  });

  it("renders the 'read-the-docs' paragraph", () => {
    render(<App />);

    const docsText = screen.getByText(
      "Click on the Vite and React logos to learn more"
    );
    expect(docsText).toBeInTheDocument();
  });
});
