import React, { useContext, useState } from "react";
import { ApiMember } from "../ContextAPI/ApiMemberProvide";

function AddMember() {
  const { geteditMemberList, navigate, AddSingleMember } =
    useContext(ApiMember);

  const GetForms = () => {
    const [formName, setformName] = useState(null);
    const [formEmail, setformEmail] = useState(null);
    const [formPhone, setformPhone] = useState(null);
    const [formWebsite, setformWebsite] = useState(null);
    const [city, setcity] = useState(null);
    const [companyname, setcompanyname] = useState(null);
    const [companycatchPhrase, setcompanycatchPhrase] = useState(null);
    const [companybs, setcompanybs] = useState(null);
    const [suite, setsuite] = useState(null);
    const [username, setusername] = useState(null);
    const [zipcode, setzipcode] = useState(null);
    const [street, setstreet] = useState(null);

    console.log(formWebsite);

    const HandleAddMember = () => {
      console.log("Handle Save");
      AddSingleMember(
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
      );
      navigate("/");
    };

    return (
      <>
        <div className="formholder">
          {console.log(geteditMemberList)}
          <form>
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
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={formEmail}
                onChange={(e) => setformEmail(e.target.value)}
              />
            </div>
            <div class="form-username">
              <label for="formGroupExampleInput">Username</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={username}
                onChange={(e) => setusername(e.target.value)}
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
            <div class="form-companyname">
              <label for="formGroupExampleInput">Name</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={companyname}
                onChange={(e) => setcompanyname(e.target.value)}
              />
            </div>
            <div class="form-companybs">
              <label for="formGroupExampleInput">Business Line</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={companybs}
                onChange={(e) => setcompanybs(e.target.value)}
              />
            </div>
            <div class="form-companycatchPhrase">
              <label for="formGroupExampleInput">Company Phrase</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={companycatchPhrase}
                onChange={(e) => setcompanycatchPhrase(e.target.value)}
              />
            </div>
            <div class="form-suite">
              <label for="formGroupExampleInput">Floor/ODC</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={suite}
                onChange={(e) => setsuite(e.target.value)}
              />
            </div>
            <div class="form-street">
              <label for="formGroupExampleInput">Street</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={street}
                onChange={(e) => setstreet(e.target.value)}
              />
            </div>
            <div class="form-city">
              <label for="formGroupExampleInput">city</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={city}
                onChange={(e) => setcity(e.target.value)}
              />
            </div>
            <div class="form-zipcode">
              <label for="formGroupExampleInput">zipcode</label>
              <input
                type="text"
                class="form-control"
                id="formGroupExampleInput"
                value={zipcode}
                onChange={(e) => setzipcode(e.target.value)}
              />
            </div>
            <div className="buttonMoreInfo">
              <button
                class="btn btn-primary "
                onClick={() => {
                 formName ? HandleAddMember(): null;
                }}
              >
                <i class="bi bi-plus-circle-dotted"> Add</i>
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
  return (
    <>
      <GetForms />
    </>
  );
}

export default AddMember;
