<template>
<div class="container w-50 my-5">
    <form>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" v-model="title" max-length=50 required>
        </div>
        <div class="form-group">
            <label for="content">Content</label>
            <textarea class="form-control" id="content" v-model="content" rows=5 cols=33 required placeholder="Ecrire un article ou partagez un lien vers un article de votre choix..."></textarea>
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
            id_users: '',
            title: '',
            content: '',
        }
    },
    methods:{
        createPost() {
            let idUser = parseInt(localStorage.getItem("Id"));
            let dataForm = {id_users: idUser, title: this.title, content: this.content};
            let jsonDataForm = JSON.stringify(dataForm)
            async function postForm(dataToSend) {
                try {
                    let response = await fetch("http://localhost:3000/api/post", {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': 'bearer ' + localStorage.getItem('token')
                        },
                        body: dataToSend,
                    });
                        if (response.ok) {
                            let responseId = await response.json();
                            // window.location.href = " http://localhost:8080/signup#/allpost";
                            console.log(responseId);
                        } else {
                            console.error('Retour du serveur : ', response.status);
                        }
                } catch (e) {
                console.log(e);
                }
            }
        postForm(jsonDataForm);
        }
    }
}
</script>

<style scoped lang="scss">
.btn-submit-color{
    background-color: #FD2D01;
    color:#000;
        &:hover{
            font-weight:bold;
            background-color: #FFD7D7;
            color: #000;
        }   
}
</style>