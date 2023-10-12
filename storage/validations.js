import url from "./config.js";

export const validationObject = ({attributes, obj={}})=>{
    if(obj.constructor.name !== "Object" || Object.keys(obj).length === 0) return { status: 400, message: `Por favor ingrese los datos`};
    
    let body = {};
    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

    for(const key in attributes) {

        if(!(key in obj)) return { status: 400, message: `Por favor ingrese ${key}.` };

        let keysArrays = ["telefonos", "correos", "socials", "hobbies", "experiences", "skills", "idiomas"];
        let error = false;
        let tipoError = "";

        if(keysArrays.includes(key)) {
            body[key] = [];
            obj[key].forEach(element => {
                if (element.toString().includes("<")) error = true, tipoError = element;
                if (key === "correos"){
                    if(emailPattern.test(element)){
                        body[key].push(element);
                    } else {
                        error = true, tipoError = element;
                    }
                } else if (key === "socials"){
                    if(urlPattern.test(element)){
                        body[key].push(element);
                    } else {
                        error = true, tipoError = element;
                    }
                } else if(typeof(element) !== attributes[key]) {
                    error = true, tipoError = element;
                } else {
                    body[key].push(element);
                }
            });
        } else {
            
            if (obj[key].toString().includes("<")) error = true, tipoError = obj[key];
            if (datePattern.test(obj[key])) {
                let date = new Date(obj[key]);
                if (!(date && date.getFullYear() <= 2023)) return { status: 400, message: `El dato (fechaLanzamiento) ${obj[key]} no cumple con el formato`};
                body[key] = date.toISOString().split("T")[0];
            } else if(emailPattern.test(obj[key])) {

            } else {
                if(typeof(obj[key]) !== attributes[key]) return { status: 400, message: `El dato ${key} no cumple con el formato`};
                body[key] = obj[key];
            }
        }

        if(error) return { status: 400, message: `El tipo de dato ingresado ${tipoError} no cumple el formato.` };
    };

    return body;
};

export const validarCedula = ({resAll, cedula, id}) => {
    console.log(cedula, id);

    let cedulaExist = false;
    resAll.forEach(element => {
        console.log(typeof(element.cedula), element.cedula, typeof(element.id), element.id);

        console.log(element.cedula === Number(cedula),element.id === id,!(element.cedula === Number(cedula) && element.id === id))
        if(element.cedula === Number(cedula) && element.id === id) cedulaExist = false;
        else if(element.cedula === Number(cedula)) cedulaExist = true;
    });
    return cedulaExist;
};