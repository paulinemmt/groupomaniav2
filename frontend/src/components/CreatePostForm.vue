<template>
<div class="w-50">
    <form class="py-4">
        <div class="form-group">
            <label for="title">Titre</label>
            <input type="text" class="form-control" id="title" v-model="title" max-length=50 required>
        </div>
        <div class="form-group">
            <label for="content">Contenu</label>
            <textarea class="form-control" id="content" v-model="content" rows=5 cols=33 required placeholder="Ecrire un article ou partagez un lien vers un article de votre choix..."></textarea>
        </div>
        <button type="submit" class="btn btn-submit-color" v-on:click="createPost">Partager</button>
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
            let dataForm = {id_users: idUser, title: this.title, content: this.content, userId: 0};
            let jsonDataForm = JSON.stringify(dataForm)
            console.log(dataForm)
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
                            window.location.href = " http://localhost:8080/signup#/allpost";
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
    background-color: #024601;
    color:#f0e8c7;
    font-weight: bold;
        &:hover{
            font-weight:bold;
            background-color: #f0e8c7;
            color: #024601;
        }
}
</style>