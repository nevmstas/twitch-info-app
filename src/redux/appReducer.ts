import { HIDE_LOADER, SHOW_LOADER } from "./types";

type initialStateType = {
  isLoading: boolean;
};

const initialState: initialStateType = {
  isLoading: false,
};

export const appReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
      };
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};
