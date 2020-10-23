<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
    </div>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username" required>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
    </div>
    <div class="form-group">
        <label for="photo">Photo</label>
        <input type="text" class="form-control" id="photo" v-model="photo">
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="signUpUser">Inscription</button>
    </form>
</div>
</template>

<script>
export default {
    name: 'InscriptionForm',
    data() { return {
        email: '',
        username: '',
        password: '',
        photo: ''
        }
    },
    methods: {
         signUpUser() {
             let dataForm = {email: this.email, username: this.username, password: this.password, photo: this.photo}
//             console.log("signup")
             console.log(dataForm)
//                 async function signUp(dataForm) {
//     try {
//         let response = await fetch("http://localhost:3000/api/user/login", {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: dataForm,
//         });
//         if (response.ok) {
//             let responseId = await response.json();
//             window.location.href = "/create";
//         } else {
//             console.error('Retour du serveur : ', response.status);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
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