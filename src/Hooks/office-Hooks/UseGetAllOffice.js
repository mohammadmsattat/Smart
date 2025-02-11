import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllOffices } from "../../Store/Requests/OfficeRequests";

export const UseGetAllOffice = () => {
  const [offices, setOffices] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllOffices());
  }, []);

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.offices);
  const GetLoading = useSelector((state) => state.OfficeSlice.GetAllLoading);

  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setOffices(response.data.data);
      } else {
        setOffices([]);
      }
    }
  }, [GetLoading]);

  return [offices];
};
