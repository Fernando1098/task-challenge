import { dialogCloseSubject$ } from "../components/custom-dialog/CustomDialog.tsx";

export const handleCloseModal = (time: number) => {
  setTimeout(() => {
    dialogCloseSubject$.setSubject = true;
  }, time);
};
