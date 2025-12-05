import React, { useLayoutEffect, useRef, useState } from "react";
import DrawerBody from "../../../components/ui/DrawerBody";
import { Box, Divider, Grid, Typography } from "@mui/material";
import type { LocationData } from "./constant";

const LocationDetails: React.FC<{
  onClose?: () => void;
  location?: LocationData;
}> = ({ location }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  useLayoutEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetHeight);
    }
  }, []);

  return (
    <DrawerBody padding="24px" offset={offset} gap={1}>
      <Typography
        variant="body18PX600FW"
        color="neutral.80"
        sx={{ pb: 1, pt: 1, mb: "10px", display: "block" }}
      >
        Clinic Details
      </Typography>
      <Grid
        sx={(theme) => ({
          p: 2,
          borderColor: `${theme.palette.neutral[5]} !important`,
          borderRadius: "8px",
          border: "1px solid",
        })}
      >
        <Typography sx={{ mb: 3 }} variant="body20PX500FW" color="neutral.90">
          Georgetown
        </Typography>

        <Grid container spacing={2} mt={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Clinic NPI Number
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.npiNumber}
              </Typography>
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Tax Type
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.npiNumber}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Tax Number
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.taxNumber}
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Contact Number
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.phoneNumber}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Email Id
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.email}
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Status
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                {location?.status}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
      <Divider sx={(theme) => ({ color: theme.palette.neutral[5], my: 3 })} />
      <Grid sx={{ py: 1 }}>
        <Typography variant="body18PX600FW" color="neutral.80">
          Practice Address
        </Typography>
      </Grid>
      <Grid
        sx={(theme) => ({
          mt: "10px",
          p: 2,
          borderColor: `${theme.palette.neutral[5]} !important`,
          borderRadius: "8px",
          border: "1px solid",
        })}
      >
        <Grid container spacing={2} mt={1}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Address Line 1
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                Jupiter Hospital 25 Federal Plaza
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                State
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                USA
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Address Line 2
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                Near Trump Tower New York
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                City
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                California
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Country
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                USA
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Zip Code
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                456324
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Divider sx={(theme) => ({ color: theme.palette.neutral[5], my: 3 })} />
      <Grid sx={{ py: 1 }}>
        <Typography variant="body18PX600FW" color="neutral.80">
          Billing Address
        </Typography>
      </Grid>
      <Grid
        sx={(theme) => ({
          mt: "10px",
          p: 2,
          borderColor: `${theme.palette.neutral[5]} !important`,
          borderRadius: "8px",
          border: "1px solid",
        })}
      >
        <Grid container spacing={2} mt={1}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Address Line 1
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                Jupiter Hospital 25 Federal Plaza
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                State
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                USA
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Address Line 2
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                Near Trump Tower New York
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                City
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                California
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "max-content 1fr",
                rowGap: "8px",
                columnGap: "8px",
              }}
            >
              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Country
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                USA
              </Typography>

              <Typography
                variant="body14PX400FW"
                color="neutral.50"
                sx={{ whiteSpace: "nowrap" }}
              >
                Zip Code
              </Typography>
              <Typography variant="body14PX400FW" color="neutral.80">
                456324
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </DrawerBody>
  );
};

export default LocationDetails;
