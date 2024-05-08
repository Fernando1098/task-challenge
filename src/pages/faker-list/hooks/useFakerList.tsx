import { useEffect, useState } from "react";
import { FakerListModel } from "../models/faker-list.model.ts";
import { getFakerList } from "../services/faker-list.service.ts";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const useFakerList = () => {
  const [fakerList, setFakerList] = useState<FakerListModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function getAllFakerList() {
      setIsLoading(true);
      await getFakerList()
        .then((response) => {
          setFakerList(response);
          setTimeout(() => {
            setIsLoading(false);
          }, 1500);
        })
        .catch(() => {
          setIsLoading(false);
          toast.error("error when obtaining the list of data");
        });
    }
    getAllFakerList();
  }, []);

  return { isLoading, fakerList, navigate };
};
