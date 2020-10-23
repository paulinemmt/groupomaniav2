<template>
<div class="container">
    <body>
        <InscriptionForm/>
    </body>
</div>
</template>

<script>
import InscriptionForm from '../components/InscriptionForm'

export default {
  name: 'HomeSignup',
  components: {
  InscriptionForm
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
