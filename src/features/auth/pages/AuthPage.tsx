import CopyrightIcon from "@mui/icons-material/Copyright";
import { Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import Logo from "../../../assets/logos/logo.svg";
import LoginImage from "../../../assets/svg/LogInFlow.svg";

const AuthPage = ({ children }: any) => {
  return (
    <Grid width={"100%"} height={"100%"} container flexWrap={"nowrap"}>
      <Grid
        width={"33%"}
        bgcolor="#EFF0F2"
        container
        flexDirection={"column"}
        borderRadius={5}
      >
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          height={"100vh"}
        >
          <Box
            width={"100%"}
            height={"100%"}
            sx={{ objectFit: "cover" }}
            component={"img"}
            src={LoginImage}
          ></Box>
        </Grid>
      </Grid>
      <Grid
        container
        width={"60%"}
        minHeight={"100vh"}
        sx={{ textAlign: "center" }}
        pb={4}
        flexDirection={"column"}
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        position={"relative"}
      >
        <Grid
          container
          width={"100%"}
          justifyContent={"flex-start"}
          sx={{ paddingLeft: "56px", paddingTop: "56px" }}
        >
          <Box component="img" src={Logo} alt="Logo" />
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          flexGrow={1}
        >
          <Grid
            mt={1.5}
            width={"475px"}
            minHeight={"350px"}
            container
            alignItems="flex-start"
            flexDirection={"column"}
            rowGap={4}
          >
            {children}
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="flex-end"
          ml={6.5}
          flexWrap="nowrap"
          width="100%"
        >
          <Grid
            rowGap={"16px"}
            container
            columnGap={1}
            alignItems="flex-end"
            flexWrap="nowrap"
            width="auto"
          >
            <Box display="flex" alignItems="center" justifyContent={"center"}>
              <CopyrightIcon
                style={{
                  color: "#373D41",
                  fontSize: "0.75rem",
                  fontWeight: 400,
                  marginTop: "-2px",
                  marginRight: "2px",
                }}
              />
              <Typography variant="body5Regular" color="neutral.70">
                2025 Total Medical Supply
              </Typography>
            </Box>
            <Typography variant="body5Regular" color="neutral.70">
              Support
            </Typography>
            <Typography variant="body5Regular" color="neutral.70">
              Privacy
            </Typography>
            <Typography variant="body5Regular" color="neutral.70">
              Cookie Settings
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AuthPage;
