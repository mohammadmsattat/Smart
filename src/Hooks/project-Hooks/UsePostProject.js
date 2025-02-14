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
  const [category, setcategory] = useState('');


  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //check box clicke
  const onchecked=()=>{
    if(commingSoon===false){
      setcommingSoon(true)
    }
    else{
      setcommingSoon(false)
    }
  }
  

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

    await dispatch(
      PostProject({
        name: name,
        imageCover: selectedFile,
        category:category,
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
        toast.success("project added successfully");
        navigate("/admin/manegment-project");
        window.location.reload(false);
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
