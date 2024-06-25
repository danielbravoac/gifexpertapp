import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs", () => {
  const category = "Iron Man";
  test("debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs(category);
    //console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: gifs[0].url.includes("https://") ? gifs[0].url : "https://",
    });
  });
});
