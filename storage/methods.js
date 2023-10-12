import url from "./config.js";
import { validationObject, validarCedula } from "./validations.js";


const config = {
  method: undefined,
  headers: { "Content-Type": "application/json" },
  body: undefined,
};

const methods = {
  get: "GET",
  del: "DELETE",
  post: "POST",
  put: "PUT",
};

export const getOne = async ({endPoint, cedula}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido.` };
  if(!cedula || typeof(cedula) !== "number") return { status: 400, message: `Por favor ingrese la cedula o una cedula valida.` };
   
  config.method = methods.get;
  let resAll = await (await fetch(`${url}${endPoint}`, config)).json();

  let getId = -999;
  resAll.forEach(element => {
    if(cedula === element.cedula) getId = element.id;
  });

  if(getId !== -999) {
    let res = await (await fetch(`${url}${endPoint}${getId}`, config)).json();
    return res;
  } else {
    return { status: 400, message: `La cedula no esta registrada. valor: "${cedula}" ` };
  }
  
};

export const getAll = async ({endPoint}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  config.method = methods.get;
  let res = await (await fetch(`${url}${endPoint}`, config)).json();
  return res;
};

export const deleteOne = async ({endPoint, id}) => {
  console.log("asd",typeof(id), endPoint);

  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  if(!id || typeof(id) !== "number") return { status: 400, message: `Por favor ingrese el id o un id valido. valor: "${id}" ` };
  
  if (typeof id !== "number")
    return { status: 400, message: `El dato ${id} no cumple con el formato` };
  config.method = methods.del;
  let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  return "Perfil eliminado.";
};

export const postAll = async ({endPoint, attributes, obj}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };  
  if(!attributes || Object.keys(attributes).length === 0) return { status: 400, message: `Por favor ingrese los atributos. valor: "${attributes}" ` };

  const body = validationObject({attributes, obj});
  if(body.status) return body

  let resAll = await getAll({endPoint});
  const isOkCc = validarCedula({resAll, cedula: body.cedula})
  if(isOkCc) return { status: 400, message: `La cedula ${body.cedula} ya existe.`}

  if (body) {
    config.method = methods.post;
    config.body = JSON.stringify(body);
    let res = await (await fetch(`${url}${endPoint}`, config)).json();
    return "Perfil registrado.";
  } else {
    return "No se pudo realizar el POST";
  } 
  
};

export const putOne = async ({endPoint, attributes, obj, id}) => {
  if(!endPoint || endPoint.includes(" ")) return { status: 400, message: `Por favor ingrese el endPoint o un endPoint valido. valor: "${endPoint}" ` };
  if(!attributes || Object.keys(attributes).length === 0) return { status: 400, message: `Por favor ingrese los atributos. valor: "${attributes}" ` };
  if(!id || typeof(id) != "number") return { status: 400, message: `Por favor ingrese el id o un id valido. valor: "${id}" ` };

  const body = validationObject({attributes, obj});
  if(body.status) { console.log(body) }

  let resAll = await getAll({endPoint});
  const isOkCc = validarCedula({resAll, cedula: body.cedula, id})
  if(isOkCc) return { status: 400, message: `La cedula ${body.cedula} ya existe.`}

  let isOk = await (await fetch(`${url}${endPoint}${id}`, config)).json();
  if(!isOk.id) return { status: 400, message: `El id ${id} NO existe.`}

  if (isOk) {
    config.method = methods.put;
    config.body = JSON.stringify(body);
    let res = await (await fetch(`${url}${endPoint}${id}`, config)).json();
    return "Actualizacion exitosa.";
  } else {
    return "No se pudo realizar el PUT";
  }
};