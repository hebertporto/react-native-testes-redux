import {
  NOVEL_FECTH_SUCCESS,
  NOVEL_FECTH_CHAPTERS
} from './types';

export const novelsFetch = () => {
    return (dispatch) => {
      fetch('https://stark-beach-53351.herokuapp.com/api/novels')
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: NOVEL_FECTH_SUCCESS, payload: responseJson.data });
         });
    };
};

export const chapterTitlesFetch = ({ id }) => {
    return (dispatch) => {
      fetch(`https://stark-beach-53351.herokuapp.com/api/chaptertitles/${id}`)
        .then(response => response.json())
        .then((responseJson) => {
            dispatch({ type: NOVEL_FECTH_CHAPTERS, payload: responseJson.data });
         });
    };
};
