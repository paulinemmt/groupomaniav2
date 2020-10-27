<template>
<div class="container w-50 my-5">
    <form >
    <div class="form-group">
        <label for="email">Email address</label>
        <input type="email" class="form-control" id="email" v-model="email" required>
    </div>
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" id="password" v-model="password" required>
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="loginUser">Connexion</button>
    </form>
</div>
</template>

<script>
export default { 
    name: 'ConnexionForm',
    data () {
        return{
            email: '',
            password: ''
        }
    },
methods: {
loginUser() {
    console.log('coucou')
    let dataForm = JSON.stringify({email : this.email, password : this.password})
    console.log(dataForm)
    async function postForm(dataToSend) {
    try {
        let response = await fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: dataToSend,
        });
        if (response.ok) {
            let responseId = await response.json();
            console.log(responseId)
            // localStorage.setItem("Id", responseId.userId);
            // window.location.href = "/create";
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