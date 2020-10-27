<template>
    <div class="container">
        <button class="btn" v-on:click="getPost"> coucou</button>
    <article class="border rounded" v-for="(post, id) in posts" v-bind:key="id">
        
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
  name: 'Post',
  data() { 
      return {
          id:'',
          title: '',
          content: '',
          posts: []
      }
      },
  methods:{
    async getPost() {  
        console.log('coucou front')
    try {
        let response = await fetch("http://localhost:3000/api/post");
        if (response.ok) {
            let post = await response.json();
            console.log(post)
            console.log(post[1].title)
            for (let i=0; i<length.post; i++){
                this.id=post[i].id
                 this.title=post[i].title
                 this.content=post[i].content
            this.posts.push({ 
               id : this.id,
               title: this.title,
               content: this.content
            })
            }
            // let posts = await response.json();
            // console.log(posts)
            // this.id = JSON.parse.posts.id
            // this.title = JSON.parse.posts.title
            // this.content = JSON.parse.posts.content
            
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (e) {
        console.log(e);
    }
}
    }
}
</script>


<style scoped lang="scss">
.title-color {
    color:#FD2D01;
}
</style>