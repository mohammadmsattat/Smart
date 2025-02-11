import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostService } from "../../Store/Requests/ServicesRequestes";
import upload from "../../images/public/upload.webp";
import toast from "react-hot-toast";

export const UsePostService = () => {
  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [name, setName] = useState("");
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
  const response = useSelector((state) => state.ServicesSlice.post);
  const PostLoading = useSelector((state) => state.ServicesSlice.PostLoading);

  //save data in database
  const handelPost = async (event) => {
    event.preventDefault();
    if (name === "" || selectedFile === null || description === "") {
      toast.error("pleas complete data");
      return;
    }

    await dispatch(
      PostService({
        name: name,
        imageCover: selectedFile,
        description: description,
      })
    );
  };

  useEffect(() => {
    if (PostLoading === false) {
      setImg(upload);
      setName("");
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("Service added successfully");
        window.location.reload(false);
      }
    }
  }, [PostLoading]);

  return {
    img,
    setName,
    setSelectedFile,
    setImg,
    setDescription,
    onImageChange,
    handelPost,
    response,
    PostLoading,
  };
};
