<template>
  <form
    class="proposal-form"
    name="contact"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <input type="hidden" name="form-name" value="ask-question" />
    <inp-primary
      v-model="mail.name"
      class="mb-3"
      id="name-inp"
      name="name"
      label="What’s your name?"
      required
    />

    <inp-primary
      v-model="mail.email"
      class="mb-3"
      id="email-inp"
      type="email"
      label="Then your email address here"
      name="email"
      required
    />

    <inp-primary
      v-model="mail.text"
      id="content-inp"
      label="Finally tell me your great idea"
      name="message"
      textarea
      required
    />

    <div class="proposal-form__file mt-2 mb-3">
      <div>or maybe share your idea thru file (docx, image or else...)</div>
      <input
        ref="fileInput"
        type="file"
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

export default {
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
