import { Box, FormControl, Grid, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Save } from "@mui/icons-material";
import { useFormNewTasks } from "./hooks/useFormNewTasks.tsx";
import { useAppDispatch } from "../../../../store";
import { FormEvent } from "react";
import { addTask } from "../../../../store/features/taskSlice.ts";
import { handleCloseModal } from "../../../../utils/handleCloseModal.ts";

const FormNewTasks = () => {
  const { handleChange, formData } = useFormNewTasks();
  const dispatch = useAppDispatch();
  return (
    <Box
      component="form"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        dispatch(addTask(formData));
        handleCloseModal(0);
      }}
    >
      <Grid container sx={{ p: 2 }}>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <FormControl fullWidth sx={{ mt: 1 }}>
            <TextField
              inputProps={{
                "data-testid": "description-input",
              }}
              label="Description"
              name="description"
              required
              onChange={handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box sx={{ mt: 2.5, display: "flex", justifyContent: "center" }}>
        <LoadingButton
          loading={false}
          loadingIndicator="Saving..."
          variant="outlined"
          startIcon={<Save />}
          type="submit"
        >
          Save Task
        </LoadingButton>
      </Box>
    </Box>
  );
};

export default FormNewTasks;
