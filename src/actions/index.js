import axios from "axios";
import store from "../store";

export const ADD_ITEM = 'ADD_ITEM';
export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';

export const REMOVE_ITEM_REQUEST = 'REMOVE_ITEM_REQUEST';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const REMOVE_ITEM_SUCCESS = 'REMOVE_ITEM_SUCCESS';

export const removeItem = (itemType, id) => async dispatch => {
    dispatch({ type: REMOVE_ITEM_REQUEST });
    axios
    .delete(`http://localhost:8000/posts/${id}`)
    .then(() => {
      return {
        type: REMOVE_ITEM_SUCCESS,
        payload: {
          itemType,
          id,
        },
      };
    })
}

export const addItem = (itemType, itemContent) => async (dispatch, getState) => {
  const getId = () =>
  `_${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  dispatch({type: ADD_ITEM_REQUEST});

  return axios
  .post('http://localhost:8000/posts', {
    ...itemContent,
    userId: 1,
    id: getId()
  })
  .then(data => {
    dispatch({
      type: ADD_ITEM_SUCCESS, 
      payload: {itemType, data} 
    });
  });
};
