import { Box, Divider, Grid, Typography } from "@mui/material";
import CommonStatusChip from "../../../../components/common-components/common-status-chip/CommonStatusChip";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import VaccinesOutlinedIcon from "@mui/icons-material/VaccinesOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DeviceNameLogo from "../../../../assets/icons/cgm-system.png";
import InsulinPumpLogo from "../../../../assets/icons/insulin.png";

const PatientDemographics = () => {
  return (
    <Grid container width={"100%"} flexDirection={"column"} rowGap={2}>
      <Grid container width={"100%"} p={1} columnGap={1}>
        <Grid
          width={"25%"}
          container
          flexDirection={"column"}
          rowGap={1}
          border={1}
          borderColor="#E7E7E7"
          borderRadius={3}
          p={1}
          bgcolor={"#FFFF"}
        >
          <Grid container width={"100%"} columnGap={1}>
            <Typography variant="body20PX500FW" color="neutral.90">
              Robert Fox
            </Typography>
            <Typography variant="bodyLarge" color="neutral.60">
              (P923)
            </Typography>
            <CommonStatusChip value="Male" sx={{ width: "20%" }} />
          </Grid>
          <Divider orientation="horizontal" />
          <Grid container width={"100%"} justifyContent={"space-between"}>
            <Grid width={"49%"} container columnGap={1} alignItems={"center"}>
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: "20px", color: "#74797B" }}
              />
              <Typography variant="body14PX500FW" color="neutral.90">
                5/27/15 (43Yrs)
              </Typography>
            </Grid>
            <Grid width={"49%"} container columnGap={1} alignItems={"center"}>
              <CallOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
              <Typography variant="body14PX500FW" color="neutral.90">
                (123) 456-7890
              </Typography>
            </Grid>
          </Grid>
          <Grid container width={"100%"} justifyContent={"space-between"}>
            <Grid width={"49%"} container columnGap={1} alignItems={"center"}>
              <EmailOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
              <Typography variant="body14PX500FW" color="neutral.90">
                robert.fox@example.com
              </Typography>
            </Grid>
            <Grid width={"49%"} container columnGap={1} alignItems={"center"}>
              <LocalHospitalOutlinedIcon
                sx={{ fontSize: "20px", color: "#74797B" }}
              />
              <Typography variant="body14PX500FW" color="neutral.90">
                Lukes Hospital
              </Typography>
            </Grid>
          </Grid>
          <Grid width={"100%"} container columnGap={1} alignItems={"center"}>
            <FmdGoodOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
            <Typography variant="body14PX500FW" color="neutral.90">
              4517 Washington Ave. Manchester, Kentucky 39495
            </Typography>
          </Grid>
          <Grid width={"100%"} container columnGap={1} alignItems={"center"}>
            <VaccinesOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
            <Typography variant="body14PX500FW" color="neutral.90">
              Heart Center Hospital
            </Typography>
          </Grid>
        </Grid>
        <Grid
          width={"12%"}
          container
          flexDirection={"column"}
          rowGap={1}
          border={1}
          borderColor="#E7E7E7"
          borderRadius={3}
          p={1}
          bgcolor={"#FFFF"}
        >
          <Grid
            container
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography variant="bodyMedium" color="neutral.90">
              Device Names
            </Typography>
            <AddOutlinedIcon sx={{ fontSize: "22px", color: "#18529B" }} />
          </Grid>
          <Grid container width={"100%"} columnGap={1} alignItems={"center"}>
            <Box
              height={"50px"}
              width={"50px"}
              component={"img"}
              src={DeviceNameLogo}
              border={1}
              borderColor={"#DDEDFF"}
              borderRadius={3}
              bgcolor={"#DDEDFF"}
            ></Box>
            <Grid container flexDirection={"column"} rowGap={1}>
              <Typography variant="body14PX500FW" color="neutral.60">
                CGM
              </Typography>
              <Typography variant="body14PX500FW" color="neutral.90">
                Dexcom
              </Typography>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />
          <Grid container width={"100%"} columnGap={1} alignItems={"center"}>
            <Box
              height={"50px"}
              width={"50px"}
              component={"img"}
              src={InsulinPumpLogo}
              border={1}
              borderColor={"#DDEDFF"}
              borderRadius={3}
              bgcolor={"#DDEDFF"}
            ></Box>
            <Grid container flexDirection={"column"} rowGap={1}>
              <Typography variant="body14PX500FW" color="neutral.60">
                Insulin Pump
              </Typography>
              <Typography variant="body14PX500FW" color="neutral.90">
                Tandem
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid width={"15%"} border={1}>
          sanskruti
        </Grid>
        <Grid width={"30%"} border={1}>
          sanskruti
        </Grid>
        <Grid width={"16%"} border={1}>
          sanskruti
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PatientDemographics;
