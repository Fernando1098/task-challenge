import { useFakerList } from "./hooks/useFakerList.tsx";
import { Box, Divider, Grid, Tooltip, Typography } from "@mui/material";
import ItemList from "./components/item-list/ItemList.tsx";
import CustomSkeleton from "../../components/custom-skeleton/CustomSkeleton.tsx";
import { ArrowBack } from "@mui/icons-material";

const FakerList = () => {
  const { fakerList, isLoading, navigate } = useFakerList();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={12} md={4} lg={3} xl={3}>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Tooltip title="Go back">
            <ArrowBack
              data-testid='go-back'
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
              }}
            />
          </Tooltip>
          <Typography sx={{ fontSize: 22, fontWeight: "bold", mb: 0.5 }}>
            Faker List
          </Typography>
        </Box>
        <Divider />
        {isLoading ? (
          <>
            <CustomSkeleton size={10} />
          </>
        ) : (
          <>
            {fakerList.map((item) => (
              <ItemList item={item} key={item.id} />
            ))}
          </>
        )}
      </Grid>
    </Grid>
  );
};

export default FakerList;
