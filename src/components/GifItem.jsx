import PropTypes from "prop-types";
export const GifItem = ({ title, url, id }) => {
  return (
    <div className=" bg-white shadow-lg rounded-md  flex flex-col items-center overflow-hidden h-96">
      <img
        src={url}
        alt={title}
        className="object-cover object-center  w-full flex-1"
        aria-label="gif"
      />
      {/* <p className="p-4 ">{title != " " ? title : "[Gif Sin Nombre]"}</p> */}
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
/* GifItem.defaultProps = {
  title: "[Gif Sin Nombre]",
  url: "",
}; */
