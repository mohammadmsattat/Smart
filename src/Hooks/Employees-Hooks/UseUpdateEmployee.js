import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  GetOneEmployee,
  UpdateEmployee,
} from "../../Store/Requests/TeamRequests";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const UseUpdateEmployee = (id) => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  //  variabels
  const [img, setImg] = useState(null);
  const [name_en, setName_en] = useState("");
  const [name_ar, setName_ar] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [job_en, setjob_en] = useState("");
  const [job_ar, setjob_ar] = useState("");

  

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
      setName_en(employee.data.data.name_en);
      setName_ar(employee.data.data.name_ar);
      setjob_en(employee.data.data.job_en);
      setjob_ar(employee.data.data.job_ar);

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
  const onChangeName_en = (event) => {
    setName_en(event.target.value);
  };
  const onChangeName_ar = (event) => {
    setName_ar(event.target.value);
  };
  //to change description state
  const onChangejob_en = (event) => {
    setjob_en(event.target.value);
  };
  const onChangejob_ar = (event) => {
    setjob_ar(event.target.value);
  };
  //to change file state
  const onChangeImage = (event) => {
    onImageChange(event);
  };

  //get data from store
  const response = useSelector((state) => state.TeamSlice.UpdateEmployee);
  const Loading = useSelector((state) => state.TeamSlice.UpdateLoading);

  //save data in database
  const handelupdate = async (event) => {
    event.preventDefault();

    if (name_en === "" || name_ar === ""||job_en === "" || job_ar === "") {
      toast.error("Please complete all fields");
      return;
    }
    if (name_en.length < 3||name_ar.length < 3) {
      toast.error(" name is short ");
      return;
    }
    if (job_en.length < 3||job_ar.length < 3) {
      toast.error(" job is short ");
      return;
    }

    // Create a FormData object
    const formData = new FormData();
    formData.append("name_en", name_en);
    formData.append("name_ar", name_ar);

    formData.append("job_en", job_en);
    formData.append("job_ar", job_ar);

console.log(name_en);

    // If there's a file selected, append it
    if (selectedFile !== null) {
      formData.append("imageCover", selectedFile);
    }
console.log(formData);

    // Dispatch the thunk with the FormData
    await dispatch(UpdateEmployee({ id, formData }));
  };

  useEffect(() => {
    if (Loading === false) {
      console.log(response);

      if (response.status === 200) {
        toast.success("service updated successfully");
        setTimeout(() => {
          navigate("/admin/manegment-employee");
          window.location.reload(false);
        }, 1500);
      }
    }
  }, [Loading]);

  return {
    img,
    name_en,
    name_ar,
    onChangeName_en,
    onChangeName_ar,
    onChangeImage,
    setImg,
    job_en,
    job_ar,
    onChangejob_en,
    onChangejob_ar,
    onImageChange,
    handelupdate,
    response,
    Loading,
  };
};
