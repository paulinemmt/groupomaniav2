<template>
    <div class="container">
    <article class="border rounded" v-for="post in posts" v-bind:key="post">
        
        <div class="d-flex flex-row justify-content-between">
            <p class="p-2">{{post.username}}</p>
            <p class="p-2">{{post.datePublication}}</p>
        </div>
        <h2 class="title-color">{{post.title}}</h2>
        <p class="text-justify m-2">{{post.content}}</p>
        </article>
    </div>
</template>

<script>
export default {
  name: 'Post'
//   data() {
//       posts: []   }
//   methods:{
//     getPost() {
// //     try {
// //         let response = await fetch("http://localhost:3000/api/post");
// //         if (response.ok) {
// //             let posts = await response.json();
//                  this.posts = response.data
// //             CREATION DES POSTS
// //         } else {
// //             console.error('Retour du serveur : ', response.status);
// //         }
// //     } catch (e) {
// //         console.log(e);
// //     }
// // }
//     }
// }}
}
</script>


<style scoped lang="scss">
.title-color {
    color:#FD2D01;
}
</style>