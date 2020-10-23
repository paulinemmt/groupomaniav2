<template>
  <div id="app">
    <Header/>
    <InscriptionForm/>
    <ConnexionForm/>
    <Post/>
    <CreatePostForm/>
    <ProfilForm/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import InscriptionForm from './components/InscriptionForm'
import ConnexionForm from './components/ConnexionForm'
import Post from './components/Post'
import CreatePostForm from './components/CreatePostForm'
import ProfilForm from './components/ProfilForm'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    InscriptionForm,
    ConnexionForm,
    Post,
    CreatePostForm,
    ProfilForm
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
  margin-top: 60px;
}
</style>
