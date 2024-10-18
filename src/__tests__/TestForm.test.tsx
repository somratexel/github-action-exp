import { render, screen, fireEvent } from "@testing-library/react";
import TestForm from "../components/TestForm";

describe("Form test Component", () => {
  it("write the inputted string", () => {
    render(<TestForm />);

    const input = screen.getByLabelText("Username");

    fireEvent.change(input, { target: { value: "Somrat" } });

    expect(screen.getByText("Input: Somrat")).toBeInTheDocument();
  });
});
