<template>
<div class="container w-50 my-5">
    <form>
    <div class="form-group">
        <label for="username">Username</label>
        <input type="text" class="form-control" id="username" v-model="username">
    </div>
    <div class="form-group">
        <label for="photo">Photo</label>
        <input type="text" class="form-control" id="photo" v-model="photo">
    </div>
    <button type="submit" class="btn btn-submit-color" v-on:click="modifyUser">Modify</button>
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
            photo: ''
        }
    },
    methods:{
    deleteUser() {
        console.log('delete');
        //     async function postForm(dataToSend) {
//     try {
//         let response = await fetch("http://localhost:3000/api/user/:id", {
//             method: 'DELETE',
//             headers: {
//                 'content-type': 'application/json'
//             }
//         });
//         if (response.ok) {
//             let responseId = await response.json();
//             window.location.href = "/signup";
//         } else {
//             console.error('Retour du serveur : ', response.status);
//         }
//     } catch (e) {
//         console.log(e);
//     }
// }
    },
    modifyUser() {
        let dataForm = {username: this.username, photo: this.photo}
        console.log('modify');
        console.log(dataForm);
        //     async function postForm(dataToSend) {
//     try {
//         let response = await fetch("http://localhost:3000/api/user/:id", {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: dataToSend,
//         });
//         if (response.ok) {
//             let responseId = await response.json();
//              //Répondre ok modifcation
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