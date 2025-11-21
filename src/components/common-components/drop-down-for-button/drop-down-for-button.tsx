import { useRef, useState } from "react";
import {
  Button,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export interface DropdownMenuOption {
  key: string;
  label: string;
  icon?: React.ReactNode;
  onClick: () => void;
}

interface DropdownButtonProps {
  label: string;
  startIcon?: React.ReactNode;
  options: DropdownMenuOption[];
  width?: number | string;
}

const DropdownButton: React.FC<DropdownButtonProps> = ({
  label,
  startIcon,
  options,
  width = "200px",
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const openMenu = () => setAnchorEl(buttonRef.current);
  const closeMenu = () => setAnchorEl(null);

  const handleSelect = (option: DropdownMenuOption) => {
    option.onClick();
    closeMenu();
  };

  return (
    <>
      <Button
        ref={buttonRef}
        variant="contained"
        startIcon={startIcon}
        sx={{ width }}
        onClick={openMenu}
      >
        {label}
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            width: buttonRef.current ? buttonRef.current.offsetWidth : width,
          },
        }}
      >
        {options.map((opt) => (
          <MenuItem key={opt.key} onClick={() => handleSelect(opt)}>
            {opt.icon && <ListItemIcon>{opt.icon}</ListItemIcon>}
            <ListItemText>{opt.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownButton;
