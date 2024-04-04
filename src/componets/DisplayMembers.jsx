import React, { useContext } from "react";
import { ApiMember } from "../ContextAPI/ApiMemberProvide";
import { useNavigate } from "react-router-dom";

function DisplayMembers() {
  const { getApiMembersList,DeleteSingleMember} = useContext(ApiMember);
  const navigate = useNavigate();

  const displayMembersCard = getApiMembersList.map((member, index) => {
    return (
      <>
        <div class="card " key={index}>
          <div class="card-body">
            <h5 class="card-title">{member.name}</h5>
            <p class="card-text">
              Organization: {member.companyname}
            </p>
            <p class="card-text text-muted">
              phone: {member.phone}
            </p>
            <p class="card-text text-muted">
              Email: {member.email}
            </p>
            <p class="card-text text-muted">
              City: {member.city}
            </p>  
            <div className="buttonsArea">
            <a class="btn btn-primary" onClick={()=>navigate(`/member/${member.id}`)}>
            <i class="bi bi-info-circle"></i>
            </a>
            <a class="btn btn-primary" onClick={()=>navigate(`/member/edit/${member.id}`)}>
            <i class="bi bi-pencil-fill"></i>
            </a>
            <a class="btn btn-primary" onClick={()=>DeleteSingleMember(member.id)}>
            <i class="bi bi-trash-fill"></i>
            </a>

            </div>
           
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <div className="DisplayPage">
        <div className="pageheading">
          <h1>Our Proud Members</h1>
        </div>

        <div className="MembersCards" >
          {
            displayMembersCard
          }
        </div>
      </div>
    </>
  );
}

export default DisplayMembers;
