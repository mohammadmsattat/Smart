import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllPartners } from "../../Store/Requests/PartnersRequests";

export const UseGetAllPartners = () => {
  const [Partner, setpartner] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllPartners());
  }, []);

  //get data from store
  const response = useSelector((state) => state.PartnerSlice.partners);
  const Loading = useSelector((state) => state.PartnerSlice.GetAllLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setpartner(response.data.data);
      } else {
        setpartner([]);
      }
    }
  }, [Loading]);

  return [Partner];
};
