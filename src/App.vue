<template>
  <div>
    <header>
      <div class="container wrap-header">
        <a href="/">
          <h1>Movie Info</h1>
        </a>

        <Search />
      </div>
    </header>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script setup>
import Search from './components/Search.vue'
// import useMoviesStore from './stores/apiMovie';

// const moviesStore = useMoviesStore();
// let movieUrl = `${config.url}?apikey=${config.apikey}`;

// onBeforeMount(() => {
//   moviesStore.getMovies('http://www.omdbapi.com/?apikey=f017e174&s=Naruto');
// })

</script>

<style >
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #fff;
}
.container{
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 15px;
}
.wrap-header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
body{
  background-color: #47607c;
}
a{
  text-decoration: none;
}
header{
  background-color: #35495E;
}
header h1{
  font-size: 2.5rem;
}
@media screen and (max-width: 665px){
  header h1{
    font-size: 1.8rem;
  }
  .wrap-header{
    display: block;
  }
  header{
    padding-bottom: 10px;
  }
  form{
    max-width: 100%;
  }
}
</style>



