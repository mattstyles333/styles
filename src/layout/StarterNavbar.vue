<template>
  <navbar position="fixed" type="white" menu-classes="ml-auto">
    <router-link class="navbar-brand" to="/"> Styles </router-link>

    <template slot="navbar-menu">
      <nav-link to="/"> Home </nav-link>
      <nav-link to="/about"> About </nav-link>
      <nav-link to="/pricing"> Pricing </nav-link>
      <nav-link to="/testimonials"> Testimonials </nav-link>
      <nav-link to="/contact"> Contact </nav-link>
    </template>
  </navbar>
</template>

<script>
import { DropDown, Navbar, NavLink } from "@/components";

export default {
  name: "MainNavbar",
  components: {
    DropDown,
    Navbar,
    NavLink,
  },
  props: {
    transparent: Boolean,
    colorOnScroll: Number,
  },
  data() {
    return {
      types: [
        "white",
        "default",
        "primary",
        "danger",
        "success",
        "warning",
        "info",
      ],
    };
  },
};
</script>

<style scoped></style>
