import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneBlog } from "../../Store/Requests/BlogsRequests";

export const UseGetOneBlog = (id) => {
  const [blog, setBlog] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneBlog(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.BlogsSlice.getOne);
  const Loading = useSelector((state) => state.BlogsSlice.GetOneLoading);
  

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setBlog(response.data.data);
      } else {
        setBlog([]);
      }
    }
  }, [Loading]);

  return [blog];
};
