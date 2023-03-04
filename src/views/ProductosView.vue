<template>
  <div class="home">
    <h1>Bienvenido al ingreso de productos</h1>

    <h4>Ingrese el nombre del producto</h4>
    <input type="text" placeholder="Nombre" v-model="nombre">

    <h4>Ingrese el código de barras</h4>
    <input type="text" placeholder="Código de barras" v-model="codigoBarras">

    <h4>Ingrese el stock</h4>
    <input type="number" placeholder="Stock" v-model="stock">

    <h4>Ingrese el precio por unidad</h4>
    <input type="number" placeholder="Precio unitario" v-model="precioUnidad">

    <button v-on:click="ingresarProducto">Ingresar</button>

    <h5 v-if="mostrar" id="mensaje">Ingresado correctamente</h5>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ingresarFachada from '@/js/procesarProductos.js'

export default {
  name: 'ProductosView',
  components: {
    HelloWorld
  },
  data(){
    return{
      id:null,
      codigoBarras:null,
      nombre:null,
      stock:null,
      precioUnidad:null,
      mostrar: false
    }
  },
  methods:{
    ingresarProducto(){
      const producto = {
        id: this.id,
        codigoBarras: this.codigoBarras,
        nombre: this.nombre,
        stock: this.stock,
        precioUnidad: this.precioUnidad
      }
      this.mostrar= true
      ingresarFachada(producto)
      this.resetear()
    },
    resetear(){
      this.id = null
      this.codigoBarras = null,
      this.nombre = null,
      this.stock = null,
      this.precioUnidad = null
    }
  }
}
</script>

<style scoped>

  #mensaje{
    color: aquamarine;
  }

  template{
    text-align: center;
    align-content: center;
  }
</style>