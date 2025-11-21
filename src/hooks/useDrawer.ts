import { useEffect } from "react";
import {type TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { type Dispatch } from "@reduxjs/toolkit";

import {type DrawerActionTypes, closeDrawer, openDrawer } from "../redux/actions/drawer.action";
import {type DrawerContent } from "../redux/actions/types/drawer.types";
import { type RootState } from "../redux/store";

export interface UseDrawerProps {
  onClose?: (reason?: "back-arrow" | "custom-close" | "overlay" | "programmatic") => void;
}

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useDrawer = (props?: UseDrawerProps) => {
  const dispatch = useDispatch<Dispatch<DrawerActionTypes>>();
  const { onClose } = props || {};

  const drawerState = useAppSelector((state) => state.drawerReducer);
  useEffect(() => {
    if (drawerState.isOpen) {
      /*** Add a dummy state to history when drawer opens */
      window.history.pushState(null, "", window.location.href);
      const handlePopState = (event: PopStateEvent) => {
        /*** Prevent the default back navigation */
        event.preventDefault();
        /*** Close the drawer instead of going back */
        handleClose("back-arrow");
      };
      /*** Listen for popstate event (triggered by browser back/forward buttons) */
      window.addEventListener("popstate", handlePopState);
      return () => {
        /*** Clean up event listener when drawer closes or component unmounts */
        window.removeEventListener("popstate", handlePopState);
      };
    }
  }, [drawerState.isOpen]);

  const handleOpen = (content: DrawerContent) => {
    dispatch(openDrawer(content));
  };

  const handleClose = (reason?: "back-arrow" | "custom-close" | "overlay" | "programmatic") => {
    dispatch(closeDrawer(reason));
    onClose?.(reason);
  };

  return {
    isOpen: drawerState.isOpen,
    content: drawerState.content,
    closeReason: drawerState.closeReason,
    previousContent: drawerState.previousContent,
    open: handleOpen,
    close: handleClose,
  } as const;
};
