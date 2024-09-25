import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");

  const manejarCambioEmail = (e) => {
    setEmail(e.target.value);
  };

  const manejarCambioContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!email.trim() || !contraseña.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    alert("¡Inicio de sesión exitoso!");
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Iniciar Sesión</h2>
        <form className="w-50 mx-auto" onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={manejarCambioEmail}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={contraseña}
              onChange={manejarCambioContraseña}
              required
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
