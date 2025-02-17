import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  GetOurInformation,
  UpdateInformations,
} from "../../Store/Requests/OurInformationRequests";
import { useNavigate } from "react-router-dom";
export const UseUpdataInformations = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //Get Information requests
  const [info, setInfo] = useState({});
  useEffect(() => {
    const run = async () => {
      await dispatch(GetOurInformation());
    };
    run();
  }, []);

  //get information from store
  const response = useSelector((state) => state.OurInformation.informations);
  const GetLoading = useSelector((state) => state.OurInformation.loading);

  //store information in variabel
  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setInfo(response.data.data[0]);
      } else {
        setInfo({});
      }
    }
  }, [GetLoading]);

  //  variabels to display information and update it
  const [id, setid] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [Linkedin, setLinkedin] = useState("");
  const [x, setx] = useState("");

  useEffect(() => {
    if (info.socialMedia) {
      setid(info._id);
      setemail(info.email);
      setPhone(info.phone);
      setFacebook(info.socialMedia.facebook);
      setInstagram(info.socialMedia.instagram);
      setLinkedin(info.socialMedia.linkedin);
      setx(info.socialMedia.x);
    }
  }, [info]);

  //to change variabels state
  const onChangeEmail = (event) => {
    setemail(event.target.value);
  };

  const onChangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onChangeFacebook = (event) => {
    setFacebook(event.target.value);
  };
  const onChangeInsta = (event) => {
    setInstagram(event.target.value);
  };
  const onChangeLkedinn = (event) => {
    setLinkedin(event.target.value);
  };
  const onChangeX = (event) => {
    setx(event.target.value);
  };

  //get update data from store
  const update = useSelector((state) => state.OurInformation.update);
  const Loading = useSelector((state) => state.OurInformation.updateLoading);

  //handel update
  const handelupdate = async (event) => {
    event.preventDefault();

    if (
      email === "" ||
      phone === "" ||
      facebook === "" ||
      instagram === "" ||
      Linkedin === "" ||
      x === ""
    ) {
      toast.error("Please complete all fields");
      return;
    }

    //form data to updated
    const formData = {
      email: email,
      phone: phone,
      socialMedia: {
        facebook: facebook,
        instagram: instagram,
        x: x,
        linkedin: Linkedin,
      },
    };

    // Dispatch the thunk
    await dispatch(UpdateInformations({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      if (update.status === 200) {
        toast.success("information updated successfully");
        setTimeout(() => {
          navigate("/");

          window.location.reload(false);
        }, 1500);
      }
    }
  }, [Loading]);

  return {
    email,
    phone,
    facebook,
    instagram,
    Linkedin,
    x,
    setPhone,
    onChangeEmail,
    onChangePhone,
    onChangeFacebook,
    onChangeInsta,
    onChangeLkedinn,
    onChangeX,
    handelupdate,
    update,
    Loading,
  };
};
