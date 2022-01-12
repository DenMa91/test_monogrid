<template>
  <main class="container details">
      <div class="row vh-100 align-items-center justify-content-center">
          <div class="col-10 p-3 card-wrapper">
              <div class="row">
                <div class="col-6">
                    <img :src="images[id].link" :alt="images[id].title" class="img-fluid immagine">
                </div>
                <div class="col-6">
                    <h2 class="display-6">{{images[id].title}}</h2>
                    <p class="fs-4">{{images[id].description}}</p>
                    <p class="fs-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, amet quam dolor assumenda quidem est vitae mollitia consequatur eum dicta minus similique soluta libero voluptatum ex sunt sed? Exercitationem et id pariatur nemo, perferendis, ut laborum nulla hic minus, ratione doloribus error obcaecati atque maiores officia omnis temporibus aperiam cupiditate nam debitis. Itaque, explicabo dicta? Magnam, sint in aut incidunt error temporibus expedita accusamus pariatur.</p>
                </div>
              </div>
          </div>
      </div>
  </main>
</template>

<script>
import Tilt from 'vanilla-tilt-vue'

export default {
    props: ['id'],
    components:{Tilt},
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


}
</script>

<style>
.details{
    position: relative;
    z-index: 9999;
}

.card-wrapper{
    background: rgba(255, 255, 255, 0.486);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    border-top: 1px solid white;
    border-left: 1px solid white;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.52);
}

.immagine{
    border-radius: 10px;
}
</style>