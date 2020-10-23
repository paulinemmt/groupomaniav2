<template>
<div class="container">
    <body>
        <Post/>
    </body>
</div>
</template>

<script>
import Post from '../components/Post'

export default {
  name: 'View',
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
// .bg-header{
//     background-image: url("../../../assets/images/bg-header.jpg");
// }
</style>
