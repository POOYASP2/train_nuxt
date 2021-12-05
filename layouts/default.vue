<template>
  <main>
    <section class="navbar">
      <div class="navbar_cont">
        <div class="navbar_logo">
          <h2><span style="color: #6c55f9">فروشگاه </span>تست</h2>
        </div>
        <div></div>
        <div class="navbar_items">
          <NuxtLink
            v-for="link in links"
            :key="link.id"
            :to="{ name: link.id }"
            :class="{ active: $nuxt.$route.name == link.id }"
            >{{ link.name }}</NuxtLink
          >
        </div>
      </div>
    </section>
    <Nuxt />
    <!-- <footer>

    </footer> -->
  </main>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['links']),
  },
}
</script>
<style scoped>
.navbar {
  width: 100%;
  padding: 1em 2em;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
}
.navbar_cont {
  display: flex;
  align-items: center;
  max-width: 950px;
}
.navbar_logo h2 {
  margin: 0;
  flex-grow: 1;
}
.navbar_items {
  display: flex;
  list-style: none;
  justify-content: space-around;
  flex-grow: 2;
  padding-left: 15%;
}
.navbar a {
  transition: color 0.25s ease-in;
}
.navbar a:link {
  text-decoration: none;
  color: black;
  font-weight: bold;
}
.navbar a:hover {
  color: #6c55f9;
  font-weight: bold;
}
a:visited {
  color: inherit;
}
.active {
  color: #6c55f9 !important;
  font-family: 'VazirB';
  font-weight: bold;
}
</style>