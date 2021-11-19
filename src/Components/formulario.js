import React, { Fragment, useState } from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup';

const Formulario = () => {
 
  const valoresIniciales = {
    nombre: "",
    apellido: "",
    telefono: "",
    mail: "",
    birthday: "",
    genero: "",
    nacionalidad: "",
  }

  return (
    <Formik
      initialValues={valoresIniciales}

      validationSchema={Yup.object().shape({
        nombre:Yup.string().max(20,'Maximo 20 caracteres').required('Campo requerido'),
        apellido:Yup.string().required('Campo requerido'),
        telefono:Yup.string()
        .required('Campo requerido')
        .matches(/^[0-9]+$/, "Deben ser solo digitos")
        .min(5, 'Deben ser solo 5 digitos')
        .max(5, 'Deben ser solo 5 digitos'),
        mail:Yup.string().required('Campo requerido'),
        birthday:Yup.string().required('Campo requerido'),
        genero:Yup.string().required('Campo requerido'),
        nacionalidad:Yup.string().required('Campo requerido')
      })}

      onSubmit={(props) => {
        console.log(props)
      }}

    >
      {({errors, handleSubmit}) => (    
        <form onSubmit={handleSubmit}>
          <h1 className="titleForm">New User</h1>
          <div className="inputForm">
            <label>Nombre</label>
            <Field
              className="form-control"
              type="text"
              placeholder="ivan eduardo"
              name="nombre"
            />
            <ErrorMessage name="nombre" component={() => (<div class="alert alert-danger" role="alert">{errors.nombre}</div>)}/>
          </div>
          <div className="inputForm">
            <label>Apellido</label>
            <Field
              className="form-control"
              type="text"
              placeholder="salas"
              name="apellido"
            />
            <ErrorMessage name="apellido" component={() => (<div class="alert alert-danger" role="alert">{errors.apellido}</div>)}/>
          </div>
          <div className="inputForm">
            <label>Telefono</label>
            <Field
              className="form-control"
              type="number"
              name="telefono"
              placeholder="+549426135"
            />
            <ErrorMessage name="telefono" component={() => (<div class="alert alert-danger" role="alert">{errors.telefono}</div>)}/>
          </div>
          <div className="inputForm">
            <label>Mail</label>
            <Field
              className="form-control"
              type="mail"
              name="mail"
              placeholder="johndoe@mail.com"
            />
            <ErrorMessage name="mail" component={() => (<div class="alert alert-danger" role="alert">{errors.mail}</div>)}/>
          </div>
          <div className="inputForm">
            <label>Fecha de Nacimiento</label>
            <Field
              className="form-control"
              type="date"
              name="birthday"
            />
            <ErrorMessage name="birthday" component={() => (<div class="alert alert-danger" role="alert">{errors.birthday}</div>)}/>
          </div>
          <div className="inputForm">
            <label className="inputBlock">Género</label>
            <div>
              <Field
                className="form-check-input"
                type="radio"
                name="genero"
                value="F"
              />
              <label className="inputGenre">Femenino</label>
            </div>
            <div>
              <Field
                className="form-check-input"
                type="radio"
                name="genero"
                value="M"
              />
              <label className="inputGenre">Masculino</label>
              <ErrorMessage name="genero" component={() => (<div class="alert alert-danger" role="alert">{errors.genero}</div>)}/>
            </div>
          </div>
          <div className="inputForm">
            <label className="inputBlock">Nacionalidad</label>
            <Field
              className="form-select"
              name="nacionalidad"
              as="select"
            >
              <option value="">Seleccione</option>
              <option value="argentina">Argentina</option>
              <option value="Afganistan">Afganistán</option>
              <option value="Albania">Albania</option>
              <option value="Alemania">Alemania</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
            </Field>
            <ErrorMessage name="nacionalidad" component={() => (<div class="alert alert-danger" role="alert">{errors.nacionalidad}</div>)}/>
          </div>
          <div className="inputForm d-grid gap-2 formButton">
            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default Formulario;

// const [datos, setDatos] = useState({
//   nombre: '',
//   apellido:'',
// })

// const handleInputChange = (event) => {
//   console.log(event.target.value)
//   setDatos({
//     ...datos,
//     [event.target.name] : event.target.value
//   })
// }

// <Fragment>
// <h1>Formulario</h1>
// <form className="row">
//   <div className="col-md-3">
//     <input
//       placeholder="Ingrese Nombre"
//       className="form-control"
//       type="text"
//       name="nombre"
//       onChange={handleInputChange}
//     ></input>
//   </div>
//   <div className="col-md-3">
//     <input
//       placeholder="Ingrese Apellido"
//       className="form-control"
//       type="text"
//       name="apellido"
//       onChange={handleInputChange}
//     ></input>
//   </div>
//   <div className="col-md-3">
//     <button className="btn btn-primary" type="submit">Enviar</button>
//   </div>
//   <h3>{datos.nombre} - {datos.apellido}</h3>
// </form>
// </Fragment>

// let camion = 'mercedes'
// const [datos, setDatos] = useState({
//   nombre: "",
//   apellido: "",
//   telefono: 0,
//   mail: "",
//   birthday: "",
//   genero: "",
//   nacionalidad: "",
// });

// const handleInputChange = (event) => {

//   setDatos({
//     ...datos,
//     // event.target.name:event.target.value
//     [event.target.name]:event.target.value,
//   });
// };

// function clickAlert() {

// }
