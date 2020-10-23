<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" required>
    </div>
    <div class="form-group">
        <label for="photo">Photo</label>
        <input type="text" class="form-control" id="photo" required>
    </div>
    <button type="submit" class="btn btn-submit-color">Modify</button>
    </form>
    <button type="submit" class="btn btn-submit-color my-2">Delete</button>
</div>
</template>

<script>
export default {
    name: 'ProfilForm'
}
</script>

<style scoped lang="scss">
.btn-submit-color{
background-color: #FD2D01;
color:#fff;
&:hover{
    font-weight:bold;
    background-color: #FFD7D7;
    color: #FD2D01;
}
}
</style>