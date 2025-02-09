import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { DeleteOneService,
         GetAllServices,
         PostService ,
         GetOneService,
         UpdateOneService} from '../Store/Requests/ServicesRequestes';
import toast from 'react-hot-toast';
import upload from '../images/public/upload.webp'




//////////////////////get all services hook////////////////////
 export const UseGetAllServices = () => {

    const [Services,setServices]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllServices());
    }, [])

    //get data from store
    const response = useSelector(state => state.ServicesSlice.services)
    const GetLoading = useSelector(state => state.ServicesSlice.GetAllLoading)
   

useEffect(() => {
    if (GetLoading === false) {
      
        if (response.status === 200) {
                  
               setServices(response.data.data) 
        }
        else{
            setServices([])
        }
        
    }
}, [GetLoading])

    return [Services]
};


//////////////////////post service////////////////////
export const UsePostService = () => {

    const dispatch = useDispatch();

    //form data variabels
    const [img, setImg] = useState(upload)
    const [name, setName] = useState('')
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
    const response = useSelector(state => state.ServicesSlice.post)
    const PostLoading = useSelector(state => state.ServicesSlice.PostLoading)

     //save data in database
     const handelPost = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null || description==="") {
            toast.error('pleas complete data')  
            return;         
        }
      

        await dispatch(PostService({
            name:name,
            imageCover:selectedFile,
            description:description,
        }))
        

    }

    useEffect(() => {
        if (PostLoading === false) {
            setImg(upload)
            setName("")
            setSelectedFile(null)
            console.log(response);
            

            if (response.status === 201) {
                toast.success('project added successfully') 
                window.location.reload(false);         

            }
            
        }
    }, [PostLoading])
   

    return [img,setName,setSelectedFile,setImg,setDescription,onImageChange,handelPost,response, PostLoading]
};




////////////delete one service  hook////////////////////
export const UseDeleteOneSrevice = () => {

    const dispatch = useDispatch();


    //show delete model
    const [show,setshow]=useState("none")
    const handleClose = () => setshow("none");
    const handleShow = () => setshow("");


    //get data from store
    const response = useSelector(state => state.ServicesSlice.delete)
    const DeleteLoading = useSelector(state => state.ServicesSlice.deleteLoading)


    //handel delete
    const SubmitDelete=(id)=>{
        dispatch(DeleteOneService(id));
         setshow("none");

    }



   

useEffect(() => {
    if (DeleteLoading === false) {
      
        if (response.status === 204) {
            toast.success('service deleted successfully') 
            window.location.reload(false);                   
        }
        else{
           // setServices([])
        }
        
    }
}, [DeleteLoading])

    return [response,SubmitDelete,show,setshow,handleClose,handleShow]
};


//////////////////////get one service hook////////////////////
export const UseGetOneService = (id) => {

    const [Service,setService]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetOneService(id));
    }, [])

    //get data from store
    const response = useSelector(state => state.ServicesSlice.getOneService)
    const Loading = useSelector(state => state.ServicesSlice.getOneLoading)
   

useEffect(() => {
    if (Loading === false) {
      
        if (response.status === 200) {
                  
               setService(response.data.data) 
        }
        else{
            setService([])
        }
        
    }
}, [Loading])

    return [Service]
};

