import { shallow } from "enzyme";
import AddCategory from ".";

describe("Pruebas en AddCategory", () => {
  const setCategories = jest.fn();

  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto ", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";
    input.simulate("change", { target: { value: value } });
  });

  test("NO debe de postear la información on submit si no se le envia un valor en el input", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });

    expect(setCategories).not.toHaveBeenCalled();
  });

  test("Debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: value } });

    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    //expect(setCategories).toHaveBeenCalledTimes(1);
    expect(setCategories).toHaveBeenCalled();
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
    //expect(input.text()).toBe("");
    expect(input.prop("value")).toBe("");
  });
});
