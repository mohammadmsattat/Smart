import { useEffect, useState } from "react";
import { GetOneOffice, UpdateOneOffice } from "../../Store/Requests/OfficeRequests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const UseUpdateOffice = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  variabels
  const [img, setImg] = useState(null);
  const [location, setLocation] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [Address, setAddress] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneOffice(id));
    };
    run();
  }, []);

  const office = useSelector((state) => state.OfficeSlice.getOne);
  

  useEffect(() => {
    if (office.data) {
      setImg(office.data.data.imageCover);
      setLocation(office.data.data.location);
      setAddress(office.data.data.description);
    }
  }, [office]);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //to change name state
  const onChangeLocation = (event) => {
    setLocation(event.target.value);
  };
  //to change description state
  const onChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  //to change file state
  const onChangeImage = (event) => {
    onImageChange(event);
  };

  //get data from store
  const response = useSelector((state) => state.OfficeSlice.update);
  const Loading = useSelector((state) => state.OfficeSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (location === "" || Address === "") {
      toast.error("Please complete all fields");
      navigate("/admin/manegment-office");
      return;
    }

    const formData = {
      location: location,
      description: Address,
    };

    // Dispatch the thunk
    await dispatch(UpdateOneOffice({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
            
            if (response.status === 200) {
                toast.success("office updated successfully");
                navigate("/admin/manegment-office");
                window.location.reload(false);
            }
    }
  }, [Loading]);

  return {
    img,
    location,
    onChangeLocation,
    onChangeImage,
    setImg,
    Address,
    onChangeAddress,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
