import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { PostEmployee } from "../../Store/Requests/TeamRequests";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/public/upload.webp";
import { useNavigate } from "react-router-dom";

export const UsePostEmployee = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [job_en, setjob_en] = useState("");
  const [job_ar, setjob_ar] = useState("");
  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //get data from store
  const response = useSelector((state) => state.TeamSlice.post);
  const postLoading = useSelector((state) => state.TeamSlice.postLoading);

  //post method
  const handelPost = async (event) => {
    event.preventDefault();
    if (selectedFile === null || name_en === "" || name_ar === ""||job_en === "" || job_ar === "") {
      toast.error("pleas complete data");
      return;
    }
    if (name_en.length < 3||name_ar.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (job_en.length < 3||job_ar.length < 3) {
      toast.error(" job is short ");
      return;
    }

    await dispatch(
      PostEmployee({
        name_en: name_en,
        name_ar:name_ar,
        imageCover: selectedFile,
        job_en: job_en,
        job_ar:job_ar

      })
    );
  };

  //handel response
  useEffect(() => {
    if (postLoading === false) {
      setImg(upload);
      setName_en("");
      setName_ar("");
      setjob_en("");
      setjob_ar("");

      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("Employee added successfully");
        setTimeout(() => {
          navigate("/admin/manegment-employee");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [postLoading]);

  return {
    img,
    setName_en,
    setName_ar,
    setSelectedFile,
    setImg,
    setjob_en,
    setjob_ar,
    onImageChange,
    handelPost,
    response,
    postLoading,
  };
};
