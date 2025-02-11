import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { GetOneEmployee,UpdateEmployee } from "../../Store/Requests/TeamRequests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UseUpdateEmployee = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //service  variabels
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [job, setjob] = useState("");

  useEffect(() => {
    const run = async () => {
      await dispatch(GetOneEmployee(id));
    };
    run();
  }, []);

  const employee = useSelector((state) => state.TeamSlice.getOneEmployee);

  useEffect(() => {
    if (employee.data) {
      setImg(employee.data.data.imageCover);
      setName(employee.data.data.name);
      setjob(employee.data.data.job);
    }
  }, [employee]);

  //when image change save it
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
      setSelectedFile(event.target.files[0]);
    }
  };

  //to change name state
  const onChangeName = (event) => {
    setName(event.target.value);
  };
  //to change description state
  const onChangejob = (event) => {
    setjob(event.target.value);
  };
  //to change file state
  const onChangeImage = (event) => {
    onImageChange(event);
  };

  //get data from store
  const response = useSelector((state) => state.TeamSlice.UpdateEmployee);
  const Loading = useSelector((state) => state.TeamSlice.UpdateLoading);
console.log(response);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (name === "" || setjob === "") {
      toast.error("Please complete all fields");
      return;
    }

    // Create FormData object
    const formData = {
      name: name,
      job: job,
    };
    // Log FormData contents

    // Dispatch the thunk
    await dispatch(UpdateEmployee({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(response);

      if (response.status === 200) {
          toast.success("service updated successfully");
        navigate("/admin/manegment-employee");
        window.location.reload(false);
      }
    }
  }, [Loading]);

  return {
    img,
    name,
    onChangeName,
    onChangeImage,
    setImg,
    job,
    onChangejob,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
