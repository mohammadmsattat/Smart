import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneService } from "../../Store/Requests/ServicesRequestes";

export const UseGetOneService = (id) => {
  const [Service, setService] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneService(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.ServicesSlice.getOneService);
  const Loading = useSelector((state) => state.ServicesSlice.getOneLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setService(response.data.data);
      } else {
        setService([]);
      }
    }
  }, [Loading]);

  return [Service];
};
