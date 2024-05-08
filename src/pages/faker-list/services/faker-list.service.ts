import { FakerListModel } from "../models/faker-list.model.ts";
import axios from "axios";

export const getFakerList = async (): Promise<FakerListModel[]> => {
  return await axios.get("https://6172cfe5110a740017222e2b.mockapi.io/elements").then((response) => {
    return response.data;
  });
};
