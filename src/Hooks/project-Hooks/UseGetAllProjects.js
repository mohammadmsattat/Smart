import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllProjects } from "../../Store/Requests/ProjectsRequests";

export const UseGetAllProjects = () => {
  const [Projects, setProjects] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetAllProjects());
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

  return [Projects];
};
