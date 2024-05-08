import { ChangeEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const useFormNewTasks = () => {
  const [formData, setFormData] = useState({
    id: uuidv4(),
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return { handleChange, formData };
};
