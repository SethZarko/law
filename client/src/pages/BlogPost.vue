<script>
import Nav from '../components/Nav.vue'

    export default {
        props: ['id'],
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
            <h1>Blog Post id: {{ id }}</h1>
            <h1>Under Construction</h1>
            <router-link to="/">Return Home</router-link>
        </div>
    </div>
</template>

<style scoped>

</style>