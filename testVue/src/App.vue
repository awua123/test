<template>
    <div>
        <router-link to="/Hello">hello</router-link>
        <router-link to="/home">home</router-link>
        <router-view/>
   
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import Hello from './com/hello.vue'
import Home from './com/home.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')
export default defineComponent({
   components:{
       Hello,
       Home
   },
    setup() {
        
    },
})
</script>
