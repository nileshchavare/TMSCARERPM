import { Grid } from "@mui/material";
import CareTeamList from "./care-team-common-component";
import { useState } from "react";
import AssignedPatientList from "./assign-patient-list";
import Split from "react-split";
import { assignedClinics, patientsData, peopleList } from "../settings/DummyData/dummy";
import MainDrawer from "../../../components/ui/MainDrawer";
import { useDrawer } from "../../../hooks/useDrawer";
import AssignPatient from "../../../forms/assign-patient-form";
import AddProviderForm from "../../../forms/provider-form";
import AssignClinic from "../../../forms/assign-clinic-form.tsx";
import AddClinicForm from "../../../forms/clinic-form";


const CareTeam = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedClinicIndex, setSelectedClinicIndex] = useState(0);
  const [splitSizes] = useState([15, 15, 75]);
  const {
    open: openDrawer,
    close: closeDrawer,
    content: contentDrawer,
  } = useDrawer();
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

  const DrawerContent = ({ identifier, onClose }: { identifier: string, onClose?: () => void }) => {
    if (identifier === "drawer-assign-patient") {
      return <AssignPatient onClose={onClose} />;
    }
    if (identifier === "drawer-add-provider") {
      return <AddProviderForm onClose={onClose} />;
    }
    if (identifier === "drawer-assign-clinic") {
      return <AssignClinic onClose={onClose} />;
    }
    if (identifier === "drawer-add-clinic") {
      return <AddClinicForm onClose={onClose} />;
    }
  }

  const openAddClinic = () => {
    openDrawer({
      identifier: "drawer-add-clinic",
      title: "Add Clinic",
    });
  };

  const openAssignClinic = () => {
    openDrawer({
      identifier: "drawer-assign-clinic",
      title: "Assign Clinic",
    });
  };

  const openAssignPatient = () => {
    openDrawer({
      identifier: "drawer-assign-patient",
      title: "Assign Patient",
    });
  };

  const openAddProvider = () => {
    openDrawer({
      identifier: "drawer-add-provider",
      title: "Add Provider",
    });
  };
  return (
    <>
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
              onAddClick={openAddProvider}
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
              onAddClick={openAddClinic}
              onIconClick={openAssignClinic}
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
            <AssignedPatientList patients={patientsForSelectedClinic} openAssignPatient={openAssignPatient} />
          </Grid>
        </Split>
      </Grid>
      <MainDrawer
        drawerWidth="700px"
        anchor="right"
        showMandatoryIndicator
        content={
          <DrawerContent
            onClose={closeDrawer}
            identifier={contentDrawer.identifier ?? ""}
          />
        }
      />

    </>
  );
};

export default CareTeam;
