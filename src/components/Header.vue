<script setup>

</script>
<template>
  <div class="navigation-bar">
    <div class="logo">Learn</div>
    <nav>
      <router-link :to="{name: 'courseHome'}" class="nav-link">Home</router-link>
      <router-link :to="{name: 'courseHome'}" class="nav-link">Login</router-link>
      <router-link :to="{name: 'courseHome'}" class="nav-link">Register</router-link>
    </nav>
  </div>
</template>

<style scoped>
.navigation-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.4rem 2%;
  background: #35a186;
}
.navigation-bar .logo{
  font-size: 1.3rem;
  font-weight: bolder;
}
nav{
  display: inline-flex;
  gap: 2rem;
}
nav .nav-link{
  text-decoration: none;
  color: #fff;
  font-weight: bolder;
}
</style>