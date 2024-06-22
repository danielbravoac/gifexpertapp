export const GifItem = ({ title, url, id }) => {
  return (
    <div className=" bg-white shadow-lg rounded-md  flex flex-col items-center overflow-hidden h-96">
      <img
        src={url}
        alt={title}
        className="object-cover object-center  w-full flex-1"
      />
      {/* <p className="p-4 ">{title != " " ? title : "[Gif Sin Nombre]"}</p> */}
    </div>
  );
};
