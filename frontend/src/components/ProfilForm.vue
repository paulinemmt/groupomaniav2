<template>
<div class="w-50">
    <form class="py-4">
        <div class="form-group">
            <label for="username">Nouveau pseudo</label>
            <input type="text" class="form-control" id="username" v-model="username">
        </div>
        <button type="submit" class="btn btn-submit-color " v-on:click="updateUser">Modifier le profil</button>
    </form>
    <button class="btn btn-submit-color mb-4" v-on:click="deleteUser">Supprimer le profil</button>
</div>
</template>

<script>
export default {
    name: 'ProfilForm',
    data () {
        return {
            username: '',
        }
    },
    methods:{
    deleteUser() {
        let idUser = parseInt(localStorage.getItem("Id"));
        const dataForm = JSON.stringify({id: idUser});
        async function postForm(dataForm) {
            try {
                let response = await fetch("http://localhost:3000/api/user/:id", {
                    method: 'DELETE',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': 'bearer ' + localStorage.getItem('token')
                    },
                    body: dataForm
                });
                    if (response.ok) {
                        let responseId = await response.json();
                        console.log(responseId);
                        localStorage.removeItem('Id');
                        localStorage.removeItem('token');
                        localStorage.removeItem('isAdmin');
                        window.location.href = "http://localhost:8080/signup#/signup"
                    } else {
                        console.error('Retour du serveur : ', response.status);
                    }
            } catch (e) {
            console.log(e);
            }
        }
        postForm(dataForm);
    },
    updateUser() {
        let idUser = parseInt(localStorage.getItem("Id"));
        let dataForm = JSON.stringify({id: idUser, username: this.username});
        async function postForm(dataForm) {
            try {
                let response = await fetch("http://localhost:3000/api/user/:id", {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        'authorization': 'bearer ' + localStorage.getItem('token')
                    },
                    body: dataForm,
                });
                    if (response.ok) {
                        let responseId = await response.json();
                        console.log(responseId);
                        //Répondre ok modifcation
                    } else {
                        console.error('Retour du serveur : ', response.status);
                    }
            } catch (e) {
            console.log(e);
            }   
        }
postForm(dataForm);
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