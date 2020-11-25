import { renderHook, act } from "@testing-library/react-hooks";
import { useForm } from "../../hooks/useForm";

describe("UseForm Tests", () => {
  const initialForm = {
    email: "j@gmail.com",
    password: "12434",
  };
  test("it must return a default form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [values, handleInputChange, reset] = result.current;
    expect(values).toEqual(initialForm);
    expect(typeof handleInputChange).toBe("function");
    expect(typeof reset).toBe("function");
  });
  test("it must change the value of the form (to change email)", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;
    act(() => {
      handleInputChange({ target: { name: "email", value: "j@gmail.com" } });
    });
    const [values] = result.current;
    expect(values).toEqual({ ...initialForm, email: "j@gmail.com" });
  });
  test("You must reset the form", () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;
    act(() => {
      handleInputChange({ target: { name: "email", value: "j@gmail.com" } });
      reset();
    });
    const [values] = result.current;
    expect(values).toEqual(initialForm);
  });
});
