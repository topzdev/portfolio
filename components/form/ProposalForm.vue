<template>
  <form name="contact" class="proposal-form" method="POST" netlify>
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
        hidden
        accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint, text/plain, application/pdf, image/*"
        @change="onFileChange"
      />

      <btn-icon type="button" icon="icon_attach" @click.native="openFileDrawer" />
    </div>

    <btn-primary block dense type="submit" label="Send it!"></btn-primary>
  </form>
</template>

<script>
import Icon from "@/utils/icons";
import { PROPOSAL_SNACK } from "@/store/types";
import gsap from "gsap";

export default {
  mounted() {
    const timeline = gsap.timeline(),
      root = "#hireme";

    const controller = new ScrollMagic.Controller();

    timeline.to("#hireme .inp--primary", {
      y: "-30",
      stagger: 0.8,
      autoAlpha: 1,
      duration: 2,
      ease: "Elastic.easeOut"
    });

    const scene = new ScrollMagic.Scene({
      triggerElement: root,
      triggerHook: 1,
      offset: 200,
      reverse: false
    })
      .setTween(timeline)
      .addIndicators()
      .addTo(controller);
  },
  methods: {
    openFileDrawer(e) {
      console.log("Hello", e);
      this.$refs.fileInput.click();
    },
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.mail.files = files;
    }
  },
  data() {
    return {
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
  }
};
</script>

<style>
#hireme .inp--primary {
  opacity: 0;
  top: 20px;
}
</style>