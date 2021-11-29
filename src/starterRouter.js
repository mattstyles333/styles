import Vue from "vue";
import Router from "vue-router";
import Navbar from "./layout/StarterNavbar.vue";
import Footer from "./layout/StarterFooter.vue";
import About from "./pages/about/About.vue";
import Pricing from "./pages/pricing/Pricing.vue";
import Testimonials from "./pages/testimonials/Testimonials.vue";
import Contact from "./pages/contact/Contact.vue";
import Home from "./pages/homepage/HomePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "homepage",
      components: { default: Home, header: Navbar, footer: Footer },
      props: {footer: {type: 'default'}, header: {colorOnScroll: 450}}
    },
    {
      path: "/about",
      name: "about",
      components: { default: About, header: Navbar, footer: Footer },
      props: {
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/pricing",
      name: "Pricing",
      components: { default: Pricing, header: Navbar, footer: Footer },
      props: {
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/testimonials",
      name: "Testimonials",
      components: { default: Testimonials, header: Navbar, footer: Footer },
      props: {
        footer: { backgroundColor: "black" },
      },
    },
    {
      path: "/contact",
      name: "Contact",
      components: { default: Contact, header: Navbar, footer: Footer },
      props: {
        footer: { backgroundColor: "black" },
      },
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});
