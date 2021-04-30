import React from "react";
import useFetchGifs from "../../hooks/useFetchGifs";
import GifGridItem from "../GifGridItem";
import PropTypes from "prop-types";

function GifGrid({ category }) {
  const { data: images, loading, error } = useFetchGifs(category);

  return (
    <div>
      <h3 className="animate__animated animate__fadeIn ">{category}</h3>
      {loading && (
        <p className="animate__animated animate__flash animate__infinite">
          Cargando...
        </p>
      )}
      {error && { error }}
      <ol className="card-grid">
        {images.map((image) => {
          return <GifGridItem key={image.id} {...image} />;
        })}
      </ol>
    </div>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;
