import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast';


import upload from '../images/public/upload.webp'
import { DeletePartner, GetAllPartners,PostPartner } from '../Store/Requests/PartnersRequests';


//get all partners hook
 export const UseGetAllPartners = () => {

    const [Partner,setpartner]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllPartners());
    }, [])

    //get data from store
    const response = useSelector(state => state.PartnerSlice.partners)
    const Loading = useSelector(state => state.PartnerSlice.GetAllLoading)

     
    useEffect(() => {
        if (Loading === false) {

            if (response.status === 200) {
                      
                setpartner(response.data.data) 

            }
            else{
                setpartner([])
            }
            
        }
    }, [Loading])
   

    return [Partner]
};


//post partner
export const UsePostPartners = () => {

    const dispatch = useDispatch();

    //form data variabels
    const [img, setImg] = useState(upload)
    const [selectedFile, setSelectedFile] = useState(null)


    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    //get data from store
    const response = useSelector(state => state.PartnerSlice.post)
    const Loading = useSelector(state => state.PartnerSlice.PostLoading)

     //save data in database
     const handelPost = async (event) => {
        event.preventDefault();
        if ( selectedFile === null ) {
            toast.error('pleas complete data')  
            return;         
        }
      

        await dispatch(PostPartner({
            
            logo:selectedFile,
        }))
        

    }

    //handel response
    useEffect(() => {
        if (Loading === false) {
            setImg(upload)
            setSelectedFile(null)
            

            if (response.status === 201) {
                toast.success('project added successfully') 
                window.location.reload(false);         

            }
            
        }
    }, [Loading])
   

    return [img,setSelectedFile,setImg,onImageChange,handelPost,response, Loading]
};

//delete partner
export const UseDeleteOnePartner = () => {

    const dispatch = useDispatch();


    //show delete model
    const [show,setshow]=useState("none")
    const handleClose = () => setshow("none");
    const handleShow = () => setshow("");


    //get data from store
    const response = useSelector(state => state.PartnerSlice.delete)
    const DeleteLoading = useSelector(state => state.PartnerSlice.DeleteLoading)


    //handel delete
    const SubmitDelete=(id)=>{
        dispatch(DeletePartner(id));
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