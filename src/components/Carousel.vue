<template>
<div class="swiper-wrap">
    <swiper :effect="'coverflow'" :grabCursor="true" :centeredSlides="true" :slidesPerView="'auto'" :coverflowEffect='{
    "rotate": 50,
    "stretch": 0,
    "depth": 100,
    "modifier": 1,
    "slideShadows": true,
    }' :pagination="true" class="mySwiper">
        <swiper-slide v-for="image in result" :key="image.id">
          <router-link :to="{name: 'imageDetails', params: {id: image.id}}">
            <img :src="image.link" :alt="image.title">
          </router-link>
        </swiper-slide>
    </swiper>
</div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/effect-coverflow"
import "swiper/css/pagination"


// import Swiper core and required modules
import SwiperCore, {
  EffectCoverflow,Pagination
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCoverflow,Pagination]);

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  props:{search:String},
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
        ]
        
    };
  },
  computed: {
    result(){
        if(this.search != ""){
            return this.images.filter(image => image.description.includes(this.search.toLowerCase()))
        }else{return this.images}
    }
  },

  methods: {
    
  }
  
}
</script>
<style scoped>
.swiper-wrap {
  position: relative;
  height: 100%;
  z-index: 1000000;
}

.swiper-wrap {
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>