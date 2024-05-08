import { Box, Divider, Fab, Grid, Tooltip, Typography } from "@mui/material";
import { Add, ArrowBack, Error } from "@mui/icons-material";
import { useTasks } from "./hooks/useTasks.tsx";
import CustomDialog from "../../components/custom-dialog/CustomDialog.tsx";
import FormNewTasks from "./components/form-new-tasks/FormNewTasks.tsx";
import { Timeline } from "@mui/lab";
import TaskItem from "./components/task-item/TaskItem.tsx";

const Tasks = () => {
  const { openFormDialog, tasks, navigate } = useTasks();
  return (
    <Grid container justifyContent="center">
      <CustomDialog size="sm" title="Add new task">
        <FormNewTasks />
      </CustomDialog>
      <Grid item xs={12} sm={12} md={5} lg={4} xl={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: 1,
            alignItems: "center",
          }}
        >
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
            <Typography data-testid='tasks-title' sx={{ fontSize: 22, fontWeight: "bold" }}>
              Tasks
            </Typography>
          </Box>
          <Tooltip title="New Tasks">
            <Fab size="small" color="primary" onClick={openFormDialog}>
              <Add />
            </Fab>
          </Tooltip>
        </Box>
        <Divider />
        <Timeline>
          {tasks.length > 0 ? (
            <>
              {tasks.map((task) => (
                <TaskItem task={task} key={task.id} />
              ))}
            </>
          ) : (
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                color: "warning.main",
              }}
            >
              <Error /> No task has been assigned
            </Typography>
          )}
        </Timeline>
      </Grid>
    </Grid>
  );
};

export default Tasks;
