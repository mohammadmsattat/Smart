import { configureStore } from '@reduxjs/toolkit';
import ServicesSlice from './Slices/ServicesSlice'
import ProjectsSlice from './Slices/ProjectsSlice'
import TeamSlice from './Slices/TeamSlice'
import LogInSlice from './Slices/LogInSlice'
import PartnerSlice from './Slices/PartnersSlice'
import OfficeSlice from './Slices/OfficeSlice'

const Store=configureStore({
    reducer:{
        ServicesSlice:ServicesSlice,
        ProjectsSlice:ProjectsSlice,
        TeamSlice:TeamSlice,
        LogInSlice:LogInSlice,
        PartnerSlice:PartnerSlice,
        OfficeSlice:OfficeSlice,
    }
    ,devTools:true
});

export default Store;