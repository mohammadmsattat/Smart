import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PostProject } from "../../Store/Requests/ProjectsRequests";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/public/upload.webp";
import { useNavigate } from "react-router-dom";

export const UsePostProject = () => {
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
  const [category_en, setcategory_en] = useState("");
  const [category_ar, setcategory_ar] = useState("");
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
  const response = useSelector((state) => state.ProjectsSlice.post);
  const GetLoading = useSelector((state) => state.ProjectsSlice.PostLoading);

  //save data in database
  const handelPost = async (event) => {
    event.preventDefault();
    if (
      selectedFile === null ||
      name_en === "" ||
      name_ar === "" ||
      description_en === "" ||
      description_ar === "" ||
      category_en === "" ||
      category_ar === ""
    ) {
      toast.error("pleas complete data");
      return;
    }

    if (name_en.length < 3 || name_ar.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description_en.length < 25 || description_ar.length < 25) {
      toast.error(" description is short ");
      return;
    }

    await dispatch(
      PostProject({
        name_en: name_en,
        name_ar: name_ar,
        imageCover: selectedFile,
        category_en:category_en,
        category_ar:category_ar ,
        description_en: description_en,
        description_ar: description_ar,
        commingSoon: commingSoon,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (GetLoading === false) {
      setImg(upload);
      setName_en("");
      setName_ar("");
      setDescription_en("");
      setDescription_ar("");
      setcategory_en("");
      setcategory_ar("");
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-project");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [GetLoading]);

  return {
    img,
    setName_en,
    setName_ar,
    setSelectedFile,
    setImg,
    setDescription_en,
    setDescription_ar,
    setcategory_en,
    setcategory_ar,
    onchecked,
    onImageChange,
    handelPost,
    response,
    GetLoading,
  };
};
