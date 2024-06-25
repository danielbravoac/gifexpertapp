import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe("Pruebas en <GifExpertApp/>", () => {
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
  test("debe de agregar nuevas secciones si se envia una nueva categoria", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "Iron Man" } });
    fireEvent.submit(form);
    //screen.debug();
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toBe(
      "Iron Man"
    );
  });
  test("should debe agregar la categoria si es única", () => {
    render(<GifExpertApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByRole("form");
    fireEvent.input(input, { target: { value: "Iron Man" } });
    fireEvent.submit(form);

    fireEvent.input(input, { target: { value: "Iron Man" } });
    fireEvent.submit(form);
    expect(screen.getByRole("heading", { level: 3 }).innerHTML).toBe(
      "Iron Man"
    );
  });
});
