import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOneProject } from "../../Store/Requests/ProjectsRequests";

export const UseGetOneProject = (id) => {
  const [project, setproject] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetOneProject(id));
  }, []);

  //get data from store
  const response = useSelector((state) => state.ProjectsSlice.getoneproject);
  const Loading = useSelector((state) => state.ProjectsSlice.GetOneLoading);

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setproject(response.data.data);
      } else {
        setproject([]);
      }
    }
  }, [Loading]);

  return [project];
};
