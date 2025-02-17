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
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [description, setDescription] = useState("");
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
    if (name === "" || selectedFile === null || description === "") {
      toast.error("pleas complete data");
      return;
    }
    if (name.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (description.length < 25) {
      toast.error(" decription is short ");
      return;
    }

    await dispatch(
      PostService({
        name: name,
        imageCover: selectedFile,
        description: description,
        commingSoon: commingSoon,
      })
    );
  };

  useEffect(() => {
    if (PostLoading === false) {
      setImg(upload);
      setName("");
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
    setName,
    setSelectedFile,
    setImg,
    onchecked,
    setDescription,
    onImageChange,
    handelPost,
    response,
    PostLoading,
  };
};
