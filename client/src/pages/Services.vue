<script>
import Nav from "../components/Nav.vue";
import Footer from '../components/Footer.vue'
import CallToAction from '../components/CallToAction.vue';

export default {
  data() {
    return {};
  },
  components: {
    Nav,
    CallToAction,
    Footer
  },
};
</script>

<template>
  <div>
    <Nav />
    <section id="services-296">
      <div class="cs-container">
        <div class="cs-content">
          <span class="cs-topper">Our Services</span>
          <h2 class="cs-title">
            We Are Committed To Delivering Top Quality Legal Services
          </h2>
          <p class="cs-text">
            At Robson, Atony, and Delgatto, let us help you solve your complex legal problems so that you can focus
            on your living your life with peace of mind.
          </p>
        </div>
        <ul class="cs-card-group">
          <li class="cs-item">
            <router-link class="cs-link" to="/realty">
              <img
                class="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
                alt="icon"
                width=""
                height=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <h3 class="cs-h3">Real Estate Law</h3>
              <p class="cs-item-text">
                Closing the Transaction for Purchases and Sales, Assistance with Mortgage Refinancing, Title Searches, Drafting Real Estate Contracts, and Representation for Minor Real Estate Disputes.
              </p>
            </router-link>
            <picture class="cs-image" aria-hidden="true">
              <source
                media="(max-width: 600px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <source
                media="(min-width: 601px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <img
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg"
                alt="library"
                width="413"
                height="266"
              />
            </picture>
          </li>
          <li class="cs-item">
            <router-link to="/wills" class="cs-link">
              <img
                class="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
                alt="icon"
                width=""
                height=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <h3 class="cs-h3">Wills & Estates</h3>
              <p class="cs-item-text">
                Drafting Wills, handling Estate Administration, Assitance with Estate Planning, Representation in Will or Estate Contestations.
              </p>
            </router-link>
            <picture class="cs-image" aria-hidden="true">
              <source
                media="(max-width: 600px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <source
                media="(min-width: 601px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <img
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg"
                alt="library"
                width="413"
                height="266"
              />
            </picture>
          </li>
          <li class="cs-item">
            <router-link to="/corporate" class="cs-link">
              <img
                class="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
                alt="icon"
                width=""
                height=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <h3 class="cs-h3">Corporate Law</h3>
              <p class="cs-item-text">
                Drafting and Filing Articles of Incorporation, Corporate Minute Books, Share Certificates, Corporate Ledgers, and Corporate Accounts.
              </p>
            </router-link>
            <picture class="cs-image" aria-hidden="true">
              <source
                media="(max-width: 600px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <source
                media="(min-width: 601px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <img
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg"
                alt="library"
                width="413"
                height="266"
              />
            </picture>
          </li>
          <li class="cs-item">
            <router-link class="cs-link" to="/contact">
              <img
                class="cs-icon"
                src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons%2Fcase.svg"
                alt="icon"
                width=""
                height=""
                loading="lazy"
                decoding="async"
                aria-hidden="true"
              />
              <h3 class="cs-h3">Family Law</h3>
              <p class="cs-item-text">
                Drafting Legal Agreements for Custody, Separation Agreements, Prenuptial Agreements, Co-habitation Agreements, and Representation in Family Court.
              </p>
            </router-link>
            <picture class="cs-image">
              <source
                media="(max-width: 600px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <source
                media="(min-width: 601px)"
                srcset="
                  https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg
                "
              />
              <img
                loading="lazy"
                decoding="async"
                src="https://csimg.nyc3.digitaloceanspaces.com/Services/library.jpg"
                alt="library"
                width="413"
                height="266"
                aria-hidden="true"
              />
            </picture>
          </li>
        </ul>
      </div>
    </section>
    <CallToAction/>
    <Footer/>
  </div>
</template>

<style scoped>
/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #services-296 {
    padding: var(--sectionPadding);
  }
  #services-296 .cs-container {
    width: 100%;
    /* changes to 1440px on desktop */
    max-width: 43.75rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 48px - 64px */
    gap: clamp(3rem, 6vw, 4rem);
  }
  #services-296 .cs-content {
    /* set text align to left if content needs to be left aligned */
    text-align: center;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* centers content horizontally, set to flex-start to left align */
    align-items: center;
    margin-top: 10rem;
  }

  #services-296 .cs-title {
    max-width: 30ch;
  }
  #services-296 .cs-card-group {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* 16px - 20px */
    gap: clamp(1rem, 1.5vw, 1.25rem);
  }
  #services-296 .cs-item {
    list-style: none;
    text-align: left;
    width: 100%;
    margin: 0;
    padding: 2rem;
    background-color: #f7f7f7;
    border-radius: 1rem;
    /* clips image corners */
    overflow: hidden;
    /* prevents padding from adding to height and width */
    box-sizing: border-box;
    position: relative;
    z-index: 1;
    transition: background-color 0.3s;
  }
  #services-296 .cs-item:hover {
    cursor: pointer;
  }
  #services-296 .cs-item:hover .cs-image {
    opacity: 1;
  }
  #services-296 .cs-item:hover .cs-image img {
    transform: scale(1.1);
  }
  #services-296 .cs-item:hover .cs-icon {
    /* turns it white */
    filter: grayscale(1) brightness(1000%);
  }
  #services-296 .cs-item:hover .cs-h3,
  #services-296 .cs-item:hover .cs-item-text {
    color: #fff;
  }
  #services-296 .cs-image {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    z-index: -1;
    background-color: var(--primary);
    transition: opacity 0.3s;
  }
  #services-296 .cs-image img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.4;
    object-fit: cover;
    transition: transform 0.6s;
  }
  #services-296 .cs-link {
    text-decoration: none;
  }
  #services-296 .cs-icon {
    width: auto;
    height: 3rem;
    margin-bottom: 1.5rem;
    display: block;
  }
  #services-296 .cs-icon path {
    transition: fill 0.3s;
  }
  #services-296 .cs-h3 {
    /* 20px - 25px */
    font-size: clamp(1.25rem, 2vw, 1.5625rem);
    line-height: 1.2em;
    margin: 0;
    margin-bottom: 1rem;
    color: var(--headerColor);
    transition: color 0.3s;
    font-weight: bold;
  }
  #services-296 .cs-item-text {
    font-size: 1rem;
    line-height: 1.5em;
    margin: 0;
    color: var(--bodyTextColor);
    transition: color 0.3s;
  }
}
/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
  #services-296 .cs-card-group {
    justify-content: space-between;
    /* makes sure every box "stretches" to be the same height as the tallest box */
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
  }
  #services-296 .cs-item {
    width: 48.6%;
  }
}
/* Desktop - 1300px */
@media only screen and (min-width: 81.25rem) {
  #services-296 .cs-container {
    max-width: 90rem;
  }
  #services-296 .cs-card-group {
    justify-content: center;
  }
  #services-296 .cs-item {
    /* we do this so it's stackable. You can add new any number of reviews you want and they will stack and center in the middle. We dont use grid because if you have an odd number of reviews, they don't stay centered.  They align with their grid lines. If you want 4 reviews in a row, lower the width under 22.5vw or 23% to get the desired sizes fit 4 in a row and then stack when you add more */
    width: clamp(23.84%, 22.5vw, 23.95%);
  }
}
</style>
