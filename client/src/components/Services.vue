<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <section id="services-1121">
    <div class="cs-container">
      <ul class="cs-card-group">
        <li class="cs-item">
          <div class="cs-image-group">
            <i class="fa-solid fa-house cs-icon"></i>
            <img
              class="cs-graphic"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
              alt="shape"
              width="48"
              height="48"
            />
          </div>
          <div class="cs-flex">
            <h2 class="cs-h2">Real Estate Law</h2>
            <p class="cs-item-text">
              Closing the transaction on your purchase or sale of real estate
            </p>
          </div>
        </li>
        <li class="cs-item">
          <div class="cs-image-group">
            <i class="fa-solid fa-pen-nib cs-icon"></i>
            <img
              class="cs-graphic"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
              alt="shape"
              width="48"
              height="48"
            />
          </div>
          <div class="cs-flex">
            <h2 class="cs-h2">Wills & Estates</h2>
            <p class="cs-item-text">
              Drafting wills and estate administration services for individuals and families
            </p>
          </div>
        </li>
        <li class="cs-item">
          <div class="cs-image-group">
            <i class="fa-solid fa-building cs-icon"></i>
            <img
              class="cs-graphic"
              loading="lazy"
              decoding="async"
              src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/grey-shape.svg"
              alt="shape"
              width="48"
              height="48"
            />
          </div>
          <div class="cs-flex">
            <h2 class="cs-h2">Corporate Law</h2>
            <p class="cs-item-text">
              Preparing and filing articles of incorporation, corporate minute books, and share certificates
            </p>
          </div>
        </li>
      </ul>
    </div>
    <!--SVG Waves-->
    <img
      class="cs-waves"
      src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/charity-waves.svg"
      alt="waves"
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      width="1920"
      height="616"
    />
  </section>
</template>

<style scoped>
/* Mobile - 360px */
@media only screen and (min-width: 0rem) {
  #services-1121 {
    padding: var(--sectionPadding);
    background-color: #1a1a1a;
    position: relative;
    z-index: 1;
  }
  #services-1121 .cs-container {
    width: 100%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 48px - 64px */
    gap: clamp(3rem, 6vw, 4rem);
  }
  #services-1121 .cs-card-group {
    width: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* changes to a clamp on tablet */
    gap: 2.5rem;
  }
  #services-1121 .cs-item {
    text-align: center;
    list-style: none;
    width: 100%;
    max-width: 25.8125rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* 16px - 24px */
    gap: clamp(1rem, 3vw, 1.5rem);
  }
  #services-1121 .cs-image-group {
    /* 80px - 100px */
    width: clamp(5rem, 8vw, 6.25rem);
    height: clamp(5rem, 8vw, 6.25rem);
    display: flex;
    justify-content: center;
    align-items: center;
    /* prevents flexbox from squishing it */
    flex: none;
    position: relative;
    z-index: 1;
  }
  #services-1121 .cs-icon {
    /* 36px - 48px */
    width: clamp(2.25rem, 4vw, 3rem);
    height: auto;
    font-size: 3rem;
    color: rgb(255, 219, 90);
  }
  #services-1121 .cs-graphic {
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  #services-1121 .cs-h2 {
    /* 20px - 25px */
    font-size: clamp(1.25rem, 2.5vw, 1.5625rem);
    line-height: 1.2em;
    font-weight: 700;
    text-align: inherit;
    margin: 0 0 0.75rem;
    color: var(--bodyTextColorWhite);
  }
  #services-1121 .cs-item-text {
    font-size: 1rem;
    line-height: 1.5em;
    text-align: inherit;
    margin: 0;
    color: var(--bodyTextColorWhite);
  }
  #services-1121 .cs-waves {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    /* makes it act like a background image */
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
}
/* Tablet - 768px */
@media only screen and (min-width: 48rem) {
  #services-1121 .cs-card-group {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    /* 16px - 20px */
    gap: clamp(1rem, 2.5vw, 1.25rem);
  }
}
/* Small Desktop - 1024px */
@media only screen and (min-width: 64rem) {
  #services-1121 .cs-item {
    text-align: left;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
