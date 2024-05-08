import { dialogOpenSubject$ } from "../../../components/custom-dialog/CustomDialog.tsx";
import { useAppSelector } from "../../../store";
import { useNavigate } from "react-router-dom";

export const useTasks = () => {
  const tasks = useAppSelector((state) => state.task.tasks);
  const navigate = useNavigate();
  function openFormDialog() {
    dialogOpenSubject$.setSubject = true;
  }

  return { openFormDialog, tasks, navigate };
};
