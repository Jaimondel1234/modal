import { types } from "../../types/types";
import { uiOpenModal, uiCloseModal } from "../../actions/ui";

describe("UI actions test", () => {
  test("Open Modal must be correct", () => {
    expect(uiOpenModal()).toEqual({
      type: types.uiOpenModal,
    });
  });
  test("Close Modal must be correct", () => {
    expect(uiCloseModal()).toEqual({
      type: types.uiCloseModal,
    });
  });
});
