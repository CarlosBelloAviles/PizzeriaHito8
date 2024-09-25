import React from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const name = "UsuarioRandom369";
    const email = "usuario_random369@gmail.com";
  const { logout } = useUser();

  return (
    <div className="container mt-5">
      <div className="card-body text-center">
        <h2 className="card-title mb-2">Perfil de Usuario</h2>
        <h4 className="card-text"  >{name}</h4>
        <p className="card-text" style={{color:"black"}}>Email: {email}</p>
        <button className="btn btn-danger" onClick={logout}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Profile;
