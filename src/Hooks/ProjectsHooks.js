import  { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import toast from 'react-hot-toast';


import upload from '../images/public/upload.webp'
import { DeleteProject, GetAllProjects, GetOneProject, PostProject, UpdateOneProject } from '../Store/Requests/ProjectsRequests';

//get all projects hook
 export const UseGetAllProjects = () => {
   
   
    const [Projects,setProjects]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetAllProjects());
    }, [])

    //get data from store
    const response = useSelector(state => state.ProjectsSlice.Projects)
    const Loading = useSelector(state => state.ProjectsSlice.GetAllLoading)

    
    useEffect(() => {
        if (Loading === false) {

            if (response.status === 200) {
                      
                setProjects(response.data.data) 

            }
            else{
                setProjects([])
            }
            
        }
    }, [Loading])

    return [Projects]
};


//post project
export const UsePostProject = () => {

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
    const response = useSelector(state => state.ProjectsSlice.post)
    const GetLoading = useSelector(state => state.ProjectsSlice.PostLoading)

     //save data in database
     const handelPost = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null || description==="") {
            toast.error('pleas complete data')  
            return;         
        }
      

        await dispatch(PostProject({
            name:name,
            imageCover:selectedFile,
            description:description,
        }))
        

    }

    //handel response
    useEffect(() => {
        if (GetLoading === false) {
            setImg(upload)
            setName("")
            setSelectedFile(null)
            

            if (response.status === 201) {
                toast.success('project added successfully') 
                window.location.reload(false);         

            }
            
        }
    }, [GetLoading])
   

    return [img,setName,setSelectedFile,setImg,setDescription,onImageChange,handelPost,response, GetLoading]
};

//delete project
export const UseDeleteOneProject = () => {

    const dispatch = useDispatch();


    //show delete model
    const [show,setshow]=useState("none")
    const handleClose = () => setshow("none");
    const handleShow = () => setshow("");


    //get data from store
    const response = useSelector(state => state.ProjectsSlice.deleteproject)
    const DeleteLoading = useSelector(state => state.ProjectsSlice.DeleteLoading)


    //handel delete
    const SubmitDelete=(id)=>{
        dispatch(DeleteProject(id));
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


//get one project hook
export const UseGetOneProject = (id) => {

    const [project,setproject]=useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GetOneProject(id));
    }, [])

    //get data from store
    const response = useSelector(state => state.ProjectsSlice.getoneproject)
    const Loading = useSelector(state => state.ProjectsSlice.GetOneLoading)
   

useEffect(() => {
    if (Loading === false) {
      
        if (response.status === 200) {
                  
            setproject(response.data.data) 
        }
        else{
            setproject([])
        }
        
    }
}, [Loading])

    return [project]
};

////update project
export const UseUpdateProject = (id) => {
    
    const dispatch = useDispatch();

    //service  variabels
    const [img, setImg] = useState(upload)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    const [description, setDescription] = useState('')
    
    useEffect(() => {
        const run = async () => {
            await dispatch(GetOneProject(id))
        }
        run();
    }, [])

    const project = useSelector(state => state.ProjectsSlice.getoneproject)

    useEffect(()=>{
        if(project.data){            
            setImg(project.data.data.imageCover)
            setName(project.data.data.name)    
            console.log(name);
                    
            setDescription(project.data.data.description)
        }
    },[project])
    
    //when image change save it 
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImg(URL.createObjectURL(event.target.files[0]))
            setSelectedFile(event.target.files[0])
        }
    }

    //to change name state
    const onChangeName = (event) => {
        event.persist();
        setName(event.target.value)
    }
    //to change description state
    const onChangeDecription = (event) => {
        event.persist();
        setDescription(event.target.value)
    }
    //to change file state
    const onChangeImage = (event) => {
        event.persist();
        onImageChange(event)
    }

    //get data from store
    const response = useSelector(state => state.ServicesSlice.update)
    const Loading = useSelector(state => state.ServicesSlice.UpdateLoading)

     //save data in database
     const handelupdate = async (event) => {
        event.preventDefault();
        if (name === "" || selectedFile === null || description==="") {
            toast.error('pleas complete data')  
            return;         
        }
      


        console.log(name);
        console.log(description);
        console.log(selectedFile);

        
        
        await dispatch(UpdateOneProject(id,name,description,selectedFile))
        

    }

    useEffect(() => {
        if (Loading === false) {
           
            console.log(response);
            

            if (response.status === 200) {
                toast.success('service updated successfully') 
                window.location.reload(false); 
                console.log('suc');
                        

            }
            
        }
    }, [Loading])
   

    return [img,name,onChangeName,onChangeImage,setImg,description,onChangeDecription,onImageChange,handelupdate,response, Loading]
};