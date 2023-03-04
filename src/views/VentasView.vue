<template>
  <div class="venta">
    <h4>Número de venta</h4>
    <input type="number" placeholder="Nro. Venta" v-model="numeroVenta">

    <h4>Cédula</h4>
    <input type="number" placeholder="Cédula" v-model="cedula">

    <button v-on:click="guardar">Guardar</button>
  </div>

  <div class="agregar">
    <h4>Código de barras</h4>
    <input type="tet" placeholder="Código de barra" v-model="codigoBarra">

    <h4>Cantidad</h4>
    <input type="number" placeholder="Cantidad" v-model="cantidad">

    <button v-on:click="agregar">Agregar</button>

    <section id="resultado">
      <tr v-for:="item in lista">{{ item }}</tr>
    </section>

    <p>{{ mensaje }}</p>
  </div>
</template>

<script>
import {ingresarVentaFachada} from '@/js/procesarVentas.js'
import {obtenerTodosFachada} from '@/js/procesarProductos.js'
import {ingresardetalleVentaFachada} from '@/js/procesarDetalle.js'

export default {
    data(){
        return{
            numeroVenta: null,
            cedula: null,
            codigoBarra: null,
            cantidad: null,
            listaProd: [],
            listaDetalle: [],
            mensaje: null,
            mostrar:false,
            total: 0
        }
    },
    methods:{
        guardar(){
          const venta = {
                  numeroVenta: this.numeroVenta,
                  cedula: this.cedula,
                  total: this.total
               }
          ingresarVentaFachada(venta)
        },
        agregar(){
          this.listaProd = obtenerTodosFachada()
          for (const item in this.listaProd) {
            if (item.codigoBarra.includes(this.codigoBarra) && item.stock > 0  
                                                                && this.cantidad < item.stock){
               const detalle = {
                  cantidad: this.cantidad,
                  precioUnitario: item.precioUnidad,
                  subtotal: item.precioUnidad*this.cantidad
               }
               ingresardetalleVentaFachada(detalle)
               this.listaDetalle.push(detalle)

            }else{
              this.mostrar = true
              this.mensaje = "Error verifique los campos ingresados"
            }
          }
    }
  }
}
</script>

<style>

template{
  text-align: center;
  align-content: center;
}
</style>