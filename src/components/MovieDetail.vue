<template>
    <div class="detail">
        <img :src="movie.Poster ?? '#'" alt="Movie Poster" class="featured-img" />
        <div>
            <h2>{{movie.Title}} <span>({{ movie.Year }})</span></h2>
            <p>{{ movie.Plot }}</p>
        </div>  
    </div>
</template>

<script setup>
    import config from '../config.js'
    import { onBeforeMount, ref } from 'vue';
    import NotFound from '../views/NotFound.vue';
    import router from '../router';

    const movie = ref({});
    const props = defineProps(['id'])

    onBeforeMount( () => {
        let movieUrl = `${config.url}?apikey=${config.apikey}&i=${props.id}&plot=full`;
        fetch(movieUrl)
        .then((res) => {
            return res.json()
        })
        .then((dataRes) => {
            if(dataRes.Title){
                movie.value = dataRes
            }else{
                router.push({name: 'notFound'})
            }
        })
        .catch((e) => {
            console.log(e.message)
        })
    });
    
</script>
<style scoped>
.detail{
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
}
.detail div{
    margin-left: 20px;
}
h2{
    font-size: 2.5rem;
}
</style>