import { render, screen, fireEvent } from "@testing-library/react";
import UserCard from "../components/UserCard";

describe("UserCard Component", () => {
  test("renders name correctly", () => {
    render(<UserCard name="Abinash" />);
    expect(screen.getByText("Name: Abinash")).toBeInTheDocument();
  });
  test("renders initial age", () => {
    render(<UserCard initialAge={24} />);
    expect(screen.getByTestId("age")).toHaveTextContent("Age: 24");
  });

  test("button click increases age", () => {
    render(<UserCard initialAge={24} />);
    const button = screen.getByText("Increase Age");

    fireEvent.click(button);

    expect(screen.getByTestId("age")).toHaveTextContent("Age: 25");
  });

  test("shows Senior Developer when age >= 30", () => {
    render(<UserCard initialAge={29} />);
    const button = screen.getByText("Increase Age");

    fireEvent.click(button);

    expect(screen.getByText("Senior Developer")).toBeInTheDocument();
  });

  test("button gets disabled when age > 50", () => {
    render(<UserCard initialAge={50} />);
    const button = screen.getByText("Increase Age");

    fireEvent.click(button);

    expect(button).toBeDisabled();
  });

  test("calls onAgeChange when age increases", () => {
    const mockFn = jest.fn();
    render(<UserCard onAgeChange={mockFn} />);

    const button = screen.getByText("Increase Age");
    fireEvent.click(button);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
