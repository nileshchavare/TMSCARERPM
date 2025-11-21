import { CLOSE_DRAWER,type DrawerActionTypes, OPEN_DRAWER } from "../actions/drawer.action";
import {type DrawerState } from "../actions/types/drawer.types";

const initialState: DrawerState = {
  isOpen: false,
  content: {
    title: "",
    identifier: undefined,
  },
  closeReason: undefined,
  previousContent: undefined,
};

export const drawerReducer = (state = initialState, action: DrawerActionTypes): DrawerState => {
  switch (action.type) {
    case OPEN_DRAWER:
      return {
        ...state,
        isOpen: true,
        content: action.payload,
        closeReason: undefined,
        // Clear previousContent when opening a new drawer
        previousContent: undefined,
      };
    case CLOSE_DRAWER:
      return {
        ...state,
        isOpen: false,
        closeReason: action.payload?.reason || "programmatic",
        previousContent: state.content, // Store the current content as previous content
        // Keep the content for a brief moment to allow components to read them
        // They will be cleared on the next OPEN_DRAWER action
      };
    default:
      return state;
  }
};
