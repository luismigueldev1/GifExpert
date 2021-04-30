import { getGifs } from "./getGifs";

describe("Pruebas en getGifs fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const response = await getGifs("YuGiOh!");
    expect(response.length).toBe(10);
  });

  test("debe de devolver un [] vacio si no se le envia parametro", async () => {
    const response = await getGifs("");
    expect(response.length).toBe(0);
  });
});
