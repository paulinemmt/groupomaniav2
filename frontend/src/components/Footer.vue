
<template>
<div class="container py-3 footer-bg">
  <div class="row d-flex justify-content-center">
      <a class="mx-2" href='#'>Legal notice</a>
      <a class="mx-2" href='mailto:groupomania@contact.com'>Contact</a>
  </div>
  <div class="row d-flex justify-content-center mt-2 text-company">
      <p>A CONNECT-E website</p>
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
  color:#202020;
    &:hover{
      text-decoration: none;
      font-weight: bold;
    }
}
.footer-bg{
  background-color: #FFD7D7;
}
.text-company{
  font-size: 0.8rem;
}
</style>