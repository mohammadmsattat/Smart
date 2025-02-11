import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneOffice } from "../../Store/Requests/OfficeRequests";

export const UseGetOneOffice = (id) => {
  const [office, setOffice] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneOffice(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.getOne);
  const Loading = useSelector((state) => state.OfficeSlice.GetOneLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setOffice(response.data.data);
      } else {
        setOffice([]);
      }
    }
  }, [Loading]);

  return [office];
};
