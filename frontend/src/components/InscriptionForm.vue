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
        <button type="submit" class="btn btn-submit-color" v-on:click="signUpUser">Signup</button>
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
            let dataForm = JSON.stringify({email: this.email, username: this.username, password: this.password, photo: this.photo});
            async function signUp(dataForm) {
                try {
                let response = await fetch("http://localhost:3000/api/user/signup", {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: dataForm,
                });
                    if (response.ok) {
                        let responseId = await response.json();
                        console.log(responseId);
                    
                    } else {
                        console.error('Retour du serveur : ', response.status);
                    }
                } catch (e) {
                console.log(e);
                }
            }
            signUp(dataForm)
            window.location.href = "http://localhost:8080/signup#/login";
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