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
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description_en, setDescription_en] = useState("");
  const [description_ar, setDescription_ar] = useState("");
  const [commingSoon, setCommingSoon] = useState(false);
  const [category_en, setcategory_en] = useState("");
  const [category_ar, setcategory_ar] = useState("");



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
      setName_en(project.data.data.name_en);
      setName_ar(project.data.data.name_ar);
      setDescription_en(project.data.data.description_en);
      setDescription_ar(project.data.data.description_ar);
      setcategory_en(project.data.data.category_en);
      setcategory_ar(project.data.data.category_ar);

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
  const onChangeName_en = (event) => {
    setName_en(event.target.value);
  };
  const onChangeName_ar = (event) => {
    setName_ar(event.target.value);
  };
  //to change description state
  const onChangeDecription_en = (event) => {
    setDescription_en(event.target.value);
  };
  const onChangeDecription_ar = (event) => {
    setDescription_ar(event.target.value);
  };
  //to change category
  const onCategoryChange_en = (event) => {
    setcategory_en(event.target.value);
  };
  const onCategoryChange_ar = (event) => {
    setcategory_ar(event.target.value);
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

    if (name_en === "" || name_ar === ""||description_en === "" || description_ar === ""||category_en===""||category_ar==="") {
      toast.error("Please complete all fields");
      return;
    }
    if (name_en.length < 3||name_ar.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description_en.length < 25||description_ar.length < 25) {
      toast.error(" description is short ");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("name_en", name_en);
    formData.append("name_ar", name_ar);
    formData.append("description_en", description_en);
    formData.append("description_ar", description_ar);
    formData.append("category_en", category_en);
    formData.append("category_ar", category_ar);
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
    name_en,
    name_ar,
    commingSoon,
    category_en,
    category_ar,
    onChangeName_en,
    onChangeName_ar,
    onChangeImage,
    onCategoryChange_en,
    onCategoryChange_ar,
    onchecked,
    setImg,
    description_en,
    description_ar,
    onChangeDecription_en,
    onChangeDecription_ar,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
