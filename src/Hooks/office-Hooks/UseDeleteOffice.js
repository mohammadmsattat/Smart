import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DeleteOffice } from "../../Store/Requests/OfficeRequests";
import { useDispatch, useSelector } from "react-redux";

export const UseDeleteOneOffice = () => {
  const dispatch = useDispatch();

  //show delete model
  const [show, setshow] = useState("none");
  const handleClose = () => setshow("none");
  const handleShow = () => setshow("");

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.delete);
  const DeleteLoading = useSelector((state) => state.OfficeSlice.DeleteLoading);

  //handel delete
  const SubmitDelete = (id) => {
    dispatch(DeleteOffice(id));
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
