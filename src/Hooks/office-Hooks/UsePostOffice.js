import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PostOffice } from "../../Store/Requests/OfficeRequests";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/public/upload.webp";
import { useNavigate } from "react-router-dom";

export const UsePostOffice = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [location_en, setLocation_en] = useState("");
  const [location_ar, setLocation_ar] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [Address_en, setAddress_en] = useState("");
    const [Address_ar, setAddress_ar] = useState("");

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.post);
  const Loading = useSelector((state) => state.OfficeSlice.PostLoading);

  //save data in database
  const handelPost = async (event) => {
    event.preventDefault();
    if ( selectedFile === null ||location_en === "" || location_ar === "" ||Address_en === "" || Address_ar === "") {
      toast.error("pleas complete data");
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
    await dispatch(
      PostOffice({
        location_en: location_en,
        location_ar:location_ar,
        imageCover: selectedFile,
        description_en: Address_en,
        description_ar:Address_ar
      })
    );
  };

  //handel response
  useEffect(() => {
    if (Loading === false) {
      setImg(upload);
      setLocation_en("");
      setLocation_ar("");
      setAddress_en("");
      setAddress_ar("");

      setSelectedFile(null);

      if (response.status === 201) {
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
    setLocation_en,
    setLocation_ar,
    setSelectedFile,
    setImg,
    setAddress_en,
    setAddress_ar,
    onImageChange,
    handelPost,
    response,
    Loading,
  };
};
