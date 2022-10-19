<template>
  <footer id="footer" class="footer footer--main blue">
    <div class="container">
      <div class="footer--main__intro">
        <h1 class="heading heading--footer">
          Never stop learning,
          <span class="yellow--text">Never</span> give up your
          <span class="light-blue--text">dream</span>. We don't just come here
          to lose, Keep <span class="yellow--text">fighting</span> for your
          dreams.
        </h1>
      </div>

      <div class="footer--main__group">
        <footer-list title="Contacts" :links="contactLinks" />
        <footer-list title="Social Links" :links="socialLinks" />
      </div>

      <div class="footer--main__copyright">
        <span class="yellow--text">Designed</span> and
        <span class="light-blue--text">Developed</span>
        by
        <nuxt-link to="/">Christian Lugod</nuxt-link>
        © {{ new Date().getFullYear() }}
      </div>
    </div>
  </footer>
</template>

<script>
import FooterList from "@/components/list/FooterList";
// import PhoneIcon from "@/components/icons/PhoneIcon.vue";
// import UpworkIcon from "@/components/icons/UpworkIcon.vue";
// import GithubIcon from "@/components/icons/GithubIcon.vue";
// // import InstagramIcon from "@/components/icons/InstragramIcon.vue";
// import DribbleIcon from "@/components/icons/DribbleIcon.vue";
// import LinkedInIcon from "@/components/icons/LinkedInIcon.vue";
// import FacebookIcon from "@/components/icons/FacebookIcon.vue";
// import TwitterIcon from "@/components/icons/TwitterIcon.vue";
import gsap from "gsap";

export default {
  components: {
    FooterList,
    // PhoneIcon,
    // EmailIcon,
    // UpworkIcon,
    // GithubIcon,
    // InstagramIcon,
    // DribbleIcon,
    // LinkedInIcon,
    // FacebookIcon,
    // TwitterIcon,
  },
  created() {},

  data() {
    return {
      contactLinks: [
        {
          icon: "PhoneIcon.vue",
          label: "09286665903",
          link: "tel:09286665903",
        },
        {
          icon: "EmailIcon.vue",
          label: "christianlugod05@gmail.com",
          link: "mailto:christianlugod05@gmail.com",
        },
      ],

      socialLinks: [
        {
          icon: "UpworkIcon.vue",
          label: "Hire me at Upwork",
          link: "https://www.upwork.com/freelancers/~0183563188426b2c0c",
        },
        {
          icon: "GithubIcon.vue",
          label: "Github",
          link: "https://github.com/topzdev",
        },
        {
          icon: "DribbleIcon.vue",
          label: "Dribbble",
          link: "https://dribbble.com/TopzTheDev",
        },
        {
          icon: "LinkedInIcon.vue",
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/christopher-lugod-ba146b197/",
        },
        {
          icon: "FacebookIcon.vue",
          label: "Facebook",
          link: "https://www.facebook.com/Christoplugod",
        },
        {
          icon: "TwitterIcon.vue",
          label: "Twitter",
          link: "https://twitter.com/_christop_",
        },
        {
          icon: "InstagramIcon.vue",
          label: "Instagram",
          link: "https://www.instagram.com/christoplugod/",
        },
      ],
    };
  },
};
</script>
