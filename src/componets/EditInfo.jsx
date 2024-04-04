import React, { useContext, useState } from "react";
import { ApiMember } from "../ContextAPI/ApiMemberProvide";

function EditInfo() {
  const { getSingleMember, geteditMemberList, navigate, updateSingleMember } =
    useContext(ApiMember);
  getSingleMember();

  const GetForms = () => {
    const [formName, setformName] = useState(geteditMemberList.name);
    const [formEmail, setformEmail] = useState(geteditMemberList.email);
    const [formPhone, setformPhone] = useState(geteditMemberList.phone);
    const [formWebsite, setformWebsite] = useState(geteditMemberList.website);
    console.log(formWebsite);

    const HandleSave = () => {
      console.log("Handle Save");
      // To Axios API Put Call Function from Context API
      updateSingleMember(
        formName,
        formEmail,
        formPhone,
        formWebsite,
        geteditMemberList.id
      );

      navigate("/");
    };

    return (
      <>
        <div className="formholder">
          {console.log(geteditMemberList)}
          <form className="formAD">
            <div class="form-name">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={formName}
                onChange={(e) => setformName(e.target.value)}
              />
            </div>
            <div className="form-email">
              <label for="formGroupExampleInput">Email</label>
              <input
                type="email"
                class="form-control"
                id="formGroupExampleInput"
                value={formEmail}
                onChange={(e) => setformEmail(e.target.value)}
              />
            </div>
            <div className="form-phone">
              <label for="formGroupExampleInput">Phone</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={formPhone}
                onChange={(e) => setformPhone(e.target.value)}
              />
            </div>
            <div className="form-website">
              <label for="formGroupExampleInput">Website</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={formWebsite}
                onChange={(e) => setformWebsite(e.target.value)}
              />
            </div>
            <div className="buttonMoreInfo buttonHover">
              <button
                class="btn btn-primary "
                onClick={() => {
                  HandleSave();
                }}
              >
                <i class="bi bi-save"> save</i>
              </button>

              <a class="btn btn-primary" onClick={() => navigate("/")}>
              <i class="bi bi-arrow-left"> Cancel</i>
              </a>
            </div>
          </form>
        </div>
      </>
    );
  };
  return <>{geteditMemberList ? <GetForms /> : <p>Loading</p>}</>;
}

export default EditInfo;
