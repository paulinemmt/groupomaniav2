<template>
<div class="d-flex flex-column align-items-center">
    <h2 class="text-center subtitle pt-5 pb-4">Créer un nouvel article</h2>
    <p class="text-center font-italic">Ici, vous pouvez écrire ou partager le lien d'un article qui vous intéresse...</p>
    <CreatePostForm/>
</div>
</template>

<script>
import CreatePostForm from '../components/CreatePostForm'

export default {
    name: 'UserCreate',
    components: {
    CreatePostForm
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

