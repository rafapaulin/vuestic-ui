<template>
  <div class="header-banner">
    <div class="header__wrapper">
      <div class="header-banner__left">
        <strong>{{ $t("landing.header.banner.partner") }}</strong>
        <a href="https://vuejs.org/partners/epicmax.html" title="Epicmax creates high performance Vue.js interfaces" class="nuxt-link ml-7">
          <svg xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="-39.26295 -56.672 340.2789 340.032"><path fill="#41b883" d="M161.101 0l-30.224 52.35L100.652 0H0l130.877 226.688L261.753 0z"></path><path fill="#34495e" d="M161.101 0l-30.224 52.35L100.652 0H52.351l78.526 136.01L209.403 0z"></path></svg>
        </a>
        <a href="https://vuejs.org/partners/epicmax.html" target="_blank" class="link-4">
          <strong class="bold-text-9"> Vue.js </strong>
        </a>

        <strong class="ml-7">{{ $t("landing.header.banner.and") }}</strong>

        <a href="https://nuxtjs.org/partners/epicmax" title="Epicmax creates high performance Vue.js interfaces" class="nuxt-link ml-7">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 400 303" version="1">
            <g fill="none" fill-rule="evenodd">
              <path d="M123 292l-1-1c-2-4-2-8-2-12H25L167 27l59 107 19-14-59-107c-1-2-8-13-20-13-5 0-13 2-19 13L4 268c-1 2-7 14-1 24 2 5 8 10 21 10h120c-13 0-19-5-21-10z" fill="#00C58E"></path>
              <path d="M395 269L280 62c-2-2-8-13-20-13-5 0-12 2-19 13l-15 24v48l34-59 114 204h-43a20 20 0 0 1-2 12v1c-6 10-19 10-21 10h68c2 0 15 0 21-10 2-5 4-13-2-23z" fill="#108775"></path>
              <path d="M332 292v-1l1-2c1-3 2-7 1-10l-4-11-90-158-13-24h-1l-13 24-91 158-3 11a21 21 0 0 0 2 13c3 5 9 10 21 10h168c3 0 16 0 22-10zM226 134l83 145H144l82-145z" fill="#2F495E" fill-rule="nonzero"></path>
            </g>
          </svg>
        </a>
        <a href="https://nuxtjs.org/partners/epicmax" target="_blank" class="link-5"><strong class="bold-text-9">Nuxt</strong></a>
      </div>
      <div class="header__banner-button">
        <va-button href="https://epicmax.co/contacts?ref=vuestic-header" target="blank">{{ $t("landing.header.banner.hire") }}</va-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/main";

.header__wrapper {
  @include wrapper();
}

.header-banner--docs .header__wrapper {
  max-width: 100%;
}

.header-banner {
  min-height: 40px;
  padding: 7px 0;
  background-color: #012875;
  font-size: 0.9rem;
  color: white;

  &__button {
    z-index: 10;
  }

  .header__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @include xs(flex-direction, column);
  }

  a {
    color: white !important;
  }

  &__left {
    display: flex;
    align-items: center;
  }

  .ml-7 {
    margin-left: 7px;
  }
}
</style>
