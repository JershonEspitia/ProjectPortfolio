import {
  postAll,
  getAll,
  getOne,
  deleteOne,
  putOne,
} from "./storage/methods.js";
import { attributes, endPoint } from "./storage/profile.js";

addEventListener("DOMContentLoaded", () => {

  let btnRegistrar = document.querySelector("#btnRegistrar");
  let contenidoMain = document.querySelector("#contenidoMain");
  let migaPan = document.querySelector("#migaPan");

  btnRegistrar.addEventListener("click", () => {
    functFormulario({contenidoMain, migaPan});
    addCampo();
  });
  
});

let functFormulario = ({contenidoMain, migaPan}) => {

  migaPan.textContent = "Registrar";
  contenidoMain.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
              <form>
              <fieldset>
                <legend>Registrar Portafolio</legend> 

                <!--NOMBRE -->
                <div>
                  <label>Nombre</label>
                  <input type="text" id="name" required>
                </div>

                <!--CEDULA -->
                <div>
                  <label>Cedula</label>
                  <input type="number" id="cedula" required>
                </div>
                
                <!-- FECHA NACIMIENTO -->
                <div>
                  <label>Fecha Nacimiento</label>
                  <input type="date" id="fechaNacimiento" required>
                </div>

                <!--CIUDAD -->
                <div>
                  <label>Ciudad</label>
                  <input type="text" id="ciudad" required>
                </div>

                <!-- TELEFONOS -->
                <div>
                  <label>Telefono</label>
                  <input type="tel" name="telefonos" required></input>
                </div>
                <!-- Button -->
                <input id="btnTelefono" class="favorite styled" type="button" value="(+) Telefono" />

                <!-- CORREO -->
                <div>
                  <label>Correo</label>
                  <input type="email" name="correos" required>
                </div>
                <!-- Button -->
                <input id="btnCorreo" class="favorite styled" type="button" value="(+) Email" />

                <!--SOCIALS -->
                <div>
                  <label>Redes Sociales</label>
                  <input type="url" name="socials" placeholder="Link red social" required>
                </div>
                <!-- Button -->
                <input id="btnSocial" class="favorite styled" type="button" value="(+) Social" />

                <!--ABOUT -->
                <div>
                  <label>Sobre mi</label>
                  <textarea id="about" rows="4" cols="50" required></textarea>
                </div>

                <!--HOBBIES -->
                <div>
                  <label>Hobbie</label>
                  <input type="text" name="hobbies" required>
                </div>
                <!-- Button -->
                <input id="btnHobbie" class="favorite styled" type="button" value="(+) Hobbie" />

                <!--EXPERIENCES -->
                <div>
                  <label>Experiencia</label>
                  <input type="text" name="experiences" required>
                </div>
                <!-- Button -->
                <input id="btnExperience" class="favorite styled" type="button" value="(+) Experiencia" />

                <!--SKILLS -->
                <div>
                  <label>Skill</label>
                  <input type="text" name="skills" required>
                </div>
                <!-- Button -->
                <input id="btnSkill" class="favorite styled" type="button" value="(+) Skill" />

                <!--IDIOMA -->
                <div>
                  <label>Idioma</label>
                  <input type="text" name="idiomas" required>
                </div>
                <!-- Button -->
                <input id="btnIdioma" class="favorite styled" type="button" value="(+) Idioma" />
                
                <!-- Button -->
                <button>REGISTRAR</button>
              </fieldset>
            </form>
          </div>`
    );
};

let addCampo = () => {
  let btnTelefono = document.querySelector("#btnTelefono")
  let btnCorreo = document.querySelector("#btnCorreo")
  let btnSocial = document.querySelector("#btnSocial")
  let btnHobbie = document.querySelector("#btnHobbie")
  let btnExperience = document.querySelector("#btnExperience")
  let btnSkill = document.querySelector("#btnSkill")
  let btnIdioma = document.querySelector("#btnIdioma")

  btnTelefono.addEventListener("click", () => {
    btnTelefono.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="tel" name="telefonos" required></input>
        </div>`
    );
  });
  btnCorreo.addEventListener("click", () => {
    btnCorreo.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="email" name="correos" required>
        </div>`
    );
  });
  btnSocial.addEventListener("click", () => {
    btnSocial.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="url" name="socials" placeholder="Link red social" required>
        </div>`
    );
  });
  btnHobbie.addEventListener("click", () => {
    btnHobbie.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="text" name="hobbies" required>
        </div>`
    );
  });
  btnExperience.addEventListener("click", () => {
    btnExperience.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="text" name="experiences" required>
        </div>`
    );
  });
  btnSkill.addEventListener("click", () => {
    btnSkill.insertAdjacentHTML(
      "beforebegin",
      `<div>
          <input type="text" name="skills" required>
        </div>`
    );
  });
  btnIdioma.addEventListener("click", () => {
    btnIdioma.insertAdjacentHTML(
      "beforebegin",
      `<div>
            <input type="text" name="idiomas" required>
        </div>`
    );
  });
};

{
  /* <div class="data">
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
</div> */
}
