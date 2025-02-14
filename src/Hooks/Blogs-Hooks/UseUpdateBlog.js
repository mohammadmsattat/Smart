import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetOneBlog, UpdateBlog } from "../../Store/Requests/BlogsRequests";

export const UseUpdateBlog = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  variabels
  const [img, setImg] = useState();
    const [Addressen, setAddressen] = useState("");
    const [Addressar, setAddressar] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const [descriptionen, setDescriptoinen] = useState("");
    const [descriptionar, setDescriptoinar] = useState("");
    const [publisher, setPublisher] = useState("");
    const [publisdDates, setPublihDate] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneBlog(id));
    };
    run();
  }, []);

  const blog = useSelector((state) => state.BlogsSlice.getOne);
  
  useEffect(() => {
    if (blog.data) {
      setImg(blog.data.data.imageCover)
      setAddressar(blog.data.data.location_en);
      setAddressen(blog.data.data.location_ar);
      setDescriptoinar(blog.data.data.text_ar);
      setDescriptoinen(blog.data.data.text_en);
      setPublisher(blog.data.data.publisher);
      setPublihDate(blog.data.data.publishDate);
      

    }
  }, [blog]);

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
  const response = useSelector((state) => state.TeamSlice.UpdateEmployee);
  const Loading = useSelector((state) => state.TeamSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (Addressar === "" ||Addressen === "" || selectedFile === null ||descriptionar === ""|| descriptionen === ""|| publisher === ""|| publisdDates === "") {
      toast.error("Please complete all fields");
      return;
    }
  
    // Create a FormData object
    const formData = new FormData();
    formData.append("location_en", Addressen);
    formData.append("location_ar", Addressar);
    formData.append("text_en", descriptionen);
    formData.append("text_ar", descriptionar);
    formData.append("publisher", publisher);
    formData.append("publishDate", publisdDates);

  
    // If there's a file selected, append it
    if (selectedFile) {
      formData.append("imageCover", selectedFile);
    }
  
    // Dispatch the thunk with the FormData
    await dispatch(UpdateBlog({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(response);

      if (response.status === 200) {
          toast.success("service updated successfully");
        navigate("/admin/manegment-blog");
        window.location.reload(false);
      }
    }
  }, [Loading]);

  return {
    img,
    Addressar,
    Addressen,
    descriptionar,
    descriptionen,
    publisher,
    publisdDates,
    onchangelocar,
    onchangelocen,
    onchagedesar,
    onchagedesen,
    onchangepublisher,
    onchangepubishdate,
    setSelectedFile,
    setImg,
    onImageChange,
    handelupdate,
    response,
  };
};
