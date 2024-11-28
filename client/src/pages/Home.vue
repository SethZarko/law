<script>
import Hero from '../components/Hero.vue'
import Nav from '../components/Nav.vue';
import Services from '../components/Services.vue';
import Team from '../components/Team.vue';
import Stats from '../components/Stats.vue';
import Reviews from '../components/Reviews.vue';
import RecentPosts from '../components/RecentPosts.vue';
import CallToAction from '../components/CallToAction.vue';
import Footer from '../components/Footer.vue';

    export default {
        data() {
            return {

            }
        },
        components: {
            Hero,
            Nav,
            Services,
            Team,
            Stats,
            Reviews,
            RecentPosts,
            CallToAction,
            Footer
        }
    }
</script>

<template>
    <section id="home">
        <Nav/>
        <Hero/>
        <Services/>
        <Team/>
        <Stats/>
        <Reviews/>
        <RecentPosts/>
        <CallToAction/>
        <Footer/>
    </section>
</template>



<style scoped>

</style>