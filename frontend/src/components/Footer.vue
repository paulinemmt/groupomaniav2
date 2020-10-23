<script>
export default {
  name: 'Footer',
}
</script>

<template>
<div class="container py-3 footer-bg">
        <a class="mx-2" href='#'>Mentions légales</a>
        <a class="mx-2" href='#'>Contact</a>
</div>
</template>




<style scoped lang="scss">
a{
  color:#202020;
  &:hover{
text-decoration: none;
font-weight: bold;
  }
}
.footer-bg{
  background-color: #FFD7D7;
}
</style>