<template>
<div class="container">
    <article class="border rounded my-2 p-2" v-for="(post, id) in posts" v-bind:key="id">
        <div class="d-flex flex-row justify-content-between">
            <p class="p-2">{{post.datePublication}}</p>
        </div>
        <h3 class="title-color">{{post.title}}</h3>
        <p class="text-justify m-2">{{post.content}}</p>
        <button class="btn btn-submit-color my-2" v-if="isAdmin = true" v-on:click="deletePost" >Delete</button>
    </article>
</div>
</template>

<script>
export default {
  name: 'Post',
  data() { 
      return {
          isAdmin: '',
          posts: []
      }
      },
  mounted(){
      //Modérateur 
      let isAdmin = localStorage.getItem(isAdmin);
      this.isAdmin = isAdmin;

      //Obtenir tous les posts
      fetch("http://localhost:3000/api/post",  {
             headers: {
                'authorization': 'bearer ' + localStorage.getItem('token')
            }})
      .then (response => response.json())
      .then(data=>this.posts = data)
      
    // try {
    //     fetch("http://localhost:3000/api/post", {
    //          headers: {
    //             'authorization': 'bearer ' + localStorage.getItem('token')
    //         }
    //      })   
    //      .then(response => {this.posts = response.posts})
         
      
    // } catch (e) {
    //     console.log(e);
    // }
  },
  methods : {
      deletePost() {
        // let idUser = parseInt(localStorage.getItem("Id"));
        // const dataForm = JSON.stringify({id: idUser});
        console.log('delete');
//             async function postForm(dataForm) {
//     try {
//         let response = await fetch("http://localhost:3000/api/post/:id", {
//             method: 'DELETE',
//             headers: {
//                 'content-type': 'application/json',
//                 'authorization': 'bearer ' + localStorage.getItem('token')
//             },
//             body: dataForm
//         });
//         if (response.ok) {
//             let responseId = await response.json();
//             console.log(responseId);
//             localStorage.removeItem('Id');
//             localStorage.removeItem('token');
//             localStorage.removeItem('isAdmin');
//        //Redirection vers Signup
//        window.location.href = "http://localhost:8080/signup#/signup"
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
.title-color {
    color:#FD2D01;
}
</style>