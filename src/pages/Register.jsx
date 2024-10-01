import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const { register } = useContext(UserContext);
  const navigate = useNavigate()

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const changeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("El password debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage(
        "El password y la confirmación del password deben ser iguales."
      );
      return;
    }

    try {
      await register(email, password);
      setMessage("Registro exitoso!");
      navigate('/')
    } catch (error) {
      setMessage("Error en el registro.");
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h2 className="text-center">Registro</h2>
        <form className="w-50 mx-auto" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="Ingresa tu correo"
              value={email}
              required
              onChange={changeEmail}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Ingresa tu contraseña"
              value={password}
              required
              onChange={changePassword}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirma tu contraseña"
              value={confirmPassword}
              required
              onChange={changeConfirmPassword}
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
        {message && <div className="alert mt-3">{message}</div>}
      </div>
    </>
  );
};

export default Register;
