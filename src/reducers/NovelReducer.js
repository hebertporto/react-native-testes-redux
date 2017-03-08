import {
  NOVEL_FECTH_SUCCESS,
  NOVEL_FECTH_CHAPTERS
} from '../actions/types';

const INITIAL_STATE = {
  id: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NOVEL_FECTH_SUCCESS:
      return action.payload;
    case NOVEL_FECTH_CHAPTERS:
      return action.payload
    default:
      return state;
  }
};
