import React, { useState } from "react";

const LoginPage = ({ setUsername, setImgUrl }) => {
  const [localUserName, setLocalUserName] = useState("");
  const [localImgUrl, setLocalImgUrl] = useState("");
  return (
    <div>
      <form className='loginContainer'>
        <label>Username</label>
        <input
          className='inputs'
          type='text'
          required={true}
          name='username'
          value={localUserName}
          placeholder='Name...'
          onChange={(event) => {
            setLocalUserName(event.target.value);
          }}
        />
        {localUserName ? (
          <div className='usernameMsg'>&nbsp;</div>
        ) : (
          <div className='usernameMsg'>* required</div>
        )}

        <br />
        <label>Profile Picture</label>
        <input
          className='inputs'
          type='text'
          name='img url'
          value={localImgUrl}
          placeholder='Image url...'
          onChange={(event) => {
            setLocalImgUrl(event.target.value);
          }}
        />

        <br />
        <button
          className='Buttons'
          type='button'
          onClick={() => {
            setUsername(localUserName);
            setImgUrl(localImgUrl);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
