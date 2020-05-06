<template>
  <form class="proposal-form">
    <inp-primary class="mb-3" id="name-inp" label="What’s your name?"></inp-primary>

    <inp-primary class="mb-3" id="email-inp" type="email" label="Then your email address here"></inp-primary>

    <inp-primary textarea id="content-inp" label="Finally tell me your great idea"></inp-primary>

    <div class="proposal-form__file mt-2 mb-3">
      <div>or maybe share your idea thru file (docx, image or else...)</div>

      <btn-icon name="clip" icon="icon_attach"></btn-icon>
    </div>

    <btn-primary block dense label="Send it!"></btn-primary>
  </form>
</template>

<script>
import Icon from "@/utils/icons";
export default {
  data() {
    return {
      icon: {
        clip: Icon.clip
      }
    };
  }
};
</script>
