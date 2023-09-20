import { defineStore } from "pinia";

const useMoviesStore = defineStore('movieModule', {
    state: () => {
        return{
            movies: null
        }
    },
    getters: {
    }, 
    actions: {
        async getMovies(url, method){
            this.movies = '';
            this.isFound = true;
            let option = {
                method
            };
            let res = await fetch(url, option);
            let data = await res.json();
            // this.movies.push(...data.Search)
            if(data.Search){
                this.movies = data.Search   
                this.router.push({name: 'home'})
            }else{
                this.router.push({name: 'notFound'})
            }
           
        }
        

        // getMovies(url){
        //     fetch(url)
        //         .then((res) => res.json())
        //         .then((data) => this.state = data.Search);
        // }


    }
})
export default useMoviesStore;