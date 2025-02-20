import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostService } from "../../Store/Requests/ServicesRequestes";
import upload from "../../images/public/upload.webp";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const UsePostService = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description_en, setDescription_en] = useState("");
  const [description_ar, setDescription_ar] = useState("");
  const [commingSoon, setcommingSoon] = useState(false);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //check box clicke
  const onchecked = () => {
    if (commingSoon === false) {
      setcommingSoon(true);
    } else {
      setcommingSoon(false);
    }
  };

  //get data from store
  const response = useSelector((state) => state.ServicesSlice.post);
  const PostLoading = useSelector((state) => state.ServicesSlice.PostLoading);

  //save data in database
  const handelPost = async (event) => {
    event.preventDefault();
    if (
      name_en === "" ||
      name_ar === "" ||
      description_en === "" ||
      description_ar === "" ||
      selectedFile === null
    ) {
      toast.error("pleas complete data");
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

    await dispatch(
      PostService({
        name_en: name_en,
        name_ar: name_ar,
        imageCover: selectedFile,
        description_en: description_en,
        description_ar: description_ar,
        commingSoon: commingSoon,
      })
    );
  };

  useEffect(() => {
    if (PostLoading === false) {
      setImg(upload);
      setName_en("");
      setName_ar("");
      setDescription_ar("");
      setDescription_en("");
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-service");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [PostLoading]);

  return {
    img,
    setName_en,
    setName_ar,
    setSelectedFile,
    setImg,
    onchecked,
    setDescription_ar,
    setDescription_en,
    onImageChange,
    handelPost,
    response,
    PostLoading,
  };
};
