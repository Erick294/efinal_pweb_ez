import axios from 'axios'
//Fachadas
export const ingresarFachada = async (body) =>{
    await ingresarProducto(body)
}

export const obtenerIdFachada = async (id) =>{
    await obtenerProducto(id)
}

export const obtenerTodosFachada = async () =>{
    await obtenerTodosProducto()
}

export const actualizarFachada = async (id, body) =>{
    await actualizarProducto(id, body)
}


//CRUD
const ingresarProducto = (body) =>{
    axios.post(`http://localhost:8081/API/Ventas/V1/productos`, body).then(r=>r.data)
}

const obtenerProducto = async (id) =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/productos/`, id).then(r=>r.data)
    return data
}

const actualizarProducto = async (id, body) =>{
    axios.put(`http://localhost:8081/API/Ventas/V1/productos/${id}`, body).then(r=>r.data)
}

const obtenerTodosProducto = async () =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/productos`).then(r=>r.data)
    return data
}

