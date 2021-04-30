import React from "react";
import useFetchGifs from "./useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";
describe("Pruebas en el hook useFetchGifs", () => {
  const category = "Pokemon";
  test("debe de retornar el estado incial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();
    expect(data).toEqual([]);
    expect(loading).toBeTruthy();
  });

  test("debe de retornar un arreglo de imagenes y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toEqual(10);
    expect(loading).toBeFalsy();
  });
});
