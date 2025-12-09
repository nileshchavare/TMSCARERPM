import { useEffect, useState } from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import LockClockOutlinedIcon from "@mui/icons-material/LockClockOutlined";

const PatientTimer = () => {
  const belowWidth1366 = useMediaQuery("(max-width:1366px)");
  const belowWidth1440 = useMediaQuery("(max-width:1440px)");

  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    /***  Start timer when component mounts */
    const startTime = Date.now();
    const interval = setInterval(() => {
      const currentTime = Date.now();
      const elapsed = Math.floor((currentTime - startTime) / 1000); // elapsed time in seconds
      setElapsedTime(elapsed);
    }, 1000);

    /***  Cleanup interval on unmount */
    return () => clearInterval(interval);
  }, []);

  /***  Format time as HH:MM:SS */
  const formatTime = (totalSeconds: number): string => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  return (
    <Grid
      container
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      rowGap={1}
      width={belowWidth1440 || belowWidth1366 ? "100%" : "60%"}
    >
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={0.5}
        width={"100%"}
      >
        <Typography variant="h3Medium" color="neutral.90">
          {formatTime(elapsedTime)}
        </Typography>
      </Grid>
      <Grid container width={"100%"} justifyContent={"space-between"} p={1}>
        <Grid
          container
          border={"1px solid #C9CBCC"}
          p={0.5}
          borderRadius={1.5}
          sx={{ cursor: "pointer", "&:hover": { bgcolor: "#F5F5F5" } }}
        >
          <PauseOutlinedIcon
            sx={{
              fontSize: "23px",
              color: "#74797B",
            }}
          />
        </Grid>
        <Grid
          container
          border={"1px solid #C9CBCC"}
          p={0.5}
          borderRadius={1.5}
          sx={{ cursor: "pointer", "&:hover": { bgcolor: "#F5F5F5" } }}
        >
          <ReplaySharpIcon sx={{ fontSize: "23px", color: "#74797B" }} />
        </Grid>
        <Grid
          container
          border={"1px solid #C9CBCC"}
          borderRadius={1.5}
          p={0.5}
          sx={{ cursor: "pointer", "&:hover": { bgcolor: "#F5F5F5" } }}
        >
          <LockClockOutlinedIcon sx={{ fontSize: "23px", color: "#74797B" }} />
        </Grid>
      </Grid>
    </Grid>
  );
};
export default PatientTimer;
