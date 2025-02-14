import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ContactEmail } from "../../Store/Requests/ContactUsRequests";

export const UseSendEmailForm = () => {
  const dispatch = useDispatch();

  //form data variabels
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");



  //get data from store
  const response = useSelector((state) => state.ContactSlice.email);
  const Loading = useSelector((state) => state.ContactSlice.emailLoading);
    
  //send method
  const handelSend = async (event) => {
    event.preventDefault();
    if (email === "" || name==="" || phone==="") {
      toast.error("pleas complete Data ");
      return;
    }

    await dispatch(ContactEmail({ email: email,phone:phone }));
  };

  //handel response
  useEffect(() => {
    if (Loading === false) {
      if (response.status === 201) {
        window.location.reload(false)
      }
    }
  }, [Loading]);

  return {
    SetName,
    setPhone,
    setDescription,
    handelSend,
    setEmail,
    response,
    Loading,
  };
};
