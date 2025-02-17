import { useEffect, useState } from "react";
import {
  GetOneOffice,
  UpdateOneOffice,
} from "../../Store/Requests/OfficeRequests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const UseUpdateOffice = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  variabels
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Address, setAddress] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneOffice(id));
    };
    run();
  }, []);

  const office = useSelector((state) => state.OfficeSlice.getOne);

  useEffect(() => {
    if (office.data) {
      setImg(office.data.data.imageCover);
      setLocation(office.data.data.location);
      setAddress(office.data.data.description);
    }
  }, [office]);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //to change name state
  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  //to change description state
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  //to change file state
  const onChangeImage = (event) => {
    onImageChange(event);
  };

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.update);
  const Loading = useSelector((state) => state.OfficeSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (Address === "" || location === "") {
      toast.error("Please complete all fields");
      return;
    }
    if (location.length < 3) {
      toast.error(" location is short  ");
      return;
    }
    if (Address.length < 30) {
      toast.error(" description is short");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("name", Address);
    formData.append("description", location);

    // If there's a file selected, append it
    if (selectedFile !== null) {
      formData.append("imageCover", selectedFile);
    }

    // Dispatch the thunk with the FormData
    await dispatch(UpdateOneOffice({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (response.status === 200) {
        toast.success("office updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-office");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [Loading]);

  return {
    img,
    location,
    onChangeLocation,
    onChangeImage,
    setImg,
    Address,
    onChangeAddress,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
