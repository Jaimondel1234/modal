import { getListByMode } from "../../helpers/helpers";
import { notesListMock } from "../../__mocks__/notesListMock";
import reverse from "lodash/reverse";
import clone from "lodash/clone";
import orderBy from "lodash/orderBy";

describe("Test helpers", () => {
  test("the old note to new note list must be correct ", () => {
    expect(getListByMode("oldToNew", notesListMock)).toEqual(notesListMock);
  });
  test("the new note to old notes list must be correct ", () => {
    expect(getListByMode("newToOld", notesListMock)).toEqual(
      reverse(clone(notesListMock))
    );
  });
  test("the A too Z notes list must be correct ", () => {
    expect(getListByMode("AtoZ", notesListMock)).toEqual(
      orderBy(notesListMock, [(note) => note.title.toLowerCase()], ["asc"])
    );
  });
  test("the Z to A notes list must be correct ", () => {
    expect(getListByMode("ZToA", notesListMock)).toEqual(
      orderBy(notesListMock, [(note) => note.title.toLowerCase()], ["desc"])
    );
  });
});
