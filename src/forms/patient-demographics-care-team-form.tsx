import { Controller, useForm, type SubmitHandler } from 'react-hook-form';
import DrawerBody from '../components/ui/DrawerBody';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLayoutEffect, useRef, useState } from 'react';
import {
  patientDemographicsCareTeamSchema,
  type PatientDemographicsCareTeamFormValues,
} from './validations/schema';
import { Box, Button, Grid, Typography } from '@mui/material';
import { stylesOfFooter } from '../components/ui/MainDrawer';
import CustomLabel from '../components/common-components/custom-label/custom-label';
import DropDownForText from '../components/common-components/drop-dwon-for-text/drop-down-for-text';
import { errorStyle } from '../components/common-components/custom-input/widgets/custom-input-styles';
import CustomAutoComplete from '../components/common-components/custom-auto-complete/custom-auto-complete';
import CustomInput from '../components/common-components/custom-input/custom-input';

const PatientDemographicsCareTeamForm = ({ onClose }: { onClose?: () => void }) => {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setFooterHeight(footerRef.current.offsetHeight);
    }
  }, []);

  const defaultValues = {
    provider: '',
    role: '',
    specialty: '',
    contactNumber: '',
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientDemographicsCareTeamFormValues>({
    resolver: yupResolver(patientDemographicsCareTeamSchema),
    defaultValues,
  });

  const onSubmit: SubmitHandler<PatientDemographicsCareTeamFormValues> = () => {
    onClose?.();
  };

  const handleDrawerClose = () => {
    onClose?.();
  };
  return (
    <DrawerBody padding="16px 20px" offset={footerHeight} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel variant="body5Medium" label="Provider" color="neutral.60" isRequired />
            <Controller
              name="provider"
              control={control}
              render={({ field }) => (
                <CustomAutoComplete
                  options={[]}
                  value={field.value ?? ''}
                  onChange={() => {}}
                  placeholder="Search Provider"
                  onDebounceCall={() => {}}
                  hasStartSearchIcon
                  bgWhite
                  hasError={!!errors.provider}
                  errorMessage={errors.provider?.message}
                />
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel variant="body5Medium" label="Role" color="neutral.60" isRequired />
            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={[]}
                    value={field.value ?? ''}
                    onChange={e => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Role"
                  />
                  {errors.role && (
                    <Typography textAlign={'start'} sx={errorStyle} variant="caption">
                      {errors.role?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel variant="body5Medium" label="Specialty" color="neutral.60" isRequired />
            <Controller
              name="specialty"
              control={control}
              render={({ field }) => (
                <>
                  <DropDownForText
                    options={[]}
                    value={field.value ?? ''}
                    onChange={e => field.onChange(e.target.value)}
                    width="100%"
                    placeholder="Select Specialty"
                  />
                  {errors.specialty && (
                    <Typography textAlign={'start'} sx={errorStyle} variant="caption">
                      {errors.specialty?.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomLabel variant="body5Medium" label="Contact Number" color="neutral.60" />
            <Controller
              name="contactNumber"
              control={control}
              render={({ field }) => (
                <CustomInput
                  name="contactNumber"
                  placeholder="Enter Contact Number"
                  value={field.value ?? ''}
                  bgWhite
                  isNumeric
                  maxLength={10}
                />
              )}
            />
          </Grid>
        </Grid>
        <Box ref={footerRef} sx={stylesOfFooter}>
          <Grid container columnGap={1} justifyContent={'flex-end'}>
            <Grid>
              <Button onClick={handleDrawerClose} variant="outlined" type="button">
                <Typography variant="body14PX500FW">Cancel</Typography>
              </Button>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                type="submit"
                sx={{
                  padding: '10px 16px',
                }}
              >
                <Typography variant="body14PX500FW">{'Save'}</Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </DrawerBody>
  );
};
export default PatientDemographicsCareTeamForm;
