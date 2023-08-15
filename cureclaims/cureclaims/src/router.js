import HospitalInfoForm from "./component/hospitainfo";

import IllnessClaimForm from "./component/illnessinfo";
import Form from "./component/userinfo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";

function Router(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}>
            <Route index element={<HospitalInfoForm/>}/>
            
            <Route path="users" element={<Form/>}/>
            <Route path="illness" element={<IllnessClaimForm/>}/>
            


            </Route>
        </Routes>
    </BrowserRouter>
    )
}
export default Router