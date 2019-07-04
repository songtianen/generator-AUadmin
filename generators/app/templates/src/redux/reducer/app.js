import { UPDATE_MODULE, UPDATE_ACCESSMENU } from '../actions/actionTypes';

const app = (state, action) => {
  if (!state) {
    state = {};
  }
  switch (action.type) {
    case UPDATE_ACCESSMENU:
      return {
        ...state,
      };
    case UPDATE_MODULE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
export { app };
