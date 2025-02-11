import { useEffect, useState } from "react";
import { DeletePartner } from "../../Store/Requests/PartnersRequests";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

export const UseDeleteOnePartner = () => {
  const dispatch = useDispatch();

  //show delete model
  const [show, setshow] = useState("none");
  const handleClose = () => setshow("none");
  const handleShow = () => setshow("");

  //get data from store
  const response = useSelector((state) => state.PartnerSlice.delete);
  const DeleteLoading = useSelector(
    (state) => state.PartnerSlice.DeleteLoading
  );

  //handel delete
  const SubmitDelete = (id) => {
    dispatch(DeletePartner(id));
    setshow("none");
  };

  useEffect(() => {
    if (DeleteLoading === false) {
      if (response.status === 204) {
        toast.success("service deleted successfully");
        window.location.reload(false);
      } else {
      }
    }
  }, [DeleteLoading]);

  return {response, SubmitDelete, show, setshow, handleClose, handleShow};
};
