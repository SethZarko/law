<script>
import Nav from '../components/Nav.vue'

    export default {
        data() {
            return {
                
            }
        },
        components: {
            Nav,
        }
    }
</script>

<template>
    <div>
        <Nav/>
        <div class="construction">
            <h1>Under Construction</h1>
            <router-link to="/">Return Home</router-link>
        </div>
    </div>
</template>

<style scoped>

</style>