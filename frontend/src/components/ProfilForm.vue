<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username">
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="updateUser">Modify</button>
    </form>
    <button class="btn btn-submit-color my-2" v-on:click="deleteUser">Delete</button>
</div>
</template>

<script>
export default {
    name: 'ProfilForm',
    data () {
        return {
            username: '',
            //CREER MESSAGE USER DELETE OU USER MODIFY ??
        }
    },
    methods:{
    deleteUser() {
        let idUser = parseInt(localStorage.getItem("Id"));
        const dataForm = JSON.stringify({id: idUser});
        console.log('delete');
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
       //Redirection vers Signup
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
        console.log(idUser)
        let dataForm = JSON.stringify({id: idUser, username: this.username});
        console.log('modify');
        console.log(dataForm);
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
background-color: #FD2D01;
color:#fff;
&:hover{
    font-weight:bold;
    background-color: #FFD7D7;
    color: #FD2D01;
}
}
</style>