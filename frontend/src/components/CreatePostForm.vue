<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" required>
    </div>
    <div class="form-group">
        <label for="content">Content</label>
        <input type="text" class="form-control" id="content" required>
    </div>
    <div class="form-group">
        <label for="url">Url</label>
        <input type="url" class="form-control" id="url">
    </div>
    <button type="submit" class="btn btn-submit-color">Submit</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'CreatePostForm'
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