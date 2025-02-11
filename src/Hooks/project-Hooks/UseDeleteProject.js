import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { DeleteProject } from "../../Store/Requests/ProjectsRequests";
import { useDispatch, useSelector } from "react-redux";

export const UseDeleteOneProject = () => {
  const dispatch = useDispatch();

  //show delete model
  const [show, setshow] = useState("none");
  const handleClose = () => setshow("none");
  const handleShow = () => setshow("");

  //get data from store
  const response = useSelector((state) => state.ProjectsSlice.deleteproject);
  const DeleteLoading = useSelector(
    (state) => state.ProjectsSlice.DeleteLoading
  );

  //handel delete
  const SubmitDelete = (id) => {
    dispatch(DeleteProject(id));
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

  return { response, SubmitDelete, show, setshow, handleClose, handleShow };
};
