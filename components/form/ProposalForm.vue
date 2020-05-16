<template>
  <form
    name="proposal"
    class="proposal-form"
    @submit.prevent="handleSubmit"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="ask-question" />
    <inp-primary
      name="name"
      v-model="mail.name"
      class="mb-3"
      id="name-inp"
      label="What’s your name?"
      required
    />

    <inp-primary
      name="email"
      v-model="mail.email"
      class="mb-3"
      id="email-inp"
      type="email"
      label="Then your email address here"
      required
    />

    <inp-primary
      name="message"
      v-model="mail.text"
      id="content-inp"
      label="Finally tell me your great idea"
      textarea
      required
    />

    <div class="proposal-form__file mt-2 mb-3" id="file-inp">
      <div>or maybe share your idea thru file (docx, image or else...)</div>
      <input
        type="file"
        name="file"
        ref="fileInput"
        style="display:none;"
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
        @change="onFileChange"
      />

      <btn-icon
        :title="fileValidation.name"
        :class="fileValidation.show"
        type="button"
        icon="icon_attach"
        @click.native="openFileDrawer"
      />
    </div>
    <btn-primary block dense type="submit" :loading="loading" label="Send it!"></btn-primary>
  </form>
</template>

<script>
import Icon from "@/utils/icons";
import { PROPOSAL_SNACK } from "@/store/types";
import gsap from "gsap";

export default {
  data() {
    return {
      loading: false,
      icon: {
        clip: Icon.clip
      },
      mail: {
        name: "",
        email: "",
        text: "",
        file: ""
      }
    };
  },
  computed: {
    form() {
      return {
        name: this.mail.name,
        email: this.mail.email,
        message: this.mail.text,
        attach: this.mail.file
      };
    },

    fileValidation() {
      const file = this.mail.file;
      return {
        name: file ? file.name : "",
        show: file ? "btn-icon-active" : ""
      };
    }
  },
  mounted() {
    const timeline = gsap.timeline(),
      root = "#hireme";

    const controller = new ScrollMagic.Controller();

    timeline
      .from(".heading--secondary", {
        y: "30",
        autoAlpha: 0,
        duration: 0.5
      })
      .to("#hireme .inp--primary", {
        y: "-30",
        stagger: 0.5,
        autoAlpha: 1,
        duration: 1.5,
        ease: "Elastic.easeOut"
      })
      .from(
        ".proposal-form .proposal-form__file",
        {
          y: "30",
          autoAlpha: 0,
          duration: 0.5
        },
        "-=1"
      )
      .from(
        ".proposal-form .btn--primary",
        {
          y: "30",
          autoAlpha: 0,
          duration: 0.5
        },
        "-=.5"
      );

    const scene = new ScrollMagic.Scene({
      triggerElement: root,
      triggerHook: 1,
      offset: 200,
      reverse: false
    })
      .setTween(timeline)
      .addTo(controller);
  },
  methods: {
    openFileDrawer(e) {
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      console.log(files[0]);
      this.mail.file = files[0];
    },
    encode(data) {
      const formData = new FormData();

      for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
      }
      return formData;
    },
    async handleSubmit() {
      this.loading = true;

      const axiosConfig = {
        header: { "Content-Type": "multipart/form-data" }
      };

      try {
        const result = await axios.post(
          "/",
          this.encode({ "form-name": "proposal", ...this.form }),
          axiosConfig
        );

        console.log(result);
        this.loading = false;
        this.$store.commit("frontend/" + PROPOSAL_SNACK, {
          show: true,
          text: "Thanks for the proposal!, I'll review it immediately."
        });
      } catch (error) {
        this.loading = false;
        this.$store.commit("frontend/" + PROPOSAL_SNACK, {
          show: true,
          text: "Something went wrong, Try again later",
          error: true
        });
        console.log(error);
      }
    }
  }
};
</script>

<style>
#hireme .inp--primary {
  opacity: 0;
  top: 20px;
}
</style>