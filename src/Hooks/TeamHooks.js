import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DeleteEmployee, GetAllTeam,PostEmployee } from '../Store/Requests/TeamRequests';
import toast from 'react-hot-toast';
import upload from '../images/public/upload.webp'

//get all services hook
 export const UseGetAllTeam = () => {


    const [Team,setTeam]=useState([]);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllTeam());
    }, [])

    //get data from store
    const response = useSelector(state => state.TeamSlice.Team)
    const GetLoading = useSelector(state => state.TeamSlice.GetAllLoading)

    useEffect(() => {
        if (GetLoading === false) {

            if (response.status === 200) {
                      
                setTeam(response.data.data) 

            }
            else{
                setTeam([])
            }
            
        }
    }, [GetLoading])
   

    return [Team]
};


//post employee
export const UsePostEmployee = () => {

    const dispatch = useDispatch();

    //form data variabels
    const [img, setImg] = useState(upload)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [job, setJob] = useState('')


    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    //get data from store
    const response = useSelector(state => state.TeamSlice.post)
    const postLoading = useSelector(state => state.TeamSlice.postLoading)

     //post method
     const handelPost = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null || job==="") {
            toast.error('pleas complete data')  
            return;         
        }
      

        await dispatch(PostEmployee({
            name:name,
            imageCover:selectedFile,
            job:job,
        }))
        

    }

    //handel response
    useEffect(() => {        
        if (postLoading === false) {
            setImg(upload)
            setName("")
            setSelectedFile(null)
            

            if (response.status === 201) {
                toast.success('project added successfully') 
                window.location.reload(false);         

            }
            
        }
    }, [postLoading])
   

    return [img,setName,setSelectedFile,setImg,setJob,onImageChange,handelPost,response, postLoading]
};

//delete employee
export const UseDeleteOneEmployee = () => {

    const dispatch = useDispatch();


    //show delete model
    const [show,setshow]=useState("none")
    const handleClose = () => setshow("none");
    const handleShow = () => setshow("");


    //get data from store
    const response = useSelector(state => state.TeamSlice.DeleteEmployee)
    const DeleteLoading = useSelector(state => state.TeamSlice.DeleteLoading)


    //handel delete
    const SubmitDelete=(id)=>{
        dispatch(DeleteEmployee(id));
         setshow("none");

    }



   

useEffect(() => {
    if (DeleteLoading === false) {
      
        if (response.status === 204) {
            toast.success('service deleted successfully') 
            window.location.reload(false);                   
        }
        else{
           
        }
        
    }
}, [DeleteLoading])

    return [response,SubmitDelete,show,setshow,handleClose,handleShow]
};
