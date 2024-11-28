<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          id: 1,
          image: new URL('../assets/user.png', import.meta.url).href,
          date: "23 March, 2024",
          title: "Real Estate Closings: how to keep your lorem ipsum intact using lorem ipsum in latin...",
          description: "How to real estate without causing damage, and tips on maintaining a healthy closing for lorem ipsum...",
          link: "#"
        },
        {
          id: 2,
          image: new URL('../assets/user.png', import.meta.url).href,
          date: "25 Arpil, 2024",
          title: "Drafting the perfect Will: How to keep your assets looking lorem ipsum",
          description: "How to estate admin without causing damage, and tips on maintaining a healthy lorem for ipsum...",
          link: "#"
        },
        {
          id: 3,
          image: new URL('../assets/user.png', import.meta.url).href,
          date: "07 Sep, 2024",
          title: "Incorporating in Ontario: How to keep your company looking lorem",
          description: "How to business without causing impsum in lorem, and tips on maintaining a healthy lorem ipsum...",
          link: "/about"
        }
      ]
    };
  },
  methods: {
    goToPost(postId) {
      this.$router.push(`/blog/${postId}`);
    },
  }
};
</script>

<template>
  <section id="blog-986">
    <div class="cs-container">
      <div class="cs-content">
        <div class="cs-flex">
          <span class="cs-topper">News & Articles</span>
          <h2 class="cs-title">Latest News and Blogs</h2>
        </div>
        <router-link to="/blog" class="cs-button-solid">View All</router-link>
      </div>
      <ul class="cs-card-group">
        <!-- Loop through each blog post -->
        <li v-for="(post, index) in blogPosts" :key="index" class="cs-item">
          <picture class="cs-picture">
            <!-- Mobile Image -->
            <source :media="'(max-width: 600px)'" :srcset="post.image" />
            <!-- Tablet and above Image -->
            <source :media="'(min-width: 601px)'" :srcset="post.image" />
            <img
              loading="lazy"
              decoding="async"
              :src="post.image"
              alt="stylist"
              width="413"
              height="480"
            />
          </picture>
          <div class="cs-info">
            <span class="cs-date">
              <img
                class="cs-icon"
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/calendar.svg"
                alt="stylist"
                width="20"
                height="20"
              />
              {{ post.date }}
            </span>
            <h3 class="cs-h3">{{ post.title }}</h3>
            <span class="cs-desc">{{ post.description }}</span>
            <div  @click="goToPost(post.id)" class="cs-link">Read More</div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #blog-986 {
    padding: var(--sectionPadding);
    background-color: #1a1a1a;
  }
  #blog-986 .cs-container {
    width: 100%;
    /* changes to 1280px at desktop */
    max-width: 36.5rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 48px - 64px */
    gap: clamp(3rem, 6vw, 4rem);
  }
  #blog-986 .cs-content {
    /* set text align to left if content needs to be left aligned */
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* centers content horizontally, set to flex-start to left align */
    align-items: center;
  }

  #blog-986 .cs-title {
    margin-bottom: 2rem;
    max-width: 20ch;
    color: var(--bodyTextColorWhite);
  }
  #blog-986 .cs-button-solid {
    font-size: 1rem;
    /* 46px - 56px */
    line-height: clamp(2.875em, 5.5vw, 3.5em);
    text-decoration: none;
    font-weight: 700;
    text-align: center;
    margin: 0;
    color: #fff;
    min-width: 9.375rem;
    padding: 0 2rem;
    background-color: var(--primary);
    display: inline-block;
    position: relative;
    z-index: 1;
    /* prevents padding from adding to the width */
    box-sizing: border-box;
  }
  #blog-986 .cs-button-solid:before {
    content: "";
    position: absolute;
    height: 100%;
    width: 0%;
    background: #000;
    opacity: 1;
    top: 0;
    left: 0;
    z-index: -1;
    transition: width 0.3s;
  }
  #blog-986 .cs-button-solid:hover:before {
    width: 100%;
  }
  #blog-986 .cs-button-solid {
    /* prevents flexbox from squishing it */
    flex: none;
  }
  #blog-986 .cs-card-group {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    /* 16px - 20px */
    gap: clamp(1rem, 2vw, 1.25rem);
    position: relative;
  }
  #blog-986 .cs-item {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    position: relative;
  }
  #blog-986 .cs-item:hover {
    cursor: pointer;
  }
  #blog-986 .cs-item:hover .cs-info:before {
    opacity: 1;
    background-color: var(--primary);
  }
  #blog-986 .cs-item:hover .cs-picture img {
    transform: scale(1.15);
  }
  #blog-986 .cs-item:hover .cs-date {
    color: #fff;
  }
  #blog-986 .cs-item:hover .cs-icon {
    filter: brightness(150%);
  }
  #blog-986 .cs-item:hover .cs-link {
    color: #fff;
  }
  #blog-986 .cs-picture {
    width: 100%;
    height: 30rem;
    /* removed at tablet */
    aspect-ratio: 0.68333333;
    /* clips img tag from overflowing it on hover */
    overflow: hidden;
    display: block;
    position: relative;
    z-index: 1;
  }
  #blog-986 .cs-picture img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* makes sure the top of the image is at the top of the parent, heads won't get cut off this way */
    object-position: top;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: transform 0.9s;
  }
  #blog-986 .cs-info {
    width: 83%;
    max-width: 26.25rem;
    /* 16px - 24px */
    padding: clamp(1rem, 2vw, 1.5rem);
    /* prevents padding from affecting the height and width */
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 10;
  }
  #blog-986 .cs-info:before {
    /* background-color */
    content: "";
    width: 100%;
    height: 100%;
    background: #1a1a1a;
    opacity: 0.8;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    z-index: -1;
    transition: background-color 0.3s, opacity 0.3s;
  }
  #blog-986 .cs-date {
    font-size: 1rem;
    line-height: 1.2em;
    font-weight: 700;
    margin: 0 0 1.25rem 0;
    color: #bababa;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    transition: color 0.3s;
  }
  #blog-986 .cs-icon {
    width: 1.25rem;
    height: auto;
    transition: filter 0.3s;
  }
  #blog-986 .cs-h3 {
    font-size: 1.25rem;
    line-height: 1.2em;
    font-weight: 700;
    margin: 0 0 0.75rem 0;
    color: #fff;
    display: block;
  }
  #blog-986 .cs-desc {
    font-size: 1rem;
    line-height: 1.5em;
    margin: 0 0 1.25rem 0;
    color: #f7f7f7;
    display: block;
  }
  #blog-986 .cs-link {
    font-size: 1rem;
    line-height: 1.2em;
    font-weight: 700;
    text-decoration: none;
    width: auto;
    margin: 0;
    color: var(--primary);
    display: inline-block;
    position: relative;
    transition: color 0.3s;
  }
  #blog-986 .cs-link:hover {
    color: #fff;
  }
  #blog-986 .cs-link:before {
    /* underline */
    content: "";
    width: 100%;
    height: 1px;
    background: currentColor;
    opacity: 1;
    position: absolute;
    display: block;
    bottom: 0;
    left: 0;
    transition: background-color 0.3s;
  }
}
/* Tablet - 550px */
@media only screen and (min-width: 34.375rem) {
  #blog-986 .cs-content {
    text-align: left;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    gap: 3rem;
  }
  #blog-986 .cs-title {
    margin: 0;
  }
  #blog-986 .cs-picture {
    /* remove the aspect ratio so the height can be squished */
    aspect-ratio: initial;
  }
}
/* Small Desktop - 1024px */
@media only screen and (min-width: 64rem) {
  #blog-986 .cs-container {
    max-width: 80rem;
  }
  #blog-986 .cs-card-group {
    flex-direction: row;
  }
}
</style>
