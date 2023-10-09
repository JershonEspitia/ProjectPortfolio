import { postAll } from "./methods.js"

const attributes = {
    "name": "string",
    "cedula": "number",
    "fechaNacimiento": "date",
    "ciudad": "string",
    "telefonos": "number",
    "correos": "string", 
    "socials": "string",
    "about": "string",
    "hobbies": "string",
    "experiences": "string",
    "skills": "string",
    "id": "number"
}

const endPoint = "/profiles/"

let obj = {
    "name": "Jershon",
    "cedula": 1232888181,
    "fechaNacimiento": "1997-05-01",
    "ciudad": "Bucaramanga",
    "telefonos": [3172660389, 6459875],
    "correos": ["jershonespitiarey@gmail.com", "jershonespitiarey@gmail.com"], 
    "socials": ["https://github.com/JershonEspitia/", "https://github.com/JershonEspitia/"],
    "about": "Esta es la descripcion de mi perfil",
    "hobbies": ["Futbol", "Basketball", "videojuegos"],
    "experiences": ["Gerente - AMB", "Jefe infraestructura - UNE"],
    "skills": ["Java", "Python", "C++"]
}

console.log(await postAll({endPoint, attributes, obj}))