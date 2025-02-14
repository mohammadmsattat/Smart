import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import upload from "../../images/public/upload.webp";
import { useNavigate } from "react-router-dom";
import { PostBlog } from "../../Store/Requests/BlogsRequests";

export const UsePostBlog = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //form data variabels
  const [img, setImg] = useState(upload);
  const [Addressen, setAddressen] = useState("");
  const [Addressar, setAddressar] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [descriptionen, setDescriptoinen] = useState("");
  const [descriptionar, setDescriptoinar] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publisdDates, setPublihDate] = useState("");


  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };
  const onchagedesar = (event) => {
    setDescriptoinar(event.target.value);
  };
  const onchagedesen = (event) => {
    setDescriptoinen(event.target.value);
  };
  const onchangepublisher = (event) => {
    setPublisher(event.target.value);
  };
  const onchangepubishdate = (event) => {
    setPublihDate(event.target.value);
  };
  const onchangelocen = (event) => {
    setAddressen(event.target.value);
  };
  const onchangelocar = (event) => {
    setAddressar(event.target.value);
  };

  //get data from store
  const response = useSelector((state) => state.BlogsSlice.post);
  const postLoading = useSelector((state) => state.BlogsSlice.UpdateLoading);

  //post method
  const handelPost = async (event) => {
    event.preventDefault();
    if (Addressar === "" ||Addressen === "" || selectedFile === null ||descriptionar === ""|| descriptionen === ""|| publisher === ""|| publisdDates === "") {
      toast.error("pleas complete data");
      return;
    }

    await dispatch(
        PostBlog({
        location_en: Addressen,
        location_ar: Addressar,
        text_en: descriptionen,
        text_ar: descriptionar,
        publisher: publisher,
        imageCover:selectedFile,
        publishDate:publisdDates,
      })
    );
  };

  //handel response
  useEffect(() => {
    if (postLoading === false) {
      setImg(upload);
      setAddressen("");
      setAddressar("");

      setDescriptoinen("");
      setDescriptoinar("");
      setPublisher("");
      setPublihDate("");
      setSelectedFile(null);

      if (response.status === 201) {
        toast.success("Blog added successfully");
        navigate("/admin/manegment-blog");
        window.location.reload(false);     
       }
    }
  }, [postLoading]);

  return {
    img,
    onchangelocar,
    onchangelocen,
    onchagedesar,
    onchagedesen,
    onchangepublisher,
    onchangepubishdate,
    setSelectedFile,
    setImg,
    onImageChange,
    handelPost,
    response,
    postLoading,
};
};
