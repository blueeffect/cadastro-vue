<template>
  <div id="app">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1> HTTP </h1>
            <div class="form-group">
              <label>Usuario</label>
              <input type="text" class="form-control" v-model="user.username">
            </div>
             <div class="form-group">
              <label>E-mail</label>
              <input type="text" class="form-control" v-model="user.useremail">
            </div>
            <button class="btn btn-primary" @click="enviar">Enviar</button>
            <hr>
            <button class="btn btn-primary" @click="pegaDados">Pega dados</button>
            <br><br>
              <ul class="list-group">
                <li class="list-group-item" v-for="u in users">{{u.username}} -- {{u.useremail}}</li>
              </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: {
          username: '',
          useremail: ''
        },
        users: []
      }
    },
    methods: {
      enviar() {
        // Metodo usado para fazer POST, sem usar o recurso $resource
        // this.$http.post('data.json', this.user)
        //   .then(response => {
        //     console.log(response);
        //   }, error => {
        //     console.log(error);
        //   });
        this.resource.save({}, this.user);
      },
      pegaDados () {
        this.$http.get('data.json')
              .then(response => {
                return response.json();
              })
              .then(data => {
                const resultArray = [];
                for (let key in data) {
                  resultArray.push(data[key]);
                }
                this.users = resultArray; 
              });
      }
    },
    created() {
      this.resource = this.$resource('data.json');
    } 
  }
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>
