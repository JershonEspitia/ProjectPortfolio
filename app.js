import { postAll, getAll, getOne, deleteOne, putOne } from "./storage/methods.js"
import { attributes, endPoint } from "./storage/profile.js"

addEventListener("DOMContentLoaded", ()=>{
    functFormulario();
});


let functFormulario = () => {

    let btnRegistrar = document.querySelector("#btnRegistrar");
    let contenidoMain = document.querySelector("#contenidoMain");
    let migaPan = document.querySelector("#migaPan");

    btnRegistrar.addEventListener("click", ()=>{
        migaPan.textContent = "Registrar"
        contenidoMain.insertAdjacentHTML(
            "beforeend",
            `<form>
            <fieldset>
              <legend>Registrar Portafolio</legend> 
              <!--NOMBRE -->
              <div>
                <label>Nombre</label>
                <input type="text" id="name">
              </div>
              <!--CEDULA -->
              <div>
                <label>Cedula</label>
                <input type="number" id="cedula">
              </div>
              <!-- FECHA NACIMIENTO -->
              <div>
                <label>Fecha Nacimiento</label>
                <input type="date" id="fechaNacimiento">
              </div>
              <!--CIUDAD -->
              <div>
                <label>Ciudad</label>
                <input type="text" id="ciudad">
              </div>
              <!-- TELEFONO -->
              <div>
                <label>Telefono</label>
                <input type="tel" name="telefonos"></input>
              </div>
              <!-- Button -->
              <button id="addTelefono">Agregar otro telefono</button>
              <!-- Email -->
              <div>
                <label>Correo</label>
                <input type="email" name="correos">
              </div>
              <!-- Button -->
              <button id="addCorreo">Agregar otro correo</button>





              <!-- Number -->
              <div>
                <label for="number">number</label>
                <input type="number" id="number">
              </div>
              <!-- Password -->
              <div>
                <label for="password">password</label>
                <input type="password" id="password">
              </div>
              <!-- Time -->
              <div>
                <label for="time">time</label>
                <input type="time" id="time">
              </div>
              <!-- Checkbox -->
              <div>
                <label for="checkbox">checkbox</label>
                <input type="checkbox" id="checkbox">
              </div>
              <!-- Date -->
              <div>
                <label for="date">date</label>
                <input type="date" id="date">
              </div>
              <!-- Url -->
              <div>
                <label for="url">url</label>
                <input type="url" id="url">
              </div>
              <!-- Radio -->
              <div>
                <label for="radio">radio</label>
                <input type="radio" id="radio">
              </div>
              <!-- TextArea -->
              <div>
                <label for="textarea">textarea</label>
                <textarea type="textarea" id="textarea"></textarea>
              </div>
              <!-- Select -->
              <div>
                <label for="select">select</label>
                <select id="select">
                  <option value="opt1">opt1</option>
                  <option value="opt2">opt2</option>
                  <option value="opt3">opt3</option>
                </select>
              </div>
              
              <!-- NEW types - not supported by older web browsers -->
              
              <!-- Color -->
              <div>
                <label for="color">color</label>
                <input type="color" id="color"></input>
              </div>
              <!-- Datetime-local -->
              <div>
                <label for="datetime-local">datetime-local</label>
                <input type="datetime-local" id="datetime-local"></input>
              </div>
              <!-- Month -->
              <div>
                <label for="month">month</label>
                <input type="month" id="month"></input>
              </div>
              <!-- Range -->
              <div>
                <label for="range">range</label>
                <input type="range" id="range"></input>
              </div>
              <!-- Search -->
              <div>
                <label for="search">search</label>
                <input type="search" id="search"></input>
              </div>
              <!-- Tel -->
              <div>
                <label for="tel">tel</label>
                <input type="tel" id="tel"></input>
              </div>
              <!-- Week -->
              <div>
                <label for="week">week</label>
                <input type="week" id="week"></input>
              </div>
              
              <!-- Button -->
              <button>Submit</button>
            </fieldset>
          </form>`
        );
    });
}; 

{/* <div class="data">
    <div class="content-data">
        <div class="head">
            <h3>Sales Report</h3>
        </div>
        <!-- conteido -->
        <h1>Hola Mundo</h1>
    </div>
</div>

<div class="info-data">
<div class="card">
    <div class="head">
        <div>
            <h2>1500</h2>
            <p>Traffic</p>
        </div>
        <i class='bx bx-trending-up icon' ></i>
    </div>
    <span class="progress" data-value="40%"></span>
    <span class="label">40%</span>
</div>
</div> */}