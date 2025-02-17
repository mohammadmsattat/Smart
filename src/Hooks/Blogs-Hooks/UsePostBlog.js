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
  //test the text if date
  function isValidDate(text) {
    const date = Date.parse(text); 
    return !isNaN(date); 
  }
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
  const postLoading = useSelector((state) => state.BlogsSlice.PostLoading);

  //post method
  const handelPost = async (event) => {
    event.preventDefault();
    if (Addressar === "" ||Addressen === "" || selectedFile === null ||descriptionar === ""|| descriptionen === ""|| publisher === ""|| publisdDates === "") {
      toast.error("pleas complete data");
      return;
    }
    if(publisher.length <3  ){
      toast.error("publisher is short");
      return;
    }
    console.log(isValidDate(publisdDates));
    
    if(!isValidDate(publisdDates) ){
      toast.error("Pleas Enter Date ");
      return;
    }
    if(Addressar.length <3 ||Addressen.length <3 ){
      toast.error("location is short");
      return;
    }
    if(descriptionar.length <3 ||descriptionen.length <3 ){
      toast.error("description is short");
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
        setTimeout(() => {
          
          navigate("/admin/manegment-blog");
          window.location.reload(false);     
        }, 1500);
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
