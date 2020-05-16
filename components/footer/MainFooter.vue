<template>
  <footer id="footer" class="footer footer--main blue">
    <div class="container">
      <div class="footer--main__intro">
        <h1 class="heading heading--footer">
          Never stop learning,
          <span class="yellow--text">Never</span> give up your
          <span class="light-blue--text">dream</span>. We don't just come here to lose, Keep
          <span class="yellow--text">fighting</span> for your dreams.
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
        <nuxt-link to="/">Christopher Lugod</nuxt-link>
        © {{new Date().getFullYear()}}
      </div>
    </div>
  </footer>
</template>

<script>
import FooterList from "@/components/list/FooterList";
import gsap from "gsap";

export default {
  components: { FooterList },
  created() {},

  data() {
    return {
      contactLinks: [
        {
          icon: "icon_phone",
          label: "09286665903"
        },
        {
          icon: "icon_email",
          label: "christialugod05@gmail.com"
        }
      ],

      socialLinks: [
        {
          icon: "icon_upwork",
          label: "Hire me at Upwork",
          link: "https://www.upwork.com/freelancers/~0183563188426b2c0c"
        },
        {
          icon: "icon_github",
          label: "Github",
          link: "https://github.com/topzdev"
        },
        {
          icon: "icon_dribbble",
          label: "Dribbble",
          link: "https://dribbble.com/TopzTheDev"
        },
        {
          icon: "icon_linkedin",
          label: "LinkedIn",
          link: "https://www.linkedin.com/in/christopher-lugod-ba146b197/"
        },
        {
          icon: "icon_facebook",
          label: "Facebook",
          link: "https://www.facebook.com/Christoplugod"
        },
        {
          icon: "icon_twitter",
          label: "Twitter",
          link: "https://twitter.com/_christop_"
        },
        {
          icon: "icon_instagram",
          label: "Instagram",
          link: "https://www.instagram.com/christoplugod/"
        }
      ]
    };
  }
};
</script>
