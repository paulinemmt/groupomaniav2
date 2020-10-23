<template>
  <div id="app">
    <header>
      <div id="nav">
        <!-- Quand l'utilisateur n'est pas loggé -->
        <div class="">
          <router-link to="/signup">Signup</router-link> |
          <router-link to="/login">Login</router-link>
        </div>
        <!-- Quand l'utilisateur est loggé -->
        <div class="">
          <router-link to="/allpost">View All</router-link> |
          <router-link to="/create">Create a Post</router-link>|
          <router-link to="/profil">Profil</router-link>
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
    Footer,
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color:#909090 ;

    &.router-link-exact-active {
      color: #FD2D01;
    }
  }
}
</style>
