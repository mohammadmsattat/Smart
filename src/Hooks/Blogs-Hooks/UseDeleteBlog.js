import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBlog } from "../../Store/Requests/BlogsRequests";

export const UseDeleteBlog = () => {
  const dispatch = useDispatch();

  //show delete model
  const [show, setshow] = useState("none");
  const handleClose = () => setshow("none");
  const handleShow = () => setshow("");

  //get data from store
  const response = useSelector((state) => state.BlogsSlice.delete);
  const DeleteLoading = useSelector((state) => state.BlogsSlice.DeleteLoading);

  //handel delete
  const SubmitDelete = (id) => {
    dispatch(DeleteBlog(id));
    setshow("none");
  };

  useEffect(() => {
    if (DeleteLoading === false) {
      if (response.status === 204) {
        toast.success("blog deleted successfully");
        window.location.reload(false);
      } else {
      }
    }
  }, [DeleteLoading]);

  return {response, SubmitDelete, show, setshow, handleClose, handleShow};
};
