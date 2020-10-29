<template>
<div class=" bg-header ">
    <div class="row d-flex flex-column justify-content-center  pt-4 w-100">
        <h1 class="main-title py-5"><span class='font-weight-bold text-uppercase title-size'>Groupoforum</span><br/>
            Ecrire, lire et partager </h1>
        <div>
            <img class="logo-title" src='../assets/white_logo.png' alt="Icone de Groupomania">
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'Header',
}
</script>


<style scoped lang="scss">
.main-title{
    font-size: 2rem;
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
.logo-title{
    width: 15rem;
}
 .bg-header{
    background-image: url("../assets/fern.jpg");
 }
 .bg-header-color{
     background-color: #f0e8c7;
 }
 .title-size{
     font-size: 3rem;
 }
</style>