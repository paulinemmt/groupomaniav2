<template>
<div id="app">

  <header>
    <div id="nav">
      <!-- User not connected -->
      <div class="" v-if =" id === null " >
        <router-link to="/signup">Signup</router-link> |
        <router-link to="/login">Login</router-link>  
      </div>
      <!-- User connected-->
      <div class="" v-else>  
        <router-link to="/allpost">View All</router-link> |
        <router-link to="/create">Create a Post</router-link> |
        <router-link to="/profil">Profil</router-link> |
        <a href="#" v-on:click="exitUser">Exit</a> 
      </div>
    </div> 
    <Header/>
  </header>

  <body>
    <router-view/>
  </body>

  <footer>
    <Footer/>
  </footer>

</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      id: ''
    }
  },
  mounted() {
    let idUser = localStorage.getItem('Id');
    console.log(idUser);
    this.id = idUser;
  },
  methods: {
    exitUser (){
       localStorage.removeItem('Id');
       localStorage.removeItem('token');
       localStorage.removeItem('isAdmin');
       location.replace(location.origin + "/signup#/signup");
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 1.2rem;
    color:#909090 ;
      &:hover{
        color:#000;
      }

    &.router-link-exact-active {
      color: #FD2D01;
    }
  }
}
</style>
