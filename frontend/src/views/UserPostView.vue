<template>
<div class="container">
    <h2 class="text-center subtitle pt-5 pb-4">Le Mur</h2>
    <p class="text-center font-italic">Ici, vous pouvez lire ce que vos collèques ont écrit ou partagé...</p>
    <Post/>
</div>
</template>

<script>
import Post from '../components/Post'

export default {
    name: 'AllPost',
    components: {
    Post
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
