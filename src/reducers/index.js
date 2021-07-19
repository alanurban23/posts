import { ADD_ITEM, ADD_ITEM_SUCCESS, REMOVE_ITEM, REMOVE_ITEM_REQUEST } from "../actions";

const initialState = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: "ssssssssssss",
      body: "sssssssssssssssdsdsdsdsdsdssd"
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.item],
      };
      case ADD_ITEM_SUCCESS:
        return {
          ...state,
          [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
        };
    case REMOVE_ITEM:
      return {
        ...state,
        [action.payload.itemType]: [
          ...state[action.payload.itemType].filter(item => item.id !== action.payload.id),
        ],
      };
    case REMOVE_ITEM_REQUEST:
      return {
        ...state
      }
    default:
      console.log(state);
      return state;
  }
};

export default rootReducer;
