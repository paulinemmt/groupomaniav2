<template>
<div class="container">
    <body>
        <ProfilForm/>
    </body>
</div>
</template>

<script>
import ProfilForm from '../components/ProfilForm'

export default {
  name: 'Profil',
  components: {
  ProfilForm
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
