import React from "react";
import logo from "../Images/b2.jpg";
import "bootstrap";

// import logon from "../Assets/images/b2.jpg"
// import logone from "../Assets/images/b3.jpg"

const Prueba = () => {
  return (
    <div class="col ">
      <div class="shadow-sm ">
        <img src={logo} alt="" class="img-fluid" width="80"></img>
        <div class="card-body text-center text-light">
          <h4 class="card-text text-black">
            <strong>Precio $0000,00</strong>
          </h4>
          <hr></hr>
          <p class="card-text text-black">
            Te ofrecemos calidad y confort en indumentarias
            <strong>CONSULTANOS </strong>
          </p>
          <div class="text-center align-items-center text-black">
            <div class="btn-group">
              <a href="#a" class="btn btn-warning my-0 mx-0">
                Comprar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    //     <div className='container fluid w-60'>
    //         <div classname="card d-flex justify-content-center " >
    //   <img src={logo} class="card-img-top" alt="logo" width="100"></img>
    //   <div class="card-body ">
    //     <h5 class="card-title d-flex justify-content-center">Título de la tarjeta</h5>
    //     <p class="card-text d-flex justify-content-center">ejemplo rápidoxsddsd</p>
    //     <a href="#xd" class="btn btn-primary d-flex justify-content-center">lugar</a>
    //   </div>
    // </div>
    //     </div>
  );
};

export default Prueba;
