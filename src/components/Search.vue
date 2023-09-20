<template>
    <div class="wrap-form">
        <form action="" @submit.prevent="searchMovie()">
            <input type="search" placeholder="Tìm" v-model="search">
            <button type="submit"><font-awesome-icon icon="search" /></button>
        </form>
    </div>
</template>
<script setup>
import useMoviesStore from '../stores/apiMovie';
import config from '../config.js'
import { ref } from 'vue';

const moviesStore = useMoviesStore();

const search = ref('');

const searchMovie = () => {
    if(search.value != ''){
        let movieUrl = `${config.url}?apikey=${config.apikey}&s=${search.value}`;
        moviesStore.getMovies(movieUrl, 'GET');
    }
}
</script>

<style scoped>
form{
    width: 350px;
    display: flex;
}
button{
    float: right;
    padding: 6px 10px;
    background: #ddd;
    font-size: 17px;
    border: none;
    cursor: pointer;
    background-color: #2196F3;
}
input[type="search"]{
   display: block;
   width: 100%;
   padding: 10px 5px;
   color: #000;;
   border: none;
}
</style>