import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllTeam } from "../../Store/Requests/TeamRequests";

export const UseGetAllEmployees = () => {
  const [Team, setTeam] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllTeam());
  }, []);

  //get data from store
  const response = useSelector((state) => state.TeamSlice.Team);
  const GetLoading = useSelector((state) => state.TeamSlice.GetAllLoading);

  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setTeam(response.data.data);
      } else {
        setTeam([]);
      }
    }
  }, [GetLoading]);

  return [Team];
};
