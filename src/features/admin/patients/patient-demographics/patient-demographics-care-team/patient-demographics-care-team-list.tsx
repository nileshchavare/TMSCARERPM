import { Button, Grid, Typography, useMediaQuery, type Theme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { dataGridStyles } from '../../../../../styles/dataGridStyles';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import { patientCareTeamRows } from '../../../settings/DummyData/dummy';
import type { PatientCareTeamRow } from '../../../Tasks/constant';
import {
  RowActionMenu,
  type RowActionOption,
} from '../../../../../components/common-components/table/RowActionDrawer';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { useDrawer } from '../../../../../hooks/useDrawer';
import MainDrawer from '../../../../../components/ui/MainDrawer';
import CustomAutoComplete from '../../../../../components/common-components/custom-auto-complete/custom-auto-complete';
import PatientDemographicsCareTeamForm from '../../../../../forms/patient-demographics-care-team-form';

const DrawerContent = ({ identifier, onClose }: { identifier: string; onClose?: () => void }) => {
  if (identifier === 'drawer-add-care-team-patient-demographics') {
    return <PatientDemographicsCareTeamForm onClose={onClose} />;
  }
  return <></>;
};

const PatientDemographicsCareTeamList = () => {
  const belowHeight768 = useMediaQuery('(max-height:768px)');
  const belowHeight900 = useMediaQuery('(max-height:900px)');

  const { open: openDrawer, close: closeDrawer, content: contentDrawer } = useDrawer();

  const handleDrawer = {
    addCareTeamPatientDemographics: (action: string) => {
      openDrawer({
        title: `${action} Care Team`,
        identifier: 'drawer-add-care-team-patient-demographics',
      });
    },
  };

  const patientCareTeamColumns: GridColDef<(typeof patientCareTeamRows)[number]>[] = [
    {
      field: 'name',
      headerName: 'Name',
      flex: 1,
    },
    {
      field: 'role',
      headerName: 'Role',
      flex: 1,
    },
    {
      field: 'specialty',
      headerName: 'Specialty',
      flex: 1,
    },
    {
      field: 'contactNumber',
      headerName: 'Contact Number',
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Action',
      minWidth: 80,
      sortable: false,
      filterable: false,
      renderCell: params => <RowActionMenu row={params.row} options={actionOptions} />,
    },
  ];

  const onUnassign = () => {};

  const onDelete = () => {};

  const actionOptions: RowActionOption<PatientCareTeamRow>[] = [
    {
      key: 'unassign',
      label: 'Unassign',
      icon: <CancelOutlinedIcon fontSize="small" />,
      onClick: onUnassign,
    },
    {
      key: 'delete',
      label: 'Delete',
      icon: <DeleteOutlinedIcon fontSize="small" />,
      onClick: onDelete,
    },
  ];

  return (
    <Grid container width={'100%'} flexDirection={'column'} rowGap={2}>
      <Grid container width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="body18PX600FW">Care Team</Typography>
        <Grid container columnGap={1} width={'50%'} justifyContent={'flex-end'}>
          <Grid width={'250px'}>
            <CustomAutoComplete
              options={[]}
              value={''}
              onChange={() => {}}
              placeholder="Search Name"
              onDebounceCall={() => {}}
              hasStartSearchIcon
              bgWhite
            />
          </Grid>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => handleDrawer.addCareTeamPatientDemographics('Assign')}
            sx={() => ({ width: '160px' })}
          >
            Assign Care Team
          </Button>
        </Grid>
      </Grid>
      <Grid container sx={{ width: '100%' }}>
        <DataGrid
          rows={patientCareTeamRows}
          columns={patientCareTeamColumns}
          pageSizeOptions={[5, 10, 15]}
          sx={theme => ({
            ...(dataGridStyles as (theme: Theme) => Record<string, unknown>)(theme),
            height: belowHeight768 ? '250px' : belowHeight900 ? '400px' : '631px',
          })}
        />
      </Grid>
      <MainDrawer
        drawerWidth="700px"
        anchor="right"
        showMandatoryIndicator
        content={
          <DrawerContent onClose={closeDrawer} identifier={contentDrawer.identifier ?? ''} />
        }
      />
    </Grid>
  );
};
export default PatientDemographicsCareTeamList;
