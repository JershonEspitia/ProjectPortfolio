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
    functAddField();
    functBtnSubmit();
    functTable(contenidoMain);
  });
  
});

let functFormulario = ({contenidoMain, migaPan}) => {

  migaPan.textContent = "Registrar";
  contenidoMain.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
              <form id="myForm">
              <fieldset>
                <legend>Registrar Portafolio</legend> 

                <!--NOMBRE -->
                <div>
                  <label>Nombre</label>
                  <input type="text" name="name" required>
                </div>

                <!--CEDULA -->
                <div>
                  <label>Cedula</label>
                  <input type="number" name="cedula" required>
                </div>
                
                <!-- FECHA NACIMIENTO -->
                <div>
                  <label>Fecha Nacimiento</label>
                  <input type="date" name="fechaNacimiento" required>
                </div>

                <!--CIUDAD -->
                <div>
                  <label>Ciudad</label>
                  <input type="text" name="ciudad" required>
                </div>

                <!-- TELEFONOS -->
                <div>
                  <label>Telefono (Ingresa 1 por campo)</label>
                  <input type="number" class="telefono" name="telefonos" required></input>
                </div>
                <!-- Button -->
                <input id="btnTelefono" class="favorite styled" type="button" value="(+) Telefono" />

                <!-- CORREO -->
                <div>
                  <label>Correo (Ingresa 1 por campo)</label>
                  <input type="email" class="correo" name="correos" required>
                </div>
                <!-- Button -->
                <input id="btnCorreo" class="favorite styled" type="button" value="(+) Email" />

                <!--SOCIALS -->
                <div>
                  <label>Redes Sociales (Ingresa 1 por campo)</label>
                  <input type="url" class="social" name="socials" placeholder="Link red social" required>
                </div>
                <!-- Button -->
                <input id="btnSocial" class="favorite styled" type="button" value="(+) Social" />

                <!--ABOUT -->
                <div>
                  <label>Sobre mi</label>
                  <textarea name="about" rows="4" cols="50" required></textarea>
                </div>

                <!--HOBBIES -->
                <div>
                  <label>Hobbie (Ingresa 1 por campo)</label>
                  <input type="text" class="hobbies" name="hobbies" required>
                </div>
                <!-- Button -->
                <input id="btnHobbie" class="favorite styled" type="button" value="(+) Hobbie" />

                <!--EXPERIENCES -->
                <div>
                  <label>Experiencia (Ingresa 1 por campo)</label>
                  <input type="text" class="experience "name="experiences" required>
                </div>
                <!-- Button -->
                <input id="btnExperience" class="favorite styled" type="button" value="(+) Experiencia" />

                <!--SKILLS -->
                <div>
                  <label>Skill/Lenguaje de programacion (Ingresa 1 por campo)</label>
                  <input type="text" class="skill" name="skills" required>
                </div>
                <!-- Button -->
                <input id="btnSkill" class="favorite styled" type="button" value="(+) Skill" />

                <!--IDIOMA -->
                <div>
                  <label>Idioma (Ingresa 1 por campo)</label>
                  <input type="text" class="idioma" name="idiomas" required>
                </div>
                <!-- Button -->
                <input id="btnIdioma" class="favorite styled" type="button" value="(+) Idioma" />
                
                <!--IMAGEN -->
                <div>
                  <label>Imagen</label>
                  <input type="url" name="imgs" required>
                </div>

                <!-- Button -->
                <button id="btnSubmit" type="submit">REGISTRAR</button>
              </fieldset>
            </form>
          </div>`
    );
};

let functAddField = () => {
  let btnTelefono = document.querySelector("#btnTelefono")
  let btnCorreo = document.querySelector("#btnCorreo")
  let btnSocial = document.querySelector("#btnSocial")
  let btnHobbie = document.querySelector("#btnHobbie")
  let btnExperience = document.querySelector("#btnExperience")
  let btnSkill = document.querySelector("#btnSkill")
  let btnIdioma = document.querySelector("#btnIdioma")

  let numTele = 1;
  let numCorreo = 1;
  let numSocial = 1;
  let numHobbie = 1;  
  let numExperience = 1;
  let numSkill = 1;
  let numIdioma = 1;

  btnTelefono.addEventListener("click", () => {
    if(numTele < 3){
      btnTelefono.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="number" class="telefono" name="telefonos/${numTele}" required></input>
      </div>`
      );
      numTele++;
    }
  });
  btnCorreo.addEventListener("click", () => {
    if(numCorreo < 3){
      btnCorreo.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="email" class="correo" name="correos/${numCorreo}" required>
      </div>`
      );
      numCorreo++;
    }
  });
  btnSocial.addEventListener("click", () => {
    if(numSocial < 3){
      btnSocial.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="url" class="social" name="socials/${numSocial}" placeholder="Link red social" required>
      </div>`
      );
      numSocial++; 
    }
  });
  btnHobbie.addEventListener("click", () => {
    if(numHobbie < 3){
      btnHobbie.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="text" class="hobbies" name="hobbies/${numHobbie}" required>
      </div>`
      );
      numHobbie++;
    }
  });
  btnExperience.addEventListener("click", () => {
    if(btnExperience < 3){
      btnExperience.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="text" class="experience "name="experiences/${numExperience}" required>
      </div>`
      );
      numExperience++;
    }
  });
  btnSkill.addEventListener("click", () => {
    if(numSkill < 3){
      btnSkill.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="text" class="skill" name="skills/${numSkill}" required>
      </div>`
      );
      numSkill++; 
    }
    
  });
  btnIdioma.addEventListener("click", () => {
    if(numIdioma < 3){
      btnIdioma.insertAdjacentHTML(
      "beforebegin",
      `<div>
      <input type="text" class="idioma" name="idiomas/${numIdioma}" required>
      </div>`
      );
      numIdioma++;  
    }
      
  });
};

let functBtnSubmit = () => {
    let myForm = document.querySelector("#myForm"); 

    myForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      let objForm = Object.fromEntries(new FormData(e.target));

      let obj = {};
      let values = ["telefonos", "correos", "socials", "hobbies", "experiences", "skills", "idiomas"];

      values.forEach(element => {
        obj[element] = []
      });

      for(let key in objForm) {

        if(key.includes("name")) obj[key] = objForm[key]
        else if(key.includes("cedula")) obj[key] = objForm[key]
        else if(key.includes("ciudad")) obj[key] = objForm[key]
        else if(key.includes("about")) obj[key] = objForm[key]
        else if(key.includes("imgs")) obj[key] = objForm[key]
        else if(key.includes("fechaNacimiento")) obj[key] = objForm[key]
        else if(values.includes(key.split("/")[0])){
          if(key.split("/")){
            obj[key.split("/")[0]].push(objForm[key])
          } else {
            obj[key] = objForm[key]
          }
        }
      };


      let buttonSubmit = document.querySelector("#btnSubmit");
      console.log(buttonSubmit);

      if(!buttonSubmit.class){
        console.log("ENTRA EN POST")
        let res = await postAll({ endPoint, attributes, obj });
        return alert(res);
      };
    });
};

let functTable = async(contenidoMain) => {

  contenidoMain.insertAdjacentHTML(
    "beforeend",
    `
    <div class="card">
      <h1>PORTAFOLIOS</h1>
      <div>
      <input id="searchInput" type="number" placeholder="Ingrese la cedula" >
      <input id="btnSearch" class="favorite styled" type="button" value="BUSCAR" />
      <input id="btnClear" class="favorite styled" type="button" value="LIMPIAR" />
      </div>
      <table class="rwd-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Cedula</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Correo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody id="myTabla">
        </tbody>
      </table>
    </div>
    `
  );

  let myTabla = document.querySelector('#myTabla');
  let profiles = await getAll({endPoint});
  profiles = profiles.map(
    (res) =>
      ` 
      <tr>
          <td>${res.id}</td>
          <td>${res.cedula}</td>
          <td>${res.name}</td>
          <td>${res.telefonos[0]}</td>
          <td>${res.correos[0]}</td>
          <td id="groupBtn">
            <input id="${res.id}" class="favorite styled btnRender" type="button" value="MOSTRAR" />
            <input id="${res.id}" class="favorite styled btnEditar" type="button" value="EDITAR" />
            <input id="${res.id}" class="favorite styled btnEliminar" type="button" value="ELIMINAR" />
          </td>
      </tr>
      `
  ); 
  myTabla.insertAdjacentHTML(
    "beforeend",
    `${profiles.join("")}`
  );

  functDelete();
  functSearch(contenidoMain);
};

let functDelete = () => {
  let btnDelete = document.querySelectorAll(".btnEliminar");

  btnDelete.forEach(element => {
    element.addEventListener("click", async () => {
      let id = element.id;
      id = Number(id);
      let res = await deleteOne({endPoint, id});
      if (res.message) return alert(res.message)
      else return alert(res)
    });
  });
};

let functSearch = (contenidoMain) => {
  let btnSearch = document.querySelector("#btnSearch");

  btnSearch.addEventListener("click", async () => {
    let cedula = document.querySelector("#searchInput")
    let myTabla = document.querySelector("#myTabla")
    cedula = Number(cedula.value)

    let profile = await getOne({endPoint, cedula});
    if(profile.status) alert(profile.message)
    else {
      myTabla.innerHTML = ""
      myTabla.insertAdjacentHTML(
        "beforeend",
        ` 
        <tr>
            <td>${profile.id}</td>
            <td>${profile.cedula}</td>
            <td>${profile.name}</td>
            <td>${profile.telefonos[0]}</td>
            <td>${profile.correos[0]}</td>
            <td id="groupBtn">
              <input id="${profile.id}" class="favorite styled btnRender" type="button" value="MOSTRAR" />
              <input id="${profile.id}" class="favorite styled btnEditar" type="button" value="EDITAR" />
              <input id="${profile.id}" class="favorite styled btnEliminar" type="button" value="ELIMINAR" />
            </td>
        </tr>
        `
      );
    }
  });

  document.querySelector("#btnClear").addEventListener("click", async () => {
    window.location.reload();
  });
};