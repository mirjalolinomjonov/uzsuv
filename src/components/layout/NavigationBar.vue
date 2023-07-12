<template>
  <nav class="nav" :class="{ home: hasHome }">
    <ul class="nav-list container flex-center-between">
      <div class="flex-center gap-6">
        <router-link to="/">
          <icon-base class="cursor-pointer mr-2" :name="hasHome ? 'nav_drop' : 'nav_drop_blue'" />
        </router-link>
        <icon-base class="cursor-pointer" name="nav_grid" :color="hasHome ? '#fff' : '#5B7293'" />

        <li class="nav-list__item" v-for="item in 6" :key="item">
          <router-link class="nav-list__item-link" to="#"> jamiyat haqida </router-link>

          <ul class="dropdown-list">
            <li class="dropdown-list__item">
              <router-link class="dropdown-list__item-link" v-for="item in 5" :key="item" to="#">
                Lorem, ipsum dolor.
              </router-link>
            </li>
          </ul>
        </li>
      </div>
      <icon-base
        @click="hasShowSearchBar = !hasShowSearchBar"
        class="search-or-close cursor-pointer"
        :name="hasShowSearchBar ? 'close_x' : 'search'"
      />
    </ul>

    <!-- search bar -->
    <div class="nav__search-bar grid place-content-center" :class="{ active: hasShowSearchBar }">
      <label>
        <input @blur="hasShowSearchBar = false" type="text" placeholder="Izlash..." />
        <icon-base name="search" color="#fff" />
      </label>
    </div>
  </nav>
</template>

<script>
import IconBase from '../common/IconBase.vue'
export default {
  components: {
    IconBase
  },
  data() {
    return {
      hasShowSearchBar: false
    }
  },
  computed: {
    hasHome() {
      return this.$route?.name === 'home'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  background: #fff;
  border-bottom: 1px solid hsla(0, 0%, 100%, 0.5);
  backdrop-filter: blur(2px);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  z-index: 2;

  // nav-list
  &-list {
    &:hover &__item-link,
    &:hover .icon {
      opacity: 0.6;
    }

    & &__item-link:hover,
    & .icon:hover {
      opacity: 1;
    }

    // nav-list__item
    &__item {
      position: relative;

      &:hover .dropdown-list {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
        z-index: 1;
      }

      // nav-list__item-link
      &-link {
        display: inline-block;
        padding: 1.75rem 0;
        color: #3e4d63;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-transform: uppercase;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: #305ab6;
        }
      }
    }
  }

  .dropdown-list {
    position: absolute;
    left: 0;
    width: 260px;
    max-height: 507px;
    overflow-y: auto;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.15);
    // pointer-events: none;
    transition: all 0.3s ease-in-out;
    transform: translateY(50px);
    opacity: -1;
    visibility: hidden;
    z-index: -1;

    // dropdown-list__item-link
    &__item-link {
      display: block;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      color: #3e4d63;
      padding: 12px 24px;
      transition: all 0.25s ease-in-out;
      cursor: pointer;
      z-index: 3;

      &:hover {
        background-color: #eeeff1;
      }
    }
  }

  // nav__search-bar
  &__search-bar {
    position: absolute;
    left: 0;
    width: 100%;
    padding: 28px 0;
    background: rgba(36, 46, 52, 0.34);
    backdrop-filter: blur(4px);
    transform: translateY(-106px);
    transition: all 0.25s ease-in-out;
    z-index: -1;
    opacity: 0;
    visibility: hidden;

    &.active {
      transform: translateY(0);
      z-index: 0;
      opacity: 1;
      visibility: visible;
    }

    label {
      display: flex;
      align-items: center;
      width: 784px;
      border: 1px solid #5b7293;
      background: rgba(255, 255, 255, 0.08);
      border-radius: 4px;
      overflow: hidden;

      input {
        width: 100%;
        background: transparent;
        padding: 13px 20px;
        font-weight: 275;
        font-size: 18px;
        line-height: 22px;
        color: #ffffff;
        outline: none;

        &::placeholder {
          color: #ffffff;
        }
      }

      .icon {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }

  // active
  &.home {
    background: rgba(255, 255, 255, 0.5);
    box-shadow: none;
    .nav-list {
      &__item-link {
        color: #fff;
      }
    }
  }
}
</style>

<style lang="scss">
.home .nav-list .search-or-close svg path {
  fill: #fff !important;
}
</style>
