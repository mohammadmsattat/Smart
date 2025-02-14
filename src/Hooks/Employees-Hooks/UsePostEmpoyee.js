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
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [job, setJob] = useState("");

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
    if (name === "" || selectedFile === null || job === "") {
      toast.error("pleas complete data");
      return;
    }

    await dispatch(
      PostEmployee({
        name: name,
        imageCover: selectedFile,
        job: job,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (postLoading === false) {
      setImg(upload);
      setName("");
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("Employee added successfully");
        navigate("/admin/manegment-employee");
        window.location.reload(false);     
       }
    }
  }, [postLoading]);

  return {
    img,
    setName,
    setSelectedFile,
    setImg,
    setJob,
    onImageChange,
    handelPost,
    response,
    postLoading,
};
};
