import { Grid } from "@mui/material";
import CareTeamList from "./care-team-common-component";
import { useState } from "react";
import AssignedPatientList from "./assign-patient-list";
import Split from "react-split";
import { assignedClinics, patientsData, peopleList } from "../settings/DummyData/dummy";


const CareTeam = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedClinicIndex, setSelectedClinicIndex] = useState(0);
  const [splitSizes] = useState([15, 15, 75]);

  const clinicsForSelectedPerson = assignedClinics
    .filter((clinic) => clinic.personId === peopleList[selectedIndex].id)
    .map((clinic) => ({
      id: clinic.id,
      name: clinic.clinicName,
      count: clinic.count
    }));

  const selectedClinic =
    clinicsForSelectedPerson[selectedClinicIndex] || null;

  const patientsForSelectedClinic = selectedClinic
    ? patientsData.filter((p) => p.clinicId === selectedClinic.id)
    : [];

  return (
    <Grid container width={"100%"} height={"100%"} flexWrap={"nowrap"} bgcolor={"#F5F6F8"} >
      <Split
        key="three-pane-split"
        style={{ width: "100%", height: "100%", display: "flex" }}
        sizes={splitSizes}
        minSize={200}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
      >
        {/*  Left Side Fax List  */}
        <Grid
          container
          minWidth={'250px'}
          bgcolor={"white"}
          height={"100%"}
          maxHeight={"100%"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          borderRadius={1}
        >
          <CareTeamList
            title="Care Team Members"
            listData={peopleList.map((p) => ({
              id: p.id,
              name: p.name,
              count: p.count,
            }))}
            selectedIndex={selectedIndex}
            onItemClick={setSelectedIndex}
            onAddClick={() => console.log("Add Member")}
          />
        </Grid>
        {/*  Middle - Detailed Fax View  */}
        <Grid
          container
          bgcolor={"white"}
          minWidth={'250px'}
          height={"100%"}
          maxHeight={"100%"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          borderRadius={1}
        >
          <CareTeamList
            title="Clinics"
            listData={clinicsForSelectedPerson}
            selectedIndex={selectedClinicIndex}
            onItemClick={(index) => setSelectedClinicIndex(index)}
            onAddClick={() => console.log("Add Clinic")}
            onIconClick={() => console.log('Icon Click')}
          />
        </Grid>
        {/*  Right Side - Process Document  */}
        <Grid container
          bgcolor={"white"}
          height={"100%"}
          maxHeight={"100%"}
          flexDirection={"column"}
          flexWrap={"nowrap"}
          borderRadius={1}>
          <AssignedPatientList patients={patientsForSelectedClinic} />
        </Grid>
      </Split>
    </Grid>

  );
};

export default CareTeam;
