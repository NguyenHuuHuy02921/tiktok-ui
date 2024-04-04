import routesConfig  from '@/config/routes';

// Layouts
import {HeaderOnly} from "@/components/Layout"
import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import Search from "@/pages/Search";


// public Routes
const publicRoutes = [
    {path: routesConfig.Home, component: Home },
    {path: routesConfig.Following, component: Following },
    {path: routesConfig.Profile, component: Profile },
    {path: routesConfig.Upload, component: Upload, layout: HeaderOnly},
    {path: routesConfig.Search, component: Search, layout: null},
]
const privateRoutes = [

]

export {publicRoutes,privateRoutes}
