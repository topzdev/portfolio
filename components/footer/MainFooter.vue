<template>
  <footer id="footer"
          class="footer footer--main blue">
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
        <footer-list title="Contacts"
                     :links="contactLinks" />
        <footer-list title="Social Links"
                     :links="socialLinks" />
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

export default {
  components: {
    FooterList,
  },
  created() { },

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
          icon: "GithubIcon.vue",
          label: "Github",
          link: "https://github.com/topzdev",
        },
        {
          icon: "LinkedInIcon.vue",
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/christianlugod15/",
        },
        {
          icon: "InstagramIcon.vue",
          label: "Instagram",
          link: "https://www.instagram.com/_christopz",
        },
        {
          icon: "ThreadsIcon.vue",
          label: "Threads",
          link: "https://www.threads.com/@_christopz",
        },
        {
          icon: "FacebookIcon.vue",
          label: "Facebook",
          link: "https://www.facebook.com/Christoplugod",
        },



      ],
    };
  },
};
</script>
