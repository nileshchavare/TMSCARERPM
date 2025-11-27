import { useRef, useState, useMemo } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { Box, Button, Grid } from "@mui/material";
import DrawerBody from "../components/ui/DrawerBody";
import { stylesOfFooter } from "../components/ui/MainDrawer";
import CustomAutoComplete from "../components/common-components/custom-auto-complete/custom-auto-complete";
import CustomCheckBox, { type CheckedArray } from "../components/common-components/custom-checkbox/custom-checkbox";
import { allClinic } from "../features/admin/settings/DummyData/dummy";
import type { CustomAutoCompleteOptions } from "../components/common-components/custom-auto-complete/custom-auto-complete";

interface ClinicForm {
    checkedClinics: string[];
}

const AssignClinic = ({ onClose }: { onClose?: () => void }) => {
    const footerRef = useRef<HTMLDivElement>(null);
    const [searchQuery, setSearchQuery] = useState("");

    const [checkboxOptions, setCheckboxOptions] = useState<CheckedArray[]>(
        allClinic.map((clinic) => ({
            key: clinic.id,
            label: clinic.name,
            checked: false,
        }))
    );

    const { handleSubmit, control } = useForm<ClinicForm>({
        defaultValues: { checkedClinics: [] },
        mode: "onChange",
    });

    // Filter clinics based on search query for autocomplete
    const filteredClinics = useMemo<CustomAutoCompleteOptions[]>(() => {
        if (!searchQuery || searchQuery.length < 2) {
            return allClinic.map((clinic) => ({
                key: clinic.id,
                value: clinic.name,
            }));
        }

        const searchLower = searchQuery.toLowerCase();
        return allClinic
            .filter((clinic) => clinic.name.toLowerCase().includes(searchLower))
            .map((clinic) => ({
                key: clinic.id,
                value: clinic.name,
            }));
    }, [searchQuery]);

    // Filter visible checkboxes based on search query
    const visibleCheckboxOptions = useMemo(() => {
        if (!searchQuery || searchQuery.length < 2) {
            return checkboxOptions;
        }

        const searchLower = searchQuery.toLowerCase();
        return checkboxOptions.filter((opt) =>
            opt.label?.toLowerCase().includes(searchLower)
        );
    }, [checkboxOptions, searchQuery]);

    const handleSearch = (text: string) => {
        setSearchQuery(text);
    };

    // When user checks/unchecks a box
    const handleCheckboxChange = (updated: CheckedArray[]) => {
        setCheckboxOptions(updated);
    };

    // Submit handler
    const onSubmit: SubmitHandler<ClinicForm> = () => {
        const selectedClinicIds = checkboxOptions
            .filter((opt) => opt.checked && opt.key !== "ALL")
            .map((opt) => opt.key);

        console.log("SELECTED CLINIC IDs:", selectedClinicIds);

        const selectedClinicDetails = allClinic.filter((clinic) =>
            selectedClinicIds.includes(clinic.id)
        );

        console.log("SELECTED CLINIC DETAILS:", selectedClinicDetails);
    };

    return (
        <DrawerBody padding="16px 20px" offset={footerRef?.current?.offsetHeight} gap={1}>
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* 🔍 SEARCH FIELD */}
                <Controller
                    name="checkedClinics"
                    control={control}
                    render={() => (
                        <CustomAutoComplete
                            options={filteredClinics}
                            value=""
                            onChange={() => { }}
                            placeholder="Search & Select Clinic"
                            onDebounceCall={handleSearch}
                            hasStartSearchIcon
                            bgWhite
                        />
                    )}
                />

                {/* CHECKBOX LIST */}
                <Box
                    mt="6px"
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

                {/* FOOTER */}
                <Box ref={footerRef} sx={stylesOfFooter}>
                    <Grid container justifyContent={"flex-end"} columnGap={2}>
                        <Button variant="outlined" onClick={onClose}>Cancel</Button>
                        <Button variant="contained" type="submit">Save</Button>
                    </Grid>
                </Box>

            </form>
        </DrawerBody>
    );
};

export default AssignClinic;
