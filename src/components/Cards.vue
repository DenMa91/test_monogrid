<template>
<div class="row justify-content-center">
  <div class="col-3 p-3" v-for="image in result" :key="image.id">
    <router-link :to="{name: 'imageDetails', params: {id: image.id}}" class="rotte">
    <div class="card">
        <img :src="image.link" class="card-img-top" :alt="image.title">
        <div class="card-body">
            <h5 class="card-title">{{image.title}}</h5>
        </div>
    </div>
    </router-link>
  </div>
</div>
</template>

<script>

export default {
props:{
    search:String,
},
data() {
    return {
        images:[
            {id:0, title:'formiche', description:'formiche camminano su una foglia', link:"https://swiperjs.com/demos/images/nature-1.jpg"},
            {id:1, title:'tramonto', description:'un bel tramonto sul mare', link:"https://swiperjs.com/demos/images/nature-2.jpg"},
            {id:2, title:'montagne', description:'nuvole su montagne rocciose', link:"https://swiperjs.com/demos/images/nature-3.jpg"},
            {id:3, title:'alberi', description:'si sta come dáutunno sugli alberi le foglie', link:"https://swiperjs.com/demos/images/nature-4.jpg"},
            {id:4, title:'spiaggia', description:'spiaggia tropicale con palme', link:"https://swiperjs.com/demos/images/nature-5.jpg"},
            {id:5, title:'fiori', description:'fiori di tutti i colori', link:"https://swiperjs.com/demos/images/nature-6.jpg"},
            {id:6, title:'ciliegio', description:'fioritura fiori di ciliegio', link:"https://swiperjs.com/demos/images/nature-7.jpg"},
            {id:7, title:'albero', description:'un grande albero crea una grande ombra', link:"https://swiperjs.com/demos/images/nature-8.jpg"},
        ],
    }
},
computed: {
    result(){
        if(this.search != ""){
            return this.images.filter(image => image.description.includes(this.search))
        }else{return this.images}
    }
},
}
</script>

<style>
.rotte{
    text-decoration: none;
    color:black
}

.card:hover{
    color:black;
    transform: scale(1.1);
    transition: 0.4s;
}
</style>