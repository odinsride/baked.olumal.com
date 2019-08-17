<template>
  <layout>
  <section class="section" id="$page.post.slug">
    <div class="container">
      <h1 class="title is-size-2 has-text-primary">{{$page.post.title}}</h1>
      <div class="columns">
        <div class="column is-12">
          <div class="content">
            <p v-html="$page.post.content" />
          </div>
        </div>
      </div>
    </div>
  </section>
  </layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
  export default {
    metaInfo () {
      return {
        title: this.$page.post.title
      }
    }
  }
</script>

<style>

.post-title {
  text-align: center;
  font-size: 30px;
  padding: 2em 0;
}

.post-content {
  font-size: 16px;
}
</style>