import { types } from "../../types/types";
import { uiReducer } from "../../reducers/uiReducer";

describe("UI Reducer Test", () => {
  const initState = {};
  test("it must return the default value ", () => {
    const state = uiReducer(initState, {});
    expect(state).toEqual(initState);
  });
  test("it must open the modal ", () => {
    const action = {
      type: types.uiOpenModal,
    };
    const state = uiReducer(initState, action);
    expect(state.modalOpen).toEqual(true);
  });
  test("it must open the modal ", () => {
    const action = {
      type: types.uiCloseModal,
    };
    const state = uiReducer(initState, action);
    expect(state.modalOpen).toEqual(false);
  });
});
