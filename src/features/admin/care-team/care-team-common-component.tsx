import { Box, Button, Grid, List, ListItemButton, ListItemText, Typography } from "@mui/material";
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import AddIcon from '@mui/icons-material/Add';
import CommonNumberChip from "../../../components/common-components/common-status-chip/Common-Number-Chip";

interface ListItemType {
  id: number;
  name: string;
  count?: number;
}

interface CareTeamListProps {
  title: string;
  listData: ListItemType[];
  selectedIndex: number;
  onItemClick: (index: number) => void;
  onAddClick: () => void;
  onIconClick?: () => void;
}

const CareTeamList = ({
  title,
  listData,
  selectedIndex,
  onItemClick,
  onAddClick,
  onIconClick,
}: CareTeamListProps) => {
  return (
     <Grid container width={"100%"} height={"100%"} flexWrap={"nowrap"} bgcolor={"#FFFF"} >
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      maxWidth={'100%'}
      sx={{ border: "1px solid", borderColor: "neutral.5" ,borderBottom:'0px'}}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ p: "12px 16px" }}>
        <Typography variant="body16PX500FW" color="primary.80">
          {title}
        </Typography>

        <Box display="flex" gap={1}>
          {onIconClick && (
            <Button
              sx={(theme) => ({
                backgroundColor: theme.palette.primary[10],
                borderRadius: "4px",
                border: "1px solid",
                borderColor: theme.palette.primary[60],
                minWidth: "40px",
              })}
              onClick={onIconClick}
            >
              <PersonAddAlt1RoundedIcon fontSize="small" />
            </Button>
          )}

          <Button variant="contained" onClick={onAddClick} sx={{ minWidth: 40, }}>
            <AddIcon />
          </Button>
        </Box>
      </Box>

      <List sx={{padding:'0px'}} >
        {listData.map((item, index) => (
          <ListItemButton
            key={item.id}
            selected={selectedIndex === index}
            onClick={() => onItemClick(index)}
            sx={(theme)=>({
              border: "1px solid",
              borderColor: "neutral.5",
              bgcolor:"#FFFF",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              "&.Mui-selected": {
                backgroundColor: theme.palette.primary[20],
              },
            })}
          >
            <ListItemText
              primary={item.name}
              slotProps={{
                primary: {
                  sx: { fontSize: "14px", fontWeight: 500, color: "primary.80" },
                },
              }}
            />
            {item.count !== undefined && <CommonNumberChip label={item.count} size="small" />}
          </ListItemButton>
        ))}
      </List>
    </Box>
    </Grid>
  );
};

export default CareTeamList;
