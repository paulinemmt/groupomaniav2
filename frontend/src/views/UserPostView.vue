<template>
<div class="container">
    <h2 class="text-center border rounded subtitle py-1 mx-5">Wall Post</h2>
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
