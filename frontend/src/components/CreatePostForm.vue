<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="title">Title</label>
        <input type="text" class="form-control" id="title" v-model="title" max-length=50 required>
    </div>
    <div class="form-group">
        <label for="content">Content</label>
        <textarea class="form-control" id="content" v-model="content" rows=5 cols=33 required></textarea>
    </div>
    <div class="form-group">
        <label for="url">Url</label>
        <input type="url" class="form-control" id="url" v-model="url">
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="createPost">Post</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'CreatePostForm',
    data () {
        return {
            title: '',
            content: '',
            url: ''
        }
    },
    methods:{
    createPost() {
        console.log('create');
        let dataForm = {title: this.title, content: this.content, url: this.url};
        console.log(dataForm);
        //     async function postForm(dataToSend) {
//     try {
//         let response = await fetch("http://localhost:3000/api/post", {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: dataToSend,
//         });
//         if (response.ok) {
//             let responseId = await response.json();
//             window.location.href = "/signup";
// Message post créé
//         } else {
//             console.error('Retour du serveur : ', response.status);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
    }
}}
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