import {
  Box,
  Divider,
  Grid,
  LinearProgress,
  linearProgressClasses,
  Slider,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useState } from "react";
import { theme } from "../../../../utils/theme";
import PatientTimer from "./patient-timer";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 10,
  borderRadius: 5,
  width: "100%",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#E7E7E7",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#1A91A1",
  },
}));

const CustomTimeSlider = styled(Slider)(() => ({
  color: "#1A91A1",
  height: 10,
  padding: "13px 0",
  "& .MuiSlider-track": {
    border: "none",
    backgroundColor: "#1A91A1",
    height: 10,
    borderRadius: 5,
  },
  "& .MuiSlider-rail": {
    backgroundColor: "#E7E7E7",
    opacity: 1,
    height: 10,
    borderRadius: 5,
  },
  "& .MuiSlider-thumb": {
    display: "none",
  },
  "& .MuiSlider-mark": {
    backgroundColor: "#1A91A1",
    width: 8,
    height: 8,
    borderRadius: "50%",
    border: "none",
    top: "50%",
    transform: "translateY(-50%)",
    "&.MuiSlider-markActive": {
      backgroundColor: "#1A91A1",
    },
  },
  "& .MuiSlider-markLabel": {
    fontSize: "14px",
    color: "#596063",
    fontWeight: 400,
    top: "calc(50% + 12px)",
  },
  "&.Mui-disabled": {
    color: "#1A91A1",
    opacity: 1,
    "& .MuiSlider-track": {
      backgroundColor: "#1A91A1",
    },
    "& .MuiSlider-rail": {
      backgroundColor: "#E7E7E7",
    },
    "& .MuiSlider-mark": {
      backgroundColor: "#1A91A1",
    },
  },
}));

/***  Define the custom marks array for the time slider */
const timeMarks = [
  { value: 10, label: "10" },
  { value: 20, label: "20" },
  { value: 40, label: "40" },
  { value: 60, label: "60" },
];

const PatientDemographics = () => {
  const belowWidth1366 = useMediaQuery("(max-width:1366px)");
  const belowWidth1440 = useMediaQuery("(max-width:1440px)");

  const [currentDate, setCurrentDate] = useState(new Date());

  /***  Display value for the slider (can be replaced with actual data) */
  const displayValue = 26.5;

  /***  Custom function to format the value label to time format (e.g., 26:30) */
  const formatTime = (v: number): string => {
    const minutes = Math.floor(v);
    const seconds = Math.round((v - minutes) * 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getMonthStartAndEnd = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const startDate = new Date(year, month, 1);
    const endDate = new Date(year, month + 1, 0);

    const formatDate = (d: Date) => {
      const day = String(d.getDate()).padStart(2, "0");
      const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${day} ${monthNames[d.getMonth()]}`;
    };

    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  };

  const handlePreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };
  return (
    <Grid container width={"100%"} flexDirection={"column"} rowGap={2}>
      <Grid container width={"100%"} p={1} justifyContent={"space-between"}>
        <Grid
          width={"25%"}
          container
          flexDirection={"column"}
          rowGap={1.5}
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
            <Grid
              width={"49%"}
              container
              columnGap={1}
              alignItems={
                belowWidth1440 || belowWidth1366 ? "flex-start" : "center"
              }
            >
              <EmailOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
              <Typography
                variant="body14PX500FW"
                color="neutral.90"
                sx={{
                  flex: 1,
                  wordBreak: "break-word",
                }}
              >
                robert.fox@example.com
              </Typography>
            </Grid>
            <Grid
              width={"49%"}
              container
              columnGap={1}
              alignItems={
                belowWidth1440 || belowWidth1366 ? "flex-start" : "center"
              }
            >
              <LocalHospitalOutlinedIcon
                sx={{ fontSize: "20px", color: "#74797B" }}
              />
              <Typography variant="body14PX500FW" color="neutral.90">
                Lukes Hospital
              </Typography>
            </Grid>
          </Grid>
          <Grid
            width={"100%"}
            container
            columnGap={1}
            alignItems={
              belowWidth1440 || belowWidth1366 ? "flex-start" : "center"
            }
          >
            <FmdGoodOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
            <Typography
              variant="body14PX500FW"
              color="neutral.90"
              sx={{
                flex: 1,
                wordBreak: "break-word",
              }}
            >
              4517 Washington Ave. Manchester, Kentucky 39495
            </Typography>
          </Grid>
          <Grid
            width={"100%"}
            container
            columnGap={1}
            alignItems={
              belowWidth1440 || belowWidth1366 ? "flex-start" : "center"
            }
          >
            <VaccinesOutlinedIcon sx={{ fontSize: "20px", color: "#74797B" }} />
            <Typography
              variant="body14PX500FW"
              color="neutral.90"
              sx={{
                flex: 1,
                wordBreak: "break-word",
              }}
            >
              Heart Center Hospital
            </Typography>
          </Grid>
        </Grid>
        <Grid
          width={"15%"}
          container
          flexDirection={"column"}
          rowGap={2}
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
        <Grid container flexDirection={"column"} rowGap={2.5} width={"18%"}>
          <Grid
            container
            width={"100%"}
            bgcolor={"#FFFF"}
            p={2}
            borderRadius={2}
            border={1}
            borderColor="#E7E7E7"
            columnGap={1}
            alignItems="center"
          >
            <Grid
              bgcolor={"black"}
              width={"5px"}
              height={"5px"}
              borderRadius={"50%"}
              mb={0.5}
            ></Grid>
            <Typography
              variant="body16PX400FW"
              color="neutral.90"
              sx={{
                flex: 1,
                wordBreak: "break-word",
              }}
            >
              Average Glucose : 120 mg/dL
            </Typography>
          </Grid>
          <Grid
            container
            width={"100%"}
            bgcolor={"#FFFF"}
            p={2}
            borderRadius={2}
            border={1}
            borderColor="#E7E7E7"
            columnGap={1}
            alignItems="center"
          >
            <Grid
              bgcolor={"black"}
              width={"5px"}
              height={"5px"}
              borderRadius={"50%"}
              mb={0.5}
            ></Grid>
            <Typography variant="body16PX400FW" color="neutral.90">
              GMI (%) : 6.8 %
            </Typography>
          </Grid>
          <Grid
            container
            width={"100%"}
            bgcolor={"#FFFF"}
            p={2}
            borderRadius={2}
            border={1}
            borderColor="#E7E7E7"
            alignItems="center"
            columnGap={1}
          >
            <Grid
              bgcolor={"black"}
              width={"5px"}
              height={"5px"}
              borderRadius={"50%"}
              mb={0.5}
            ></Grid>
            <Typography variant="body16PX400FW" color="neutral.90">
              Glucose Variability: 18.2 %
            </Typography>
          </Grid>
        </Grid>
        <Grid
          width={"28%"}
          border={1}
          borderColor={"#E7E7E7"}
          bgcolor={"#FFFF"}
          p={1.5}
          borderRadius={3}
          flexDirection={"column"}
          rowGap={1}
          container
        >
          <Grid
            container
            width={"100%"}
            justifyContent={"center"}
            columnGap={1}
            alignItems="center"
          >
            <Grid
              container
              border={"1px solid #C9CBCC"}
              borderRadius={2}
              height={"35px"}
              width={"35px"}
              alignItems="center"
              justifyContent="center"
              onClick={handlePreviousMonth}
              sx={{ cursor: "pointer", "&:hover": { bgcolor: "#F5F5F5" } }}
            >
              <ArrowBackOutlinedIcon
                sx={{ fontSize: "22px", color: "#343330" }}
              />
            </Grid>
            <Typography variant="bodyMedium" color="neutral.90">
              {getMonthStartAndEnd(currentDate)}
            </Typography>
            <Grid
              container
              border={"1px solid #C9CBCC"}
              borderRadius={2}
              height={"35px"}
              width={"35px"}
              alignItems="center"
              justifyContent="center"
              onClick={handleNextMonth}
              sx={{ cursor: "pointer", "&:hover": { bgcolor: "#F5F5F5" } }}
            >
              <ArrowForwardOutlinedIcon
                sx={{ fontSize: "22px", color: "#343330" }}
              />
            </Grid>
          </Grid>
          <Grid
            width={"100%"}
            container
            columnGap={1}
            alignItems="center"
            borderRadius={2}
          >
            <CommonStatusChip
              value="04/30 Days"
              sx={{
                backgroundColor: theme.palette.positive?.[5],
                color: theme.palette.positive?.[60],
                flexShrink: 0,
              }}
            />
            <Divider orientation="vertical" flexItem sx={{ height: "20px" }} />
            <Grid container flex={1} alignItems="center">
              <BorderLinearProgress variant="determinate" value={50} />
            </Grid>
          </Grid>
          <Divider orientation="horizontal" />
          <Grid width={"100%"} container columnGap={1} alignItems="center">
            <Typography variant="body16PX500FW" color="neutral.90">
              Interactions
            </Typography>
            <Divider orientation="vertical" flexItem sx={{ height: "auto" }} />
            <Grid flexDirection={"column"} rowGap={0.2} container flex={1}>
              <Typography variant="body16PX500FW" color="neutral.90">
                Total Interaction Time : {formatTime(displayValue)}
              </Typography>
              <Box sx={{ width: "100%", px: 0.5 }}>
                <CustomTimeSlider
                  aria-label="Interaction Time"
                  value={displayValue}
                  min={10}
                  max={60}
                  step={null}
                  marks={timeMarks}
                  valueLabelDisplay="off"
                  disabled
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          width={"12%"}
          border={"1px solid #E7E7E7"}
          borderRadius={3}
          justifyContent={"center"}
          alignItems={"center"}
          p={1}
          bgcolor={"#FFFF"}
          container
        >
          <PatientTimer />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PatientDemographics;
