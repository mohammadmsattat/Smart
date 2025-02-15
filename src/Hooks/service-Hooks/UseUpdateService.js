import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GetOneService,
  UpdateService,
} from "../../Store/Requests/ServicesRequestes";
import toast from "react-hot-toast";

export const UseUpdateService = (id) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //service  variabels
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [commingSoon, setCommingSoon] = useState(false);



  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneService(id));
    };
    run();
  }, []);

  const service = useSelector((state) => state.ServicesSlice.getOneService);

  useEffect(() => {
    if (service.data) {
      setImg(service.data.data.imageCover);
      setSelectedFile(service.data.data.imageCover);
      setName(service.data.data.name);
      setDescription(service.data.data.description);
      setCommingSoon(service.data.data.commingSoon)

    }
  }, [service]);

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
  const onchecked=()=>{
    if(commingSoon===false){
      setCommingSoon(true)
    }
    else{
      setCommingSoon(false)
    }
  }
  //get data from store
  const response = useSelector((state) => state.ServicesSlice.update);
  const Loading = useSelector((state) => state.ServicesSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (name === "" || description === "") {
      toast.error("Please complete all fields");
      return;
    }
  
    // Create a FormData object
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("commingSoon", commingSoon);
  
    // If there's a file selected, append it
    if (selectedFile) {
      formData.append("imageCover", selectedFile);
    }
  
    // Dispatch the thunk with the FormData
    await dispatch(UpdateService({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        toast.success("service updated successfully");
        navigate("/admin/manegment-service");
        window.location.reload(false);
      }
    }
  }, [Loading]);

  return {
    img,
    name,
    commingSoon,
    onchecked,
    onChangeName,
    onChangeImage,
    setImg,
    description,
    onChangeDecription,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
