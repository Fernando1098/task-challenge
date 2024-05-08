import "../../App.css";
import {  Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { LinksModel } from "./models/home.model.ts";
import { List, TaskAlt } from "@mui/icons-material";
import CardItem from "./components/card-item/CardItem.tsx";

function App() {
  const navigate = useNavigate();
  const cardButtonsList: LinksModel[] = [
    {
      label: "Tasks",
      url: "/tasks",
      icon: <TaskAlt sx={{ color: "#1e88e5", fontSize: 30 }} />,
    },
    {
      label: "List",
      url: "/faker-list",
      icon: <List sx={{ color: "#1e88e5", fontSize: 30 }} />,
    },
  ];

  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      sx={{ height: "100vh", alignItems: "center" }}
    >
      {cardButtonsList.map((card) => (
        <CardItem card={card} navigate={navigate} key={card.label} />
      ))}
    </Grid>
  );
}

export default App;
