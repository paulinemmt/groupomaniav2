<template>
<div class="container">
    <div class="row d-flex flex-column justify-content-center bg-header">
        <h1 class="main-title text-uppercase">Share with your colleague</h1>
        <a href='#'><img class="logo-title" src='../assets/icon-above-font.png' alt="Icone de Groupomania"></a>
    </div>
    <div class="row">
        <nav class="navbar border rounded p-0 w-100 d-flex flex-row justify-content-between">
            <a class="navbar-brand ml-2" href="#">
                <img class="logo-navbar" src='../assets/icon.png' alt="Icone de Groupomania">
            </a> 
            
            <NavLinkUser/>
            
            <NavLinkLogSign/>
           
        </nav>
    </div>
</div>
</template>

<script>
import NavLinkLogSign from './NavLinkLogSign'
import NavLinkUser from './NavLinkUser'

export default {
  name: 'Header',
  components: {
  NavLinkLogSign,
  NavLinkUser
}
}
</script>


<style scoped lang="scss">
.main-title{
    font-size: 2rem;
    color: #FD2D01;
}
.logo-title{
    width: 20rem;
}
.logo-navbar{
    width: 2rem;
}
// .bg-header{
//     background-image: url("../../../assets/images/bg-header.jpg");
// }
</style>