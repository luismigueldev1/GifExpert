import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
export default function useFetchGifs(category) {
  const [state, setState] = useState({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    getGifs(category)
      .then((data) => setState({ data: data, loading: false }))
      .catch((error) => setState({ loading: false, error: error }));
  }, [category]);

  return state;
}
