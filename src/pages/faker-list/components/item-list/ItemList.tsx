import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { FakerListModel } from "../../models/faker-list.model.ts";

interface Props {
  item: FakerListModel;
}

const ItemList = ({ item }: Props) => {
  return (
    <Card
      sx={{
        mt: 2,
      }}
    >
      <CardContent sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar alt={item.name} src={item.avatar} />
        <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default ItemList;
