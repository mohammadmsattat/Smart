import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOnePartner } from "../../Store/Requests/PartnersRequests";

export const UseGetOnePartner = (id) => {
  const [partner, setpartner] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOnePartner(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.PartnerSlice.getOne);
  const Loading = useSelector((state) => state.PartnerSlice.GetOneLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setpartner(response.data.data);
      } else {
        setpartner([]);
      }
    }
  }, [Loading]);

  return [partner];
};
