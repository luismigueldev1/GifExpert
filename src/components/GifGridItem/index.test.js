import React from "react";
import { shallow } from "enzyme";
import GifGridItem from ".";

describe("Pruebas para GifGridItem", () => {
  const title = "yu gi oh GIF";
  const url =
    "https://media2.giphy.com/media/11zNrvy5Xh5gFa/giphy.gif?cid=cf8f0d8045ww5upcupkqnscdzxh72meo24oob66x9iltsqh5&rid=giphy.gif&ct=g";

  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe retornar el componente y hacer match con el snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe tener un <p> con un title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe tener un <img> igual al url y alt de props", () => {
    const img = wrapper.find("img");
    //img.prop("alt")
    //console.log(img.props())
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener la clase animate__fadeIn", () => {
    const div = wrapper.find("div");
    // const className = div.prop("className");
    // expect(className.includes("animate__fadeIn")).toBe(true);
    expect(div.hasClass("animate__fadeIn")).toEqual(true);
  });
});
