import React, { useContext, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Navigationbar from "./componets/Navigationbar";
import { GetApiMemberList } from "./AxiosFectchAPI.jsx/AxiosFetch";
import { ApiMember } from "./ContextAPI/ApiMemberProvide";
import DisplayMembers from "./componets/DisplayMembers";
import MoreInfo from "./componets/MoreInfo";
import AddMember from "./componets/AddMember";
import EditInfo from "./componets/EditInfo";

function App() {
  const navigate = useNavigate();
  const {getApiMembersList,GetApiMemberListFromContext} = useContext(ApiMember)
  useEffect(() => {
    GetApiMemberListFromContext();
  }, [])
  
  

  return (
    <>
      {/* Navigation Bar */}
      <Navigationbar />
      <div className="BodyArea">
        
      <Routes>
        <Route path="/" element={<DisplayMembers />}></Route>
        <Route path="/member/:id" element={<MoreInfo />}></Route>
        <Route path="/addmember" element={<AddMember />}></Route>
        <Route path="/member/edit/:id" element={<EditInfo/>}></Route>
      </Routes>
      
      </div>
      
    </>
  );
}

export default App;
