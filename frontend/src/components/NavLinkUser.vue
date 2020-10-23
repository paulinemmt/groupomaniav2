<template>
    <ul class="d-flex flex-row">
        <li class="nav-item mx-2 mt-3 "><a class="p-2 rounded" href='#'> All Posts </a></li>
        <li class="nav-item mx-2 mt-3"><a class="p-2 rounded" href='#'> Create a Post </a></li>
        <li class="nav-item mx-2 mt-3"><a class="p-2 rounded" href='#'> Profil </a></li>
    </ul>
</template>

<script>
export default {
  name: 'NavLinkUser'
}
</script>


<style scoped lang="scss">
a {
    color:#FD2D01;
    &:hover{
        font-weight: bold;
        background-color: #FFD7D7 ;
        text-decoration: none;
    }
}
li {
    list-style-type: none;
}
</style>