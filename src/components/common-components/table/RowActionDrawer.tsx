import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export type RowActionOption<T = any> = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: (row: T) => void | Promise<void>;
  destructive?: boolean;
};

interface RowActionMenuProps<T = any> {
  row: T;
  options: RowActionOption<T>[];
}

export function RowActionMenu<T = any>({ row, options }: RowActionMenuProps<T>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = async (opt: RowActionOption<T>) => {
    if (opt.onClick) await opt.onClick(row);
    handleClose();
  };

  return (
    <>
      <IconButton size="small" onClick={handleOpen}>
        <MoreVertIcon sx={{ fontSize: "20px" }} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.key} onClick={() => handleOptionClick(opt)}>
            {opt.icon && <ListItemIcon>{opt.icon}</ListItemIcon>}
            <ListItemText>
              <Typography
                sx={{
                  color: opt.destructive ? "error.main" : "text.primary",
                  fontWeight: opt.destructive ? 600 : 500,
                }}
              >
                {opt.label}
              </Typography>
            </ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
