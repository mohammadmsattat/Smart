import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllServices } from "../../Store/Requests/ServicesRequestes";

export const UseGetAllServices = () => {
  const [Services, setServices] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllServices());
  }, []);

  //get data from store
  const response = useSelector((state) => state.ServicesSlice.services);
  const GetLoading = useSelector((state) => state.ServicesSlice.GetAllLoading);

  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setServices(response.data.data);
      } else {
        setServices([]);
      }
    }
  }, [GetLoading]);

  return [Services];
};
