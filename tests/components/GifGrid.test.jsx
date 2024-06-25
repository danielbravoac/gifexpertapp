import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");
describe("Pruebas en <GifGrid/>", () => {
  const category = "Iron Man";
  test("debe de mostrar el Loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
  test("debe de mostrar items cuando se cargan las imagenes de useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Iron Man",
        url: "https://localhost/cualquier.jpg",
      },
      {
        id: "123",
        title: "Iron Man 2",
        url: "https://localhost/cualquier.jpg",
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getAllByRole("img").length).toBe(gifs.length);
  });
});
