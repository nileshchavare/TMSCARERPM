import {type PropsWithChildren,type ReactNode, useRef } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import DownloadIcon from "@mui/icons-material/Download";
import { Box, Drawer, Grid, IconButton, Typography, useMediaQuery } from "@mui/material";

import { customLabelStyles } from "../common-components/custom-label/widgets/custom-label-styles";

import { useDrawer } from "../../hooks/useDrawer";
import { theme } from "../../utils/theme";

export const stylesOfFooter = {
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  borderTop: `1px solid ${theme.palette.divider}`,
  position: "absolute",
  bottom: 0,
  left: 0,
  padding: "12px 24px",
};

interface MainDrawerProps {
  drawerWidth?: string;
  anchor?: "left" | "top" | "right" | "bottom";
  content?: ReactNode;
  showCloseButton?: boolean;
  showMandatoryIndicator?: boolean;
  showSecondButton?: boolean;
  showCustomIcons?: boolean;
  onDownload?: () => void;
  showBackArrow?: boolean;
  componentId?: string; // Unique identifier for the component rendering this drawer
}

const MainDrawer = ({
  drawerWidth,
  anchor,
  content,
  showCloseButton = false,
  showMandatoryIndicator = false,
  showSecondButton = false,
  showCustomIcons = false,
  onDownload,
  showBackArrow = true,
  componentId,
}: PropsWithChildren<MainDrawerProps>) => {
  const { isOpen, content: contentDrawer, close } = useDrawer();
  const belowLg = useMediaQuery(theme.breakpoints.down("lg"));
  const headerRef = useRef<HTMLDivElement>(null);

  if (componentId && contentDrawer?.componentId) {
    // Only apply componentId filtering if both componentId and contentDrawer.componentId are present
    // This maintains backward compatibility for components that don't use componentId
    const shouldRender = contentDrawer.componentId === componentId;
    // Don't render if this is not the active drawer
    if (!shouldRender) {
      return null;
    }
  }

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      PaperProps={{
        sx: {
          width: drawerWidth ? drawerWidth : belowLg ? "50vw" : "40vw",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <Grid
          container
          ref={headerRef}
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: `1px solid ${theme.palette.divider}`,
            padding: "8px 16px",
            paddingLeft: 3,
            width: "100%",
          }}
        >
          <Grid container columnGap={1.5}>
            {showBackArrow && (
              <>
                {showSecondButton ? (
                  <IconButton onClick={() => close("custom-close")}>
                    <CloseOutlinedIcon sx={{ fontSize: "18px" }} />
                  </IconButton>
                ) : (
                  <IconButton onClick={() => close("back-arrow")}>
                    <ArrowBackIcon sx={{ fontSize: "18px" }} />
                  </IconButton>
                )}
              </>
            )}
            <Typography fontWeight={550} variant="bodyMedium" alignContent={"center"}>
              {contentDrawer.title}
            </Typography>
          </Grid>

          <Grid>
            {showCloseButton && (
              <Grid>
                <IconButton onClick={() => close("custom-close")}>
                  <CloseOutlinedIcon />
                </IconButton>
              </Grid>
            )}
            {showCustomIcons && (
              <Grid>
                <IconButton onClick={onDownload}>
                  <DownloadIcon />
                </IconButton>
              </Grid>
            )}
            {showMandatoryIndicator && (
              <Grid container columnGap={1}>
                <span style={customLabelStyles.required}>*</span>
                <Typography variant="bodySmall" sx={{ color: theme.palette.common.black }}>
                  Indicates Mandatory Fields{" "}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Grid>
        <Grid
          container
          sx={{
            height: `calc(100vh - ${headerRef.current?.offsetHeight ?? 0}px)`,
            overflow: "hidden",
          }}
        >
          {content}
        </Grid>
      </Box>
    </Drawer>
  );
};

export default MainDrawer;
