import axios from 'axios'
//Fachadas
export const ingresarDetalleVentaFachada = async (body) =>{
    await ingresarVenta(body)
}

export const obtenerDetalleVentaIdFachada = async (id) =>{
    await obtenerVenta(id)
}

export const obtenerTodosDetallesVentasFachada = async () =>{
    await obtenerTodasVentas()
}

export const actualizarFachada = async (id, body) =>{
    await actualizarVenta(id, body)
}


//CRUD
const ingresarVenta = (body) =>{
    axios.post(`http://localhost:8081/API/Ventas/V1/detalle_ventas`, body).then(r=>r.data)
}

const obtenerVenta = async (id) =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/detalle_ventas/${id}`).then(r=>r.data)
    return data
}

const actualizarVenta = async (id, body) =>{
    axios.put(`http://localhost:8081/API/Ventas/V1/detalle_ventas/${id}`, body).then(r=>r.data)
}

const obtenerTodasVentas = async () =>{
    data = axios.get(`http://localhost:8081/API/Ventas/V1/detalle_ventas`).then(r=>r.data)
    return data
}