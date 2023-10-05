<template>
    <div v-if="moviesStore.loading">Loading...</div>
    <div  v-else>
        <div v-if="moviesStore.movies" class="movies-list">
            <div class="movie" v-for="movie in moviesStore.movies" :key="movie.imdbID">
                <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                    <div class="movie-image">
                        <img :src="movie.Poster" :alt="movie.Title" />
                        <div class="type">{{ movie.Type }}</div>
                    </div>
                </router-link>
                    <div class="detail">
                        <p class="year">{{ movie.Year }}</p>
                        <router-link :to="'/movie/' + movie.imdbID" class="movie-link">
                            <h3>{{ movie.Title }}</h3>
                        </router-link>
                    </div>         
            </div>
        </div>
        <div v-else>
            <p>Không tìm thấy</p>
        </div>
    </div>
</template>
<script setup>
import { onMounted, onBeforeMount } from 'vue';
import useMoviesStore from '../stores/apiMovie';
import config from '../config';

const moviesStore = useMoviesStore();

onMounted( () => {
    // init films in home page if not searched before
    if(!moviesStore.movies){
        let movieUrl = `${config.url}?apikey=${config.apikey}&s=doraemon`;
        moviesStore.getMovies(movieUrl, 'GET');
    }
});

// const isFound = computed(() => {
//     console.log('jjjj');
//     return moviesStore.movies
// })

</script>
<style scoped>
.movies-list{
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
}
.movie{
    width: calc(100% / 5);
    max-width: 50%;
    padding: 0 7px;
    margin-bottom: 15px;

}
.movie-image{
    height: 300px;
    position: relative;
}
.type{
    position: absolute;
    bottom: 0;
    left: 0;
    background: green;
    padding: 4px;
}
img{
    display: block;
    object-fit: cover;
    height: 100%;
    width: 100%;
    /* max-width: 100%; */
    
}
.detail{
    background-color: #fff;
    padding: 10px;
    
}
.detail p,
.detail h3{
    color: #000;
}
.detail h3{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

@media screen and (max-width: 945px){
    .movie{
        width: calc(100% / 4);

    }
}

@media screen and (max-width: 765px){
    .movie{
        width: calc(100% / 3);

    }
}
@media screen and (max-width: 600px){
    .movie{
        width: calc(100% / 2);

    }
}
@media screen and (max-width: 425px){
    .movie{
        width: 98%;

    }
}
</style>