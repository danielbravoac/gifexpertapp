import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("Iron Man"));
    const { images, isLoading, isError } = result.current;
    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
    expect(isError).toBeFalsy();
    //console.log(result);
  });
  test(" debe de retornar un arreglo de imagenes y el isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("Iron Man"));
    //const { images, isLoading, isError } = result.current;
    await waitFor(() => {
      expect(result.current.images.length).toBeGreaterThan(0);
    });

    const { images, isLoading, isError } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
    expect(isError).toBeFalsy();
  });
});
