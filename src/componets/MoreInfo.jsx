import React, { useContext, useEffect, useState } from "react";
import { ApiMember } from "../ContextAPI/ApiMemberProvide";
import { useParams } from "react-router-dom";
import axios from "axios";

function MoreInfo() {
  const { geteditMemberList, getSingleMember,navigate} = useContext(ApiMember);
  getSingleMember();

  const DisplayDetails = () => {
    return (
      <>
      {
        console.log(geteditMemberList)
      }
        <div class="jumbotron">
          <h1 class="display-4">{geteditMemberList?.name}</h1>
          <p class="lead">
            <i class="bi bi-envelope"></i> {geteditMemberList.email} ||{" "}
            <i class="bi bi-telephone"></i> {geteditMemberList.phone}
          </p>
          <hr class="my-4" />
          <p>
            <i class="bi bi-building"></i> <b>Company Details</b>
          </p>
          <p className="card-text">
            <b>{geteditMemberList.companyname}</b>
          </p>
          <p className="card-text">{geteditMemberList.companybs}</p>
          <p className="card-text">{geteditMemberList.companycatchPhrase}</p>
          <p className="card-text">
            <i class="bi bi-geo-alt"></i>{" "}
            <b>
              {geteditMemberList.suite},{" "}
              {geteditMemberList.street},{" "}
              {geteditMemberList.city} -{" "}
              {geteditMemberList.zipcode}
            </b>
          </p>
          <div className="buttonMoreInfo">
          <a class="btn btn-primary" onClick={() => navigate("/")}>
          <i class="bi bi-arrow-left"> Home</i>
          </a>
          {console.log("get Id" + geteditMemberList.id)}
          <a class="btn btn-primary" onClick={() => navigate(`/member/edit/${geteditMemberList.id}`)}>
            <i class="bi bi-pencil-fill"> Edit</i>
          </a>
          <a class="btn btn-primary" onClick={() => navigate(`/`)}>
            <i class="bi bi-trash-fill"> Delete</i>
          </a>
          </div>
        </div>
      </>
    );
  };

  return <>{geteditMemberList ? <DisplayDetails /> : <p>Loading</p>}</>;
}

export default MoreInfo;
