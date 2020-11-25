import PropTypes from 'prop-types';
import reverse from 'lodash/reverse';
import clone from 'lodash/clone';
import orderBy from 'lodash/orderBy';

/*
  Function to get a list according to the list mode
*/

export const getListByMode = (listMode, notes) => {
  switch (listMode) {
    case 'oldToNew':
      return notes;
    case 'newToOld':
      return reverse(clone(notes));
    case 'AToZ':
      return orderBy(notes, [(note) => note.title.toLowerCase()], ['asc']);
    case 'ZToA':
      return orderBy(notes, [(note) => note.title.toLowerCase()], ['desc']);
    default:
      return notes;
  }
};

getListByMode.propTypes = {
  listMode: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.object),
};
