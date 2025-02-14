import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllBlogs } from "../../Store/Requests/BlogsRequests";

export const UseGetAllBlogs = (page) => {
  const [blogs, setBlogs] = useState([]);
   const limit=4
  const dispatch = useDispatch();
  var url=""
  if(page>0)
  {
    url=`/api/v1/blogs?limit=${limit}&page=${page}`
  }
  else{
    url=`/api/v1/blogs`
  }

  useEffect(() => {
    dispatch(GetAllBlogs(url));
  }, []);

  const HndelPage = async({selected}) => {
    console.log(selected+1);
    url=`/api/v1/blogs?limit=${limit}&page=${selected+1}`
    
    await dispatch(GetAllBlogs(url));
    
}

  //get data from store
  const response = useSelector((state) => state.BlogsSlice.blogs);
  const GetLoading = useSelector((state) => state.BlogsSlice.GetAllLoading);

  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        setBlogs([]);
      }
    }
  }, [GetLoading]);

  return {blogs,HndelPage};
};
