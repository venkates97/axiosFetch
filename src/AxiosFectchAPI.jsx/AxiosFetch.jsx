import React, { useEffect } from 'react'
import axios from "axios";
import { useContext } from 'react';
import { ApiMember } from '../ContextAPI/ApiMemberProvide';
import { useParams } from 'react-router-dom';



export const GetApiMemberList = async()=>{
    const {API,setgetApiMembersList} = useContext(ApiMember)

        useEffect(() => {
         const data1 = axios.get(
            API,
            {
                method: "GET"
            }
        )
         data1.then((data)=>{setgetApiMembersList(data.data)})
        }, [])
        
    }


    