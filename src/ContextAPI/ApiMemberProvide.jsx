import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ApiMember = createContext(); //Context Crated With name of  ApiMember

export const ApiMemberProvider = ({ children }) => {
  //Context Variables || States || Functions

  // Variables || States
  const API =
    "https://66071c40be53febb857f2bb5.mockapi.io/phonekadai/membership"; //Api
  const [getApiMembersList, setgetApiMembersList] = useState([]); //Overall Members List
  const [geteditMemberList, setgeteditMemberList] = useState();
  const navigate = useNavigate();

  // Context Functions
  

  //To Get List Of Members And Set to getApiMembersList
  const GetApiMemberListFromContext = async () => {
    try {
      // useEffect(() => {
      const data1 = axios.get(`${API}`, {
        method: "GET",
      });
      data1
        .then((data) => {
          setgetApiMembersList(data.data);
        })
        .then(console.log("Api Sucessfull"));
      // }, []);
    } catch (error) {
      console.log(error);
    }
  };

  //to get Single Member Details and set at geteditMemberslist

  const getSingleMember = async () => {
    const { id } = useParams();
    useEffect(() => {
      const data1 = axios.get(`${API}/${id}`, {
        method: "GET",
      });
      data1
        .then((data) => setgeteditMemberList(data.data))
        .then(console.log("Get API Successfull"));
      console.log(data1);
    }, [id]);
  };

  // Update Exxsting Member details in Axios Put

  const updateSingleMember = async (
    formName,
    formEmail,
    formPhone,
    formWebsite,
    id
  ) => {
    const updateData = {
      name: formName,
      email: formEmail,
      phone: formPhone,
      website: formWebsite,
    };
    await axios.put(`${API}/${id}`, updateData);
    GetApiMemberListFromContext();
  };

  // Add New Member
  const AddSingleMember = async (
    formName,
    formEmail,
    formPhone,
    formWebsite,
    city,
    companyname,
    companycatchPhrase,
    companybs,
    suite,
    username,
    zipcode,
    street
  ) => {

    console.log("In Post Api");
    const addNewMember = {
      name:formName,
      email:formEmail,
      phone:formPhone,
      website:formWebsite,
      city,
      companyname,
      companycatchPhrase,
      companybs,
      suite,
      username,
      zipcode,
      street
    }
    await axios.post(API,addNewMember).then(console.log("Post Is Successfull"))
    GetApiMemberListFromContext();
  };

  //Delete Single Member
  const DeleteSingleMember =async(id)=>{
    console.log("In Delete Api"+id);
    await axios.delete(`${API}/${id}`).then(console.log("Deleted Sussfully"))
    GetApiMemberListFromContext();
  }
  return (
    //Context API provides Data to Application
    <ApiMember.Provider
      value={{
        getApiMembersList,
        setgetApiMembersList,
        API,
        GetApiMemberListFromContext,
        geteditMemberList,
        setgeteditMemberList,
        getSingleMember,
        navigate,
        updateSingleMember,
        AddSingleMember,
        DeleteSingleMember
      }}
    >
      {children}
    </ApiMember.Provider>
  );
};
