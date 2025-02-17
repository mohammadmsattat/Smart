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
  const [location, setlocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");

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
    if (location === "" || selectedFile === null || description === "") {
      toast.error("pleas complete data");
      return;
    }
    if (location.length < 3) {
      toast.error(" location is short  ");
      return;
    }
    if (description.length < 30) {
      toast.error(" description is short");
      return;
    }
    await dispatch(
      PostOffice({
        location: location,
        imageCover: selectedFile,
        description: description,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (Loading === false) {
      setImg(upload);
      setlocation("");
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
    setlocation,
    setSelectedFile,
    setImg,
    setDescription,
    onImageChange,
    handelPost,
    response,
    Loading,
  };
};
