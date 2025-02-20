import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProjects } from "../../Store/Requests/ProjectsRequests";

export const UseGetAllProjects = (cat) => {
  const [Projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  var url = "";

  if (cat) {
    url = `/api/v1/project?category=${cat}`;
  } else {
    url = "/api/v1/project";
  }

  useEffect(() => {
    dispatch(GetAllProjects(url));
  }, []);

  //get data from store
  const response = useSelector((state) => state.ProjectsSlice.Projects);
  const Loading = useSelector((state) => state.ProjectsSlice.GetAllLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setProjects(response.data.data);
      } else {
        setProjects([]);
      }
    }
  }, [Loading]);

  //slice data for home page
  let Data = Projects.slice(0, 6);

  return [Projects, Data];
};
