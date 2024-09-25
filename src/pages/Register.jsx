import React from "react";
import { useState } from "react";

const Register = () => {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");

  const manejarCambioCorreo = (e) => {
    setCorreo(e.target.value);
  };

  const manejarCambioContraseña = (e) => {
    setContraseña(e.target.value);
  };

  const manejarCambioConfirmarContraseña = (e) => {
    setConfirmarContraseña(e.target.value);
  };

  const manejarEnvio = (e) => {
    e.preventDefault();

    if (!correo.trim() || !contraseña.trim() || !confirmarContraseña.trim()) {
      alert("Todos los campos son obligatorios.");
      return;
    }

    if (contraseña.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (contraseña !== confirmarContraseña) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    alert("¡Registro exitoso!");
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Registro</h2>
        <form className="w-50 mx-auto" onSubmit={manejarEnvio}>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={correo}
              required
              onChange={manejarCambioCorreo}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={contraseña}
              required
              onChange={manejarCambioContraseña}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirma tu contraseña"
              value={confirmarContraseña}
              required
              onChange={manejarCambioConfirmarContraseña}
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

export default Register;
