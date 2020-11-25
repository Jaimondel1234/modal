import { types } from "../../types/types";

describe("Types tests", () => {
  test("The types must match", () => {
    expect(types).toEqual({
      authLogin: "[Auth] Login",
      authLogout: "[Auth] Logout",

      uiOpenModal: "[ui] Open Modal",
      uiCloseModal: "[ui] Close Modal",

      noteAddNew: "[notes] Add New Notes",
      noteDeleted: "[notes] Delete Note",
      noteSetActive: "[notes] Set Active Note",
      noteUpdate: "[notes] Update note",
      noteSetListMode: "[notes] Set List Mode ",
      noteReset: "[notes] Reset notes",
    });
  });
});
