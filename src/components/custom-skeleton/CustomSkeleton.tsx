import { Card, CardContent, Skeleton } from "@mui/material";

interface Props {
  size: number;
}
const CustomSkeleton = ({ size }: Props) => {
  const items = new Array(size).fill(0);

  return (
    <>
      {items.map(() => (
        <Card sx={{ mt: 2 }} key={Math.floor(Math.random() * 1999999)}>
          <CardContent sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="text" width="70%" height={20} />
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default CustomSkeleton;
