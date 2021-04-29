export const getGifs = async (category) => {
  try {
    const GIPHY_API_KEY = "Au2dPNpfu08JAXnQygyU7oKe7cEx1uP5";
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API_KEY}&q=${encodeURI(
      category
    )}&limit=10`;
    const response = await fetch(URL);
    const { data } = await response.json();
    const gifs = data.map((gif) => {
      return {
        id: gif.id,
        title: gif.title,
        url: gif.images?.downsized_medium.url,
      };
    });
    return gifs;
  } catch (error) {
    return error;
  }
};
