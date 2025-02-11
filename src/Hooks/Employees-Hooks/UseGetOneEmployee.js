import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneEmployee } from "../../Store/Requests/TeamRequests";

export const UseGetOneEmployee = (id) => {
  const [employee, setemployee] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneEmployee(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.TeamSlice.getOneEmployee);
  const Loading = useSelector((state) => state.TeamSlice.GstOneLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setemployee(response.data.data);
      } else {
        setemployee([]);
      }
    }
  }, [Loading]);

  return [employee];
};
