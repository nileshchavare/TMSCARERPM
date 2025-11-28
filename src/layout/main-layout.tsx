/* eslint-disable */
// import React, { useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { useLocation, useNavigate } from "react-router-dom";

import { Grid } from "@mui/system";

import Navbar from "../components/common-components/navbar/Navbar";

const MainLayout = (props: React.PropsWithChildren) => {
  // const navigate = useNavigate();
  // const location = useLocation();

  // useEffect(() => {}, [location]);

  // const callData = useSelector((state: any) => state.zoomCallDataReducer);

  // // Create a ref to hold the latest callData
  // const callDataRef = useRef(callData);

  // // Keep the ref updated with latest callData
  // useEffect(() => {
  //   callDataRef.current = callData;
  // }, [callData]);
  // useEffect(() => {
  //   function handleMessage(event: { data: { type: string } }) {
  //     const currentCallData = callDataRef.current;
  //     if (
  //       event.data &&
  //       event.data.type === "TRIGGER_VISIT_NOTE" &&
  //       currentCallData?.patientId &&
  //       currentCallData?.appointmentId
  //     ) {
  //       const targetPath = `/super-user/encounter/encounter-note/${currentCallData?.patientId}/${currentCallData?.appointmentId}`;
  //       // Check if we're already on the same path
  //       if (location.pathname === targetPath) {
  //         console.log("Already on target path, forcing reload");
  //         // Force reload by navigating away and back
  //         navigate("/super-user/encounter");
  //         setTimeout(() => {
  //           navigate(targetPath);
  //         }, 10);
  //       } else {
  //         navigate(targetPath);
  //       }
  //     }
  //   }
  //   window.addEventListener("message", handleMessage);
  //   return () => window.removeEventListener("message", handleMessage);
  // }, [navigate, location.pathname]);

  return (
      <Grid container height={"100vh"}>
        <Grid
          container
          flex={1}
          flexDirection={"column"}
          height={"100vh"}
          sx={{
            overflow: "auto",
            maxHeight: "100vh",
            transition: "all .2s",
            background: "#F5F6F8",
          }}
          flexWrap={"nowrap"}
        >
          <Navbar />
          <Grid container flex={1} justifyContent={"center"}>
            {props.children}
          </Grid>
        </Grid>
      </Grid>
  );
};

export default MainLayout;
