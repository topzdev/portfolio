<template>
  <form class="proposal-form" @submit.prevent="sendMail">
    <inp-primary v-model="mail.name" class="mb-3" id="name-inp" label="What’s your name?" required />

    <inp-primary
      v-model="mail.email"
      class="mb-3"
      id="email-inp"
      type="email"
      label="Then your email address here"
      required
    />

    <inp-primary
      v-model="mail.text"
      id="content-inp"
      label="Finally tell me your great idea"
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
      <btn-icon icon="icon_attach" @click.native="openFileDrawer" />
    </div>

    <btn-primary block dense label="Send it!"></btn-primary>
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
    },
    async sendMail() {
      try {
        const result = await this.$axios.$post("/api/mail", {
          ...this.mail,
          subject: `Proposal from ${this.mail.name}`
        });

        this.$store.commit("frontend/" + PROPOSAL_SNACK, {
          show: true,
          text: "Thanks for the proposal!, I'll review it immediately."
        });
      } catch (error) {
        this.$store.commit("frontend/" + PROPOSAL_SNACK, {
          show: true,
          text: "Somethinh went wrong!",
          error: true
        });
      }
    }
  },
  data() {
    return {
      icon: {
        clip: Icon.clip
      },
      mail: {
        name: "Christopher Lugod",
        email: "christopherlugodcreed@gmail.com",
        text: "Watchmedogieeesssssssss",
        file: ""
      }
    };
  }
};
</script>
