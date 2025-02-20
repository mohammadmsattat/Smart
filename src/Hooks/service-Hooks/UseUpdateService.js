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
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description_en, setDescription_en] = useState("");
  const [description_ar, setDescription_ar] = useState("");

  const [commingSoon, setCommingSoon] = useState(false);

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneService(id));
    };
    run();
  }, []);

  const service = useSelector((state) => state.ServicesSlice.getOneService);
  console.log(service);

  useEffect(() => {
    if (service.data) {
      setImg(service.data.data.imageCover);
      setName_en(service.data.data.name_en);
      setName_ar(service.data.data.name_ar);
      setDescription_en(service.data.data.description_en);
      setDescription_ar(service.data.data.description_ar);
      setCommingSoon(service.data.data.commingSoon);
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
  const response = useSelector((state) => state.ServicesSlice.update);
  const Loading = useSelector((state) => state.ServicesSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (
      name_en === "" ||
      name_ar === "" ||
      description_en === "" ||
      description_ar === ""
    ) {
      toast.error("Please complete all fields");
      return;
    }
    if (name_en.length < 3 || name_ar.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description_en.length < 25 || description_ar.length < 25) {
      toast.error(" decription is short ");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("name_en", name_en);
    formData.append("name_ar", name_ar);
    formData.append("description_en", description_en);
    formData.append("description_ar", description_ar);
    formData.append("commingSoon", commingSoon);

    // If there's a file selected, append it
    if (selectedFile !== null) {
      formData.append("imageCover", selectedFile);
    }
    console.log(formData);

    // Dispatch the thunk with the FormData
    await dispatch(UpdateService({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-service");
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
    onchecked,
    onChangeName_en,
    onChangeName_ar,
    onChangeImage,
    setImg,
    description_en,
    description_ar,
    onChangeDecription_ar,
    onChangeDecription_en,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
