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
  const [location_en, setLocation_en] = useState("");
  const [location_ar, setLocation_ar] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [Address_en, setAddress_en] = useState("");
  const [Address_ar, setAddress_ar] = useState("");


  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneOffice(id));
    };
    run();
  }, []);

  const office = useSelector((state) => state.OfficeSlice.getOne);
  console.log(office);
  

  useEffect(() => {
    if (office.data) {
      setImg(office.data.data.imageCover);
      setLocation_en(office.data.data.location_en);
      setLocation_ar(office.data.data.location_ar);

      setAddress_en(office.data.data.description_en);
      setAddress_ar(office.data.data.description_ar);

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
  const onChangeLocation_en = (event) => {
    setLocation_en(event.target.value);
  };
  const onChangeLocation_ar = (event) => {
    setLocation_ar(event.target.value);
  };
  //to change description state
  const onChangeAddress_en = (event) => {
    setAddress_en(event.target.value);
  };
  const onChangeAddress_ar = (event) => {
    setAddress_ar(event.target.value);
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

    if (location_en === "" || location_ar === "" ||Address_en === "" || Address_ar === "") {
      toast.error("Please complete all fields");
      return;
    }
    if (location_en.length < 3||location_ar.length < 3) {
      toast.error(" location is short  ");
      return;
    }
    if (Address_en.length < 30||Address_ar.length < 30) {
      toast.error(" description is short");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("location_en", location_en);
    formData.append("location_ar", location_ar);

    formData.append("description_en", Address_en);
    formData.append("description_ar", Address_ar);


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
    location_en,
    location_ar,
    onChangeLocation_en,
    onChangeLocation_ar,
    onChangeImage,
    setImg,
    Address_en,
    Address_ar,
    onChangeAddress_en,
    onChangeAddress_ar,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
