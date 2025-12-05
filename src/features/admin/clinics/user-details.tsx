import React, { useLayoutEffect, useRef, useState } from "react";
import DrawerBody from "../../../components/ui/DrawerBody";
import { Box, Grid, Typography } from "@mui/material";
import type { UserData } from "./constant";

const UserDetails: React.FC<{ onClose?: () => void; user?: UserData }> = ({
  user,
}) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetHeight);
    }
  }, []);
  return (
    <DrawerBody padding="24px" offset={offset} gap={1}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "max-content 1fr",
              rowGap: "10px",
              columnGap: "12px",
            }}
          >
            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              User ID
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.userId}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Username
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.username}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Role Type
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.roleType}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Role
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.role}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Email
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.email}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Contact Number
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.contactNumber}
            </Typography>

            <Typography
              variant="body14PX400FW"
              color="neutral.50"
              sx={{ whiteSpace: "nowrap" }}
            >
              Status
            </Typography>
            <Typography variant="body14PX400FW" color="neutral.80">
              {user?.status}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </DrawerBody>
  );
};

export default UserDetails;
