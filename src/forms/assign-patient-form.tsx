import { useLayoutEffect, useMemo, useRef, useState } from "react";
import DrawerBody from "../components/ui/DrawerBody";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Box, Button, Grid } from "@mui/material";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import CustomAutoComplete, {
  type CustomAutoCompleteOptions,
} from "../components/common-components/custom-auto-complete/custom-auto-complete";
import CustomCheckBox, {
  type CheckedArray,
} from "../components/common-components/custom-checkbox/custom-checkbox";
import { allPatients } from "../features/admin/settings/DummyData/dummy";

interface PatientForm {
  checkedPatients: string[];
}

const AssignPatient = ({ onClose }: { onClose?: () => void }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [offset, setOffset] = useState(0);

  const [checkboxOptions, setCheckboxOptions] = useState<CheckedArray[]>(
    allPatients.map((p) => ({
      key: p.key,
      label: p.value,
      checked: false,
    })),
  );

  const { handleSubmit, control } = useForm<PatientForm>({
    defaultValues: { checkedPatients: [] },
    mode: "onChange",
  });

  // Filter clinics based on search query for autocomplete
  const filteredPatients = useMemo<CustomAutoCompleteOptions[]>(() => {
    if (!searchQuery || searchQuery.length < 2) {
      return allPatients.map((patient) => ({
        key: patient.key,
        value: patient.value,
      }));
    }

    const searchLower = searchQuery.toLowerCase();
    return allPatients
      .filter((patient) => patient.value.toLowerCase().includes(searchLower))
      .map((patient) => ({
        key: patient.key,
        value: patient.value,
      }));
  }, [searchQuery]);

  // Filter visible checkboxes based on search query
  const visibleCheckboxOptions = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) {
      return checkboxOptions;
    }

    const searchLower = searchQuery.toLowerCase();
    return checkboxOptions.filter((opt) =>
      opt.label?.toLowerCase().includes(searchLower),
    );
  }, [checkboxOptions, searchQuery]);

  useLayoutEffect(() => {
    if (footerRef.current) {
      setOffset(footerRef.current.offsetHeight);
    }
  }, []);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
  };

  // ✔ When user checks/unchecks a box
  const handleCheckboxChange = (updated: CheckedArray[]) => {
    setCheckboxOptions(updated);
  };

  // SAVE BUTTON
  const onSubmit: SubmitHandler<PatientForm> = () => {
    // const selectedPatients = checkboxOptions
    //     .filter((opt) => opt.checked && opt.key !== "ALL")
    //     .map((opt) => opt.key);
    // const fullPatientDetails = allPatients.filter((p) =>
    //     selectedPatients.includes(p.key)
    // );
  };

  return (
    <DrawerBody padding="16px 20px" offset={offset} gap={1}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 🔍 SEARCH FIELD */}
        <Controller
          name="checkedPatients"
          control={control}
          render={() => (
            <CustomAutoComplete
              options={filteredPatients}
              value={""}
              onChange={() => {}}
              placeholder="Search & Select patient"
              onDebounceCall={handleSearch}
              hasStartSearchIcon
              bgWhite
            />
          )}
        />

        <Box
          mt={"6px"}
          sx={(theme) => ({
            border: "1px solid",
            borderColor: theme.palette.neutral[5],
            p: "1rem",
            gap: "1rem",
            borderRadius: "6px",
          })}
        >
          <CustomCheckBox
            oriantation="vertical"
            options={visibleCheckboxOptions}
            onChange={handleCheckboxChange}
            enableSelectAll
          />
        </Box>

        <Box ref={footerRef} sx={stylesOfFooter}>
          <Grid container justifyContent={"flex-end"} columnGap={2}>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Grid>
        </Box>
      </form>
    </DrawerBody>
  );
};

export default AssignPatient;
