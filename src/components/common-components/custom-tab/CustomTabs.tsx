import React from "react";
import { Tabs, Tab, type TabsProps } from "@mui/material";

export interface CustomTabsProps extends Omit<TabsProps, "onChange"> {
  tabs: string[];
  value: number;
  onChange: (newValue: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({
  tabs,
  value,
  onChange,
  ...rest
}) => {
  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    onChange(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      scrollButtons="auto"
      TabIndicatorProps={{ style: { display: "none" } }}
      sx={{
        minwidth:120,
        backgroundColor: "#EFF0F2",    // <-- MAIN BACKGROUND
        borderRadius: "14px",
        padding: "4px",
        minHeight: "auto",

        "& .MuiTabs-flexContainer": {
          gap: "8px",
        },
      }}
      {...rest}
    >
      {tabs.map((label, index) => {
        const isActive = value === index;

        return (
          <Tab
            key={index}
            label={label}
            disableRipple
            sx={{
              textTransform: "none",
              fontFamily: "Figtree, sans-serif",
              fontSize: "14px",
              lineHeight: "120%",
              minHeight: "auto",

              // ACTIVE → white
              backgroundColor: isActive ? "#FFFFFF" : "inherit",

              // COLORS
              color: isActive ? "primary.main" : "#373D41",
              fontWeight: isActive ? 500 : 400,

              padding: "8px 12px",
              borderRadius: "6px",
              border: "none",

              /* Remove all overlays */
              "&.Mui-focusVisible": {
                backgroundColor: "inherit",
              },
              "&.Mui-selected": {
                backgroundColor: isActive ? "#FFFFFF" : "inherit",
              },
              "&:hover": {
                backgroundColor: isActive
                  ? "#FFFFFF"
                  : "inherit",
              },
            }}
          />
        );
      })}
    </Tabs>
  );
};

export default CustomTabs;
