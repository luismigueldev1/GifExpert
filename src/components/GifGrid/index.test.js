import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import GifGrid from ".";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "Pokemon";

  test("debe mostrarse correctamente", () => {
    useFetchGifs.mockReturnValue({
      loading: true,
      data: [],
      error: null,
    });

    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        url: "https://google.com",
        title: "Imagen de Prueba",
      },
      {
        id: "123",
        url: "https://google.com",
        title: "Imagen de Prueba",
      },
    ];
    useFetchGifs.mockReturnValue({
      loading: false,
      data: gifs,
      error: null,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
