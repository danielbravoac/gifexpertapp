import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getImages = async () => {
    try {
      const gifs = await getGifs(category);
      if (gifs.length === 0) {
        setIsLoading(false);
        throw new Error("No se encontraron gifs");
      }
      setError(false);
      setImages(gifs);
      setIsLoading(false);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getImages();
  }, []);
  return {
    images,
    isLoading,
    isError: error,
  };
};
