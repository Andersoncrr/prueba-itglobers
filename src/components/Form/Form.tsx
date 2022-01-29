import React, { FormEvent } from "react";
import "./Form.css";
import { useForm } from "../../hooks/useForm";
import { formValues } from "./definitions";
import validator from "validator";
import Swal from "sweetalert2";
import { values } from "./const";

export const Form = ({ nameBusiness }: { nameBusiness: string }) => {
  const [formVal, handleFormInputChange, reset]: any = useForm(values);
  const { name, email, cellphone, age }: formValues = formVal;

  const handleInputChange = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      Swal.fire({
        position: "center",
        icon: "success",
        title:
          "Tu información fue enviada con éxito, estaremos en contacto con tigo",
        showConfirmButton: false,
        timer: 5000,
      });
      console.log(`Nombre: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Celular: ${cellphone}`);
      console.log(`Edad: ${age}`);
      reset();
    }
  };

  const isFormValid = () => {
    if (name.trim().length <= 3) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Por favor digite un nombre valido!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (!validator.isAlpha(name, "en-US", { ignore: " " })) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Por favor digite un nombre valido!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (!validator.isEmail(email)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Por favor digite un email valido!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (!validator.isMobilePhone(cellphone, ["es-CO"])) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Por favor digite un número de celular valido!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (!validator.isNumeric(age)) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "Por favor digite una edad valida!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    } else if (!validator.isInt(age, { min: 18, max: 100 })) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "La edad debe estar entre el rango de 18años a 100años!!",
        showConfirmButton: false,
        timer: 2000,
      });
      return false;
    }
    return true;
  };

  return (
    <div>
      <div className="overlay">
        <form
          onSubmit={handleInputChange}
          className="ui-panel login-panel animated bounceInDown"
        >
          <header>
            <div className="left logo">
              <p>Hola, bienvenido, sabemos que quieres viajar en</p>
              <p style={{ color: "red", fontSize: "1rem" }}>{nameBusiness}</p>
            </div>
          </header>

          <div className="login-form">
            <input
              type="text"
              placeholder="Nombre"
              name="name"
              value={name}
              onChange={handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Celular"
              name="cellphone"
              value={cellphone}
              onChange={handleFormInputChange}
            />
            <input
              type="text"
              placeholder="Edad"
              name="age"
              value={age}
              onChange={handleFormInputChange}
            />
          </div>

          <footer>
            <div className="right form-actions">
              <button className="register">Enviar</button>
            </div>
          </footer>
        </form>
      </div>
    </div>
  );
};
