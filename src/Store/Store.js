import { configureStore } from '@reduxjs/toolkit';
import ServicesSlice from './Slices/ServicesSlice'
import ProjectsSlice from './Slices/ProjectsSlice'
import TeamSlice from './Slices/TeamSlice'
import LogInSlice from './Slices/LogInSlice'
import PartnerSlice from './Slices/PartnersSlice'
import OfficeSlice from './Slices/OfficeSlice'
import OurInformationSlice from './Slices/OurInformationSlice'
import ContactSlice from './Slices/ContactUsSlice'

const Store=configureStore({
    reducer:{
        ServicesSlice:ServicesSlice,
        ProjectsSlice:ProjectsSlice,
        TeamSlice:TeamSlice,
        LogInSlice:LogInSlice,
        PartnerSlice:PartnerSlice,
        OfficeSlice:OfficeSlice,
        OurInformation:OurInformationSlice,
        ContactSlice:ContactSlice,
    }
    ,devTools:true
});

export default Store;