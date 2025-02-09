import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast';


import upload from '../images/public/upload.webp'
import { DeleteOffice, GetAllOffices,PostOffice } from '../Store/Requests/OfficeRequests';


//get all offices hook
 export const UseGetAllOffice = () => {


    const[offices,setOffices]=useState();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllOffices());
    }, [])

    //get data from store
    const response = useSelector(state => state.OfficeSlice.offices)
    const GetLoading = useSelector(state => state.OfficeSlice.GetAllLoading)

     
    useEffect(() => {
        if (GetLoading === false) {

            if (response.status === 200) {
                      
                setOffices(response.data.data) 

            }
            else{
                setOffices([])
            }
            
        }
    }, [GetLoading])
   

    return [offices, GetLoading]
};


//post project
export const UsePostOffice = () => {

    const dispatch = useDispatch();

    //form data variabels
    const [img, setImg] = useState(upload)
    const [location, setlocation] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [description, setDescription] = useState('')


    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    //get data from store
    const response = useSelector(state => state.OfficeSlice.post)
    const Loading = useSelector(state => state.OfficeSlice.PostLoading)

     //save data in database
     const handelPost = async (event) => {
        event.preventDefault();
        if (location === "" || selectedFile === null || description==="") {
            toast.error('pleas complete data')  
            return;         
        }
      

        await dispatch(PostOffice({
            location:location,
            imageCover:selectedFile,
            description:description,
        }))
        

    }

    //handel response
    useEffect(() => {
        if (Loading === false) {
            setImg(upload)
            setlocation("")
            setSelectedFile(null)
            

            if (response.status === 201) {
                toast.success('project added successfully') 
                window.location.reload(false);         

            }
            
        }
    }, [Loading])
   

    return [img,setlocation,setSelectedFile,setImg,setDescription,onImageChange,handelPost,response, Loading]
};

//delete office
export const UseDeleteOneOffice = () => {

    const dispatch = useDispatch();


    //show delete model
    const [show,setshow]=useState("none")
    const handleClose = () => setshow("none");
    const handleShow = () => setshow("");


    //get data from store
    const response = useSelector(state => state.OfficeSlice.delete)
    const DeleteLoading = useSelector(state => state.OfficeSlice.DeleteLoading)


    //handel delete
    const SubmitDelete=(id)=>{
        dispatch(DeleteOffice(id));
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