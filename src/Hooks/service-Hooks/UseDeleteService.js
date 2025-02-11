import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DeleteOneService } from "../../Store/Requests/ServicesRequestes";
import { useDispatch, useSelector } from "react-redux";

export const UseDeleteOneSrevice = () => {
  const dispatch = useDispatch();

  //show delete model
  const [show, setshow] = useState("none");
  const handleClose = () => setshow("none");
  const handleShow = () => setshow("");

  //get data from store
  const response = useSelector((state) => state.ServicesSlice.delete);
  const DeleteLoading = useSelector(
    (state) => state.ServicesSlice.deleteLoading
  );

  //handel delete
  const SubmitDelete = (id) => {
    dispatch(DeleteOneService(id));
    setshow("none");
  };

  useEffect(() => {
    if (DeleteLoading === false) {
      if (response.status === 204) {
        toast.success("service deleted successfully");
        window.location.reload(false);
      } else {
        // setServices([])
      }
    }
  }, [DeleteLoading]);

  return { response, SubmitDelete, show, setshow, handleClose, handleShow };
};
