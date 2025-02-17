import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  GetOneProject,
  UpdateOneProject,
} from "../../Store/Requests/ProjectsRequests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UseUpdateProject = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //service  variabels
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [commingSoon, setCommingSoon] = useState(false);
  const [category, setcategory] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneProject(id));
    };
    run();
  }, []);

  const project = useSelector((state) => state.ProjectsSlice.getoneproject);

  useEffect(() => {
    if (project.data) {
      setImg(project.data.data.imageCover);
      setName(project.data.data.name);
      setDescription(project.data.data.description);
      setCommingSoon(project.data.data.commingSoon);
      setcategory(project.data.data.category);
    }
  }, [project]);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //to change name state
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  //to change description state
  const onChangeDecription = (event) => {
    setDescription(event.target.value);
  };
  //to change file state
  const onChangeImage = (event) => {
    onImageChange(event);
  };

  //check box clicke
  const onchecked = () => {
    if (commingSoon === false) {
      setCommingSoon(true);
    } else {
      setCommingSoon(false);
    }
  };
  //get data from store
  const response = useSelector((state) => state.ProjectsSlice.updateProject);
  const Loading = useSelector((state) => state.ProjectsSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (name === "" || description === "") {
      toast.error("Please complete all fields");
      return;
    }
    if (name.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description.length < 25) {
      toast.error(" description is short ");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("commingSoon", commingSoon);

    // If there's a file selected, append it
    if (selectedFile !== null) {
      formData.append("imageCover", selectedFile);
    }

    // Dispatch the thunk with the FormData
    await dispatch(UpdateOneProject({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-project");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [Loading]);

  return {
    img,
    name,
    commingSoon,
    category,
    onChangeName,
    onChangeImage,
    setcategory,
    onchecked,
    setImg,
    description,
    onChangeDecription,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
