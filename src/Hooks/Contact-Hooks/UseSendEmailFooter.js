import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { ContactEmail } from "../../Store/Requests/ContactUsRequests";

export const UseSendEmailFooter = () => {
  const dispatch = useDispatch();

  //form data variabels
  const [email, setEmail] = useState("");

  //get data from store
  const response = useSelector((state) => state.ContactSlice.email);
  const Loading = useSelector((state) => state.ContactSlice.emailLoading);

  //send method
  const handelSend = async (event) => {
    event.preventDefault();
    if (email === "") {
      toast.error("pleas insert email");
      return;
    }

    await dispatch(ContactEmail({ email: email }));
  };

  //handel response
  useEffect(() => {
    if (Loading === false) {
      if (response.status === 201) {
        toast.success("Your Message has been successfully sent. ");
      }
    }
  }, [Loading]);

  return {
    handelSend,
    setEmail,
    response,
    Loading,
  };
};
