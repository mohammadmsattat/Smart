import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ContactEmail } from "../../Store/Requests/ContactUsRequests";
import { data } from "react-router-dom";

export const UseSendEmailForm = () => {
  const dispatch = useDispatch();

  //form data variabels
  const [name, SetName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");


  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  //get data from store
  const response = useSelector((state) => state.ContactSlice.email);
  const Loading = useSelector((state) => state.ContactSlice.emailLoading);
    
  //send method
  const handelSend = async (event) => {
    event.preventDefault();
    if (!email) {
      toast.error("Please insert email");
      return;
    }
    
    if (!isValidEmail(email)) {
      toast.error("You must insert a valid email");
      return;
    }
    
    // Create FormData object
    const formData = new FormData();
    formData.append("email", email);
    
    // Append optional fields only if they exist
    const optionalFields = { name, phone, description };
    
    for (const key in optionalFields) {
      if (optionalFields[key]) {
        formData.append(key, optionalFields[key]);
      }
    }
    
     const data={
      email: email,
      name:name,
      phone:phone,
    }
        console.log(formData);
        
    await dispatch(ContactEmail(data));
  };
  console.log(email);
  

  //handel response
  useEffect(() => {
    if (Loading === false) {
      if (response.status === 201) {
        toast.success("Your Message has been successfully sent. ");
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
