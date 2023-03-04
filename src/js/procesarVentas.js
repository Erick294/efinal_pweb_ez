import axios from 'axios'
//Fachadas
export const ingresarVentaFachada = async (body) =>{
    await ingresarVenta(body)
}

export const obtenerVentaIdFachada = async (id) =>{
    await obtenerVenta(id)
}

export const obtenerTodasVentasFachada = async () =>{
    await obtenerTodasVentas()
}

export const actualizarFachada = async (id, body) =>{
    await actualizarVenta(id, body)
}


//CRUD
const ingresarVenta = (body) =>{
    axios.post(`http://localhost:8081/API/Ventas/V1/ventas`, body).then(r=>r.data)
}

const obtenerVenta = async (id) =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/ventas/${id}`).then(r=>r.data)
    return data
}

const actualizarVenta = async (id, body) =>{
    axios.put(`http://localhost:8081/API/Ventas/V1/ventas/${id}`, body).then(r=>r.data)
}

const obtenerTodasVentas = async () =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/ventas`).then(r=>r.data)
    return data
}