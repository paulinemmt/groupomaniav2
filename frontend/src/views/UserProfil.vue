<template>
<div class="d-flex flex-column align-items-center">
    <h2 class="text-center subtitle pt-5 pb-4">Profil</h2>
    <p class="text-center font-italic">Ici, vous pouvez modifier votre pseudo ou supprimer votre compte du forum...</p>
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
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color: #024601;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>
