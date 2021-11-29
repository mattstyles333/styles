<template>
  <div class="wrapper landing-page">
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/bg26.jpg')"
      />
      <div class="content-center">
        <h1 class="title">Styles</h1>
        <h3>A Digital Consultancy</h3>

      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Who we are?</h2>
            <h5 class="description">
              We are experts in identifying, matching and building the best
              technical solutions in order to maximize your business' potential.
              Everything is possible, but few have the knowledge and experience
              to navigate and chart the best path,
              <a href="/about">learn more</a> about how we operate differently
              and <a href="/contact">reach out</a> for a free quote today.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary" />
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <!-- First image on the left side -->
              <div
                class="image-container image-left"
                style="background-image: url('img/bg38.jpg')"
              >
                <p class="blockquote blockquote-primary">
                  "On average, large IT projects run 45 percent over budget and
                  7 percent over time while delivering 56 percent less value
                  than predicted."
                  <br />
                  <small>-McKinsey</small>
                </p>
              </div>
              <!-- Second image on the left side of the article -->
              <div
                class="image-container image-left-bottom"
                style="background-image: url('img/bg24.jpg')"
              />
            </div>
            <div class="col-md-5">
              <!-- First image on the right side, above the article -->
              <div
                class="image-container image-right"
                style="background-image: url('img/bg39.jpg')"
              />
              <h3>So what do we do exactly?</h3>
              <p>
                Our expertise is centered around staying up to date with the
                best technical and business practices out there, and ensuring
                that it actually matches your end goals. Work should not only be
                getting easier and more efficient for your business, but it
                should be matched with common sense and prioritized accordingly.
              </p>
              <p>
                We have top flight software engineers, business executives,
                graphic designers, data analysts and among others- but more than
                that, we're focused on delivering the utmost value, not just
                simply billing hours. The standard consultancy model
                incentivizes late, overbudget and poorly designed solutions,
                whereas they really should be solely results-focused.
              </p>
              <p>
                We specialize in Ecommerce, Business Automation, and End to End
                Systems and Tooling, but at our core we are simply put the best
                problem solvers out there.<a href="/contact"> Reach out </a> and we will
                work with you on how to plan for your success while minimizing the risks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="testimonials-1 section-image"
      style="background-image: url('img/bg19.jpg')"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 ml-auto mr-auto text-center">
            <h2 class="title">Proof is in the Pudding</h2>
            <h4 class="description text-white">
              It's one thing to talk a big game, but we walk the walk too.  This is what our clients have said:
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/michael.jpg" />
              <p class="card-description">
                The networking at Web Summit is like no other European tech
                conference.
              </p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right" />
                </div>
                <div class="card-footer">
                  <h4 class="card-title">Michael Elijah</h4>
                  <p class="category">@michaelelijah</p>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/olivia.jpg" />
              <p class="card-description">
                The connections you make at Web Summit are unparalleled, we met
                users all over the world.
              </p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right" />
                </div>
                <div class="card-footer">
                  <h4 class="card-title">Olivia Harper</h4>
                  <p class="category">@oliviaharper</p>
                </div>
              </template>
            </card>
          </div>
          <div class="col-md-4">
            <card type="testimonial">
              <img slot="avatar" class="img img-raised" src="img/james.jpg" />
              <p class="card-description">
                Web Summit will increase your appetite, your inspiration, and
                your network.
              </p>
              <template slot="raw-content">
                <div class="icon icon-primary">
                  <i class="fas fa-quote-right" />
                </div>
                <div class="card-footer">
                  <h4 class="card-title">James Logan</h4>
                  <p class="category">@jameslogan</p>
                </div>
              </template>
            </card>
          </div>
        </div>
      </div>
    </div>
    
    <div class="section section-contact-us text-center">
      <div class="container">
        <h2 class="title">Want to work with us?</h2>
        <p class="description">Your project is very important to us.</p>
        <div class="row">
          <div class="col-lg-6 text-center ml-auto mr-auto col-md-8">
            <fg-input
              v-model="form.firstName"
              class="input-lg"
              placeholder="First Name..."
              addon-left-icon="now-ui-icons users_circle-08"
            />
            <fg-input
              v-model="form.email"
              class="input-lg"
              placeholder="Email Here..."
              addon-left-icon="now-ui-icons ui-1_email-85"
            />
            <div class="textarea-container">
              <textarea
                v-model="form.message"
                class="form-control"
                name="name"
                rows="4"
                cols="80"
                placeholder="Type a message..."
              />
            </div>
            <div class="send-button">
              <n-button type="primary" round block size="lg">
                Send Message
              </n-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Tabs, TabPane } from "@/components";

export default {
  name: "LandingPage",
  bodyClass: "landing-page",
  components: {
    Card,
    Tabs,
    TabPane,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style></style>
