import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTechs } from "../../actions/techActions";

const AddTechModal = ({ addTechs, tech: { tech, loading } }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the first and last name" });
      let instance = M.Modal.getInstance(
        document.getElementById("add-log-modal")
      );
      instance.open();
    } else {
      console.log(firstName, lastName);
      setFirstName("");
      setLastName("");
      addTechs({
        firstName,
        lastName,
      });
      M.toast({ html: `${firstName} ${lastName} was added as a tech` });
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First Name
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last Name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer center-align'>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect blue btn center-align'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddTechModal.propTypes = {
  tech: PropTypes.object.isRequired,
  addTechs: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

export default connect(mapStateToProps, { addTechs })(AddTechModal);
