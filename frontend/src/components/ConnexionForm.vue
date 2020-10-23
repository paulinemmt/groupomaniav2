<template>
<div class="container w-50 my-5">
    <form >
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" required>
    </div>
    <button type="submit" class="btn btn-submit-color">Submit</button>
    </form>
</div>
</template>

<script>
export default { 
    name: 'ConnexionForm' 
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