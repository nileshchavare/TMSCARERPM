import {type Action } from "@reduxjs/toolkit";

import {type DrawerContent } from "./types/drawer.types";

export const OPEN_DRAWER = "OPEN_DRAWER";
export const CLOSE_DRAWER = "CLOSE_DRAWER";

export interface OpenDrawerAction extends Action<typeof OPEN_DRAWER> {
  payload: DrawerContent;
}

export interface CloseDrawerAction extends Action<typeof CLOSE_DRAWER> {
  payload?: {
    reason?: "back-arrow" | "custom-close" | "overlay" | "programmatic";
  };
}

export const openDrawer = (content: DrawerContent): OpenDrawerAction => ({
  type: OPEN_DRAWER,
  payload: content,
});

export const closeDrawer = (
  reason?: "back-arrow" | "custom-close" | "overlay" | "programmatic"
): CloseDrawerAction => ({
  type: CLOSE_DRAWER,
  payload: reason ? { reason } : undefined,
});

export type DrawerActionTypes = OpenDrawerAction | CloseDrawerAction;
