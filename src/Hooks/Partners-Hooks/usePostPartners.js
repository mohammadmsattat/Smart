import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PostPartner } from "../../Store/Requests/PartnersRequests";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/public/upload.webp";
import { useNavigate } from "react-router-dom";

export const UsePostPartners = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [selectedFile, setSelectedFile] = useState(null);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //get data from store
  const response = useSelector((state) => state.PartnerSlice.post);
  const Loading = useSelector((state) => state.PartnerSlice.PostLoading);

  //save data in database
  const handelPost = async (event) => {
    event.preventDefault();
    if (selectedFile === null) {
      toast.error("pleas complete data");
      return;
    }

    await dispatch(
      PostPartner({
        logo: selectedFile,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (Loading === false) {
      setImg(upload);
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-partner");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [Loading]);

  return {
    img,
    setSelectedFile,
    setImg,
    onImageChange,
    handelPost,
    response,
    Loading,
  };
};
