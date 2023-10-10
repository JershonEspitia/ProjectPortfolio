export const attributes = {
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
    "idiomas": "string",
    "imgs": "string",
}

export const endPoint = "/profiles/"

// let obj = {
//     "name": "Santiago",
//     "cedula": 1098764527,
//     "fechaNacimiento": "1980-10-10",
//     "ciudad": "Santa Marta",
//     "telefonos": [3187653399, 6098765],
//     "correos": ["camilo@gmail.com", "camilo2@gmail.com"], 
//     "socials": ["https://github.com/camilo", "https://github.com/camilo"],
//     "about": "Esta es la descripcion de mi perfil",
//     "hobbies": ["Futbol", "Basketball", "videojuegos"],
//     "experiences": ["Gerente - AMB", "Jefe infraestructura - UNE"],
//     "skills": ["Java", "Python", "C++"],
//     "idiomas": ["Español", "Ingles"],
//     "imgs": "https://media.gq.com.mx/photos/609c0fdeee4372271f0b9056/1:1/w_2000,h_2000,c_limit/salir%20guapo%20en%20fotos-605380757.jpg"
// }

// console.log(await getOne({endPoint, cedula: 1232888181}))
// console.log(await getAll({endPoint}))
// console.log(await postAll({endPoint, attributes, obj}))
// console.log(await deleteOne({endPoint, id: 2}))
// console.log(await putOne({endPoint, attributes, obj, id: 2}))