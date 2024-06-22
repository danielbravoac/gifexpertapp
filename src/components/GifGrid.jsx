import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading, isError } = useFetchGifs(category);
  return (
    <div className="space-y-5">
      <h3 className="font-bold text-4xl text-blue-400">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      {isLoading && (
        <h2 className="bg-blue-200 text-blue-800 rounded-lg animate-pulse p-4">
          Cargando...
        </h2>
      )}
      {isError && (
        <h2 className="bg-red-200 text-red-800 p-4 rounded-lg animate-pulse">
          Estamos teniendo problemas para cargar los gifs
        </h2>
      )}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-2">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </div>
  );
};
