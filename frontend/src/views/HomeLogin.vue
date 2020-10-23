<template>
<div class="container">
    <body>
        <ConnexionForm/>
    </body>
</div>
</template>

<script>
import ConnexionForm from '../components/ConnexionForm'

export default {
  name: 'HomeSignup',
  components: {
  ConnexionForm
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

