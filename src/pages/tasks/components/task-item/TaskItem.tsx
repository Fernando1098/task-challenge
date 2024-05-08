import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import { blue } from "@mui/material/colors";
import { TaskModel } from "../../../../models/task.model.ts";

interface Props {
  task: TaskModel;
}
const TaskItem = ({ task }: Props) => {
  return (
    <TimelineItem
      sx={{
        "&:before": {
          display: "none",
        },
      }}
    >
      <TimelineSeparator>
        <TimelineDot />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Card sx={{ mt: 2, backgroundColor: blue[300], color: "white" }}>
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography>Description: {task.description}</Typography>
            <Box sx={{ mt: 2, textAlign: "right" }}>
              <Chip
                label="In Progress"
                sx={{ backgroundColor: blue[600], color: "white" }}
              />
            </Box>
          </CardContent>
        </Card>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TaskItem;
