import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user, logout, getUser } = useContext(UserContext);
  const [profileUser , setProfileUser] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        await getUser(); 
        setProfileUser(user); 
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, [user, getUser]);

  return (
    <div className="container mt-5">
      <div className="card-body text-center">
        <h2 className="card-title mb-2">Perfil de Usuario</h2>
        <h4 className="card-text"  >Email:{profileUser}</h4>
        <button className="btn btn-danger" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
