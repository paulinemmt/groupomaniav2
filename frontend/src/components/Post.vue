<template>
<div class="container">
    <article class="border rounded my-2 p-2" v-for="(post, id) in posts" v-bind:key="id">
        <div class="d-flex flex-row justify-content-end">
            <p class="p-2" id="post" >{{post.updatedAt}}</p>
        </div>
        <h3 class="title-color">{{post.title}}</h3>
        <p class="text-justify m-2">{{post.content}}</p>
        <button class="btn btn-submit-color my-2" :disabled="isAdmin == true" v-on:click="deletePost" >Delete</button>
    </article>
</div>
</template>

<script>
export default {
  name: 'Post',
  data() { 
      return {
          isAdmin: false,
          posts: []
      }
      },
  mounted(){
      //Modérateur 
      this.isAdmin = localStorage.getItem('isAdmin');
      console.log(this.isAdmin)

      //Obtenir tous les posts
      fetch("http://localhost:3000/api/post",  {
             headers: {
                'authorization': 'bearer ' + localStorage.getItem('token')
            }})
      .then (response => response.json())
      .then(data=>this.posts = data)
  },
  methods : {
      deletePost() {
         let idPost = this.id;
        //  const dataForm = JSON.stringify({id: idUser});
        console.log(idPost);
            async function postForm(dataForm) {
    try {
        let response = await fetch("http://localhost:3000/api/post/:id", {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('token')
            },
            body: dataForm
        });
        if (response.ok) {
            let responseId = await response.json();
            console.log(responseId)
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (e) {
        console.log(e);
    }
}
postForm(idPost);
   }
  }}
</script>


<style scoped lang="scss">
.title-color {
    color:#FD2D01;
}
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