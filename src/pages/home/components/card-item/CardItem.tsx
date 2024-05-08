
import {Card, CardContent, Grid, Typography} from "@mui/material";
import {LinksModel} from "../../models/home.model.ts";
import {NavigateFunction} from "react-router-dom";

interface Props{
  card: LinksModel,
  navigate: NavigateFunction;
}
const CardItem = ({card, navigate}: Props) => {
  return (
    <Grid item xs={12} sm={12} md={3} lg={3} xl={2} >
      <Card
        sx={{
          height: "250px",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={() => navigate(card.url)}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ alignItems: "center" }}>
            {" "}
            {card.icon}
          </Typography>

          <Typography
            sx={{
              fontSize: 26,
              fontWeight: "bold",
              color: "primary.main",
              mt: 2,
            }}
          >
            {card.label}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CardItem;