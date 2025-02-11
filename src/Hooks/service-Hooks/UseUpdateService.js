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

    // Create FormData object
    const formData = {
      name: name,
      description: description,
    };
    console.log(selectedFile);

    // Dispatch the thunk
    await dispatch(UpdateService({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        setTimeout(() => {
          toast.success("service updated successfully");
        }, 2000);

        navigate("/admin/manegment-service");
        window.location.reload(false);
      }
    }
  }, [Loading]);

  return {
    img,
    name,
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
