
<template>
<div class="py-3 footer-bg">
  <div class="row d-flex justify-content-center w-100">
      <a class="mx-2" href='#'>Mentions légales</a>
      <a class="mx-2" href='mailto:groupomania@contact.com'>Contact</a>
  </div>
  <div class="row d-flex justify-content-center mt-2 text-company">
      <p>CONNECT-E</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>


<style scoped lang="scss">
a{
  color:#fff;
    &:hover{
      text-decoration: none;
      font-weight: bold;
    }
}
.footer-bg{
  background-image: url("../assets/fern.jpg");
}
.text-company{
  font-size: 0.8rem;
  color:#fff;
}
</style>