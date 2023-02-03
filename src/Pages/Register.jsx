import React from "react";
import Add from "../img/add.png";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, storage, db } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Register = () => {

  const [err, setErr] = useState(false);
  const navigate = useNavigate()


  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          setErr(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
             await setDoc(doc(db,"userChats", res.user.uid), {})
             navigate("/")
          });
        }
      );
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">People's Chat</span>
        <span className="title">Register </span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name"></input>
          <input type="email" placeholder="email"></input>
          <input type="password" placeholder="password"></input>
          <input style={{ display: "none" }} type="file" id="file"></input>
          <label htmlFor="file">
            <img src={Add} alt=""></img>
            <span>Add to avatar</span>
          </label>
          <button>sign up </button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You do have an account? login</p>
      </div>
    </div>
  );
};

export default Register;
