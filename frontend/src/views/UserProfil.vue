<template>
<div class="container">
    <h2 class="text-center border rounded subtitle py-1 mx-5">User profil</h2>
    <ProfilForm/>
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
.subtitle{
    font-size: 1.4rem;
    font-weight: bold;
    color: #FD2D01;
}
</style>
