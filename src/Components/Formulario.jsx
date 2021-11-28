import React from "react";
import { Formik } from "formik";
import * as Yup from 'yup';
import Input from "./Input";

const Formulario = (props) => {

  const valoresIniciales = {
    name: "",
    brand: "",
    color: "",
    sizeType: "",
  }

  const validSchema = Yup.object().shape({
    brand: Yup.string().required('Campo requerido'),
    color: Yup.string().required('Campo requerido'),
    name: Yup.string().min(5, 'Deben ser solo 5 digitos')
      .max(5, 'Deben ser solo 5 digitos').required('Campo requerido')
    ,
    sizeType: Yup.string().required('Campo requerido')
  })

  return (
    <Formik
      initialValues={valoresIniciales}
      validationSchema={validSchema}
      onSubmit={ (values) => { props.onClick(values) }}
    >
      {({ errors, handleSubmit }) => (
        <form onSubmit={handleSubmit} className='formContainer'>
          <h1 className="titleForm">New User</h1>
            <Input
              label="Name"
              type='text'
              placeholder='Mazda'
              name='name'
              error={errors.name}
            />
            <Input
              label='Brand'
              name='brand'
              error={errors.brand}
              className='form-select'
              type='select'
              options={['BMW','RENAULT','FIAT','FORD']}
            />
            <Input
              label='Color'
              name='color'
              error={errors.color}
              className='form-select'
              type='select'
              options={['BLUE','RED','GREY','WHITE']}
            />
            <Input
              label='Size'
              name='sizeType'
              error={errors.sizeType}
              className="form-check-input"
              type='radio'
              options={
                [
                  {
                    value: '2',
                    label: '2 Puertas'
                  },{
                    value: '4',
                    label: '4 Puertas'
                  }
                ]
              }
            />
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
