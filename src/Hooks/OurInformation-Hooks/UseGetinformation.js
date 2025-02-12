import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetOurInformation } from "../../Store/Requests/OurInformationRequests";

export const UseGetinformation = () => {
  const [info, setInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOurInformation());
    };
    run();
  }, []);

  //get data from store
  const response = useSelector((state) => state.OurInformation.informations);
  const GetLoading = useSelector((state) => state.OurInformation.loading);

  useEffect(() => {
    if (GetLoading === false) {
      if (response.status === 200) {
        setInfo(response.data.data[0]);
      } else {
        setInfo({});
      }
    }
  }, [GetLoading]);

  //store social media links
  let social = {};
  if (info.socialMedia) {
    social = {
      facebook: info.socialMedia.facebook,
      insta: info.socialMedia.instagram,
      x: info.socialMedia.x,
      linkedin: info.socialMedia.linkedin,
    };
  } else {
    social = {
      facebook: "",
      insta: "",
      x: "",
      linkedin: "",
    };
  }

  return { info, social, GetLoading };
};
