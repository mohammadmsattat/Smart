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
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [commingSoon, setcommingSoon] = useState(false);
  const [category, setcategory] = useState("");

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
    if (name === "" || selectedFile === null || description === "") {
      toast.error("pleas complete data");
      return;
    }

    if (name.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description.length < 25) {
      toast.error(" description is short ");
      return;
    }

    await dispatch(
      PostProject({
        name: name,
        imageCover: selectedFile,
        category: category,
        description: description,
        commingSoon: commingSoon,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (GetLoading === false) {
      setImg(upload);
      setName("");
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
    setName,
    setSelectedFile,
    setImg,
    setDescription,
    setcategory,
    onchecked,
    onImageChange,
    handelPost,
    response,
    GetLoading,
  };
};
