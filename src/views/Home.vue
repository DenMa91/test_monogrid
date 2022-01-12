<template>
  <main class="container-fluid">
      <div class="row justify-content-center">
          <div class="col-12">
              <h1 class="display-1 text-center titolo">Monogrid</h1>
          </div>
          <div class="col-12 mt-5 mb-3">
            <div class="row justify-content-center">
              <div class="col-6">
                <form>
                  <input v-model="search" type="text" placeholder="cerca la tua immagine preferita" class="form-control">
                </form>
              </div>
            </div>
          </div>
            <div class="col-10">
              <transition-group
              enter-active-class="animated fade"
              leave-active-class="animated fade">
                  <Cards :search="search" v-if="search" style="animation-duration: 1s"/>
                  <Carousel v-if="!search" style="animation-delay: 1s"/>
              </transition-group>
            </div>
      </div>
  </main>
</template>

<script>
import Carousel from "../components/Carousel.vue"
import Cards from "../components/Cards.vue"
export default {
    components: {Carousel, Cards},
    data() {
      return {
        search:''
      }
    },
}
</script>

<style>
  .titolo{
    position: relative;
    color:white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.445);
  }

  .container-fluid{
    position: relative;
    z-index: 9999;
  }
</style>