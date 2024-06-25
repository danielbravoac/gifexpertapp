import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas de <GifItem/>", () => {
  const title = "Un titulo";
  const imgUrl = "https://localhost/algo.jpg";
  test("debe hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={imgUrl} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar una imagen", () => {
    render(<GifItem title={title} url={imgUrl} />);
    const img = screen.getByLabelText("gif");
    //console.log(img);
    expect(img).toBeTruthy();
  });
  test("debe de mostrar la imagen con la url y alt indicado", () => {
    render(<GifItem title={title} url={imgUrl} />);
    //screen.debug();
    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(imgUrl);
    expect(alt).toBe(title);
  });
});
