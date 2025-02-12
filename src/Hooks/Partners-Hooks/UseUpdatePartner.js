import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { GetOnePartner, UpdatePartner } from "../../Store/Requests/PartnersRequests";

export const UseUpdatePartner = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //service  variabels
  const [img, setImg] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOnePartner(id));
    };
    run();
  }, []);

  const partner = useSelector((state) => state.PartnerSlice.GetOnePartner);
  console.log(partner);
  

  useEffect(() => {
    if (partner.data) {
      setImg(partner.data.data.logo);
    }
  }, [partner]);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

 

  //get data from store
  const response = useSelector((state) => state.PartnerSlice.UpdatePartner);
  const Loading = useSelector((state) => state.PartnerSlice.updateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (selectedFile === "") {
      toast.error("Please complete all fields");
      return;
    }

    // Create FormData object
    const formData = {
      logo: selectedFile,
    };
    // Log FormData contents

    // Dispatch the thunk
    await dispatch(UpdatePartner({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(response);

      if (response.status === 200) {
          toast.success("service updated successfully");
        navigate("/admin/manegment-partner");
        window.location.reload(false);
      }
    }
  }, [Loading]);

  return {
    img,
    setImg,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
