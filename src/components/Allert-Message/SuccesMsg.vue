<template>
    <v-alert
      class="overlay-alert"
      append
      width="500"
      text="Successfully added"
      title="Alert title"
      type="success"
      closable
      :timeout="timeout"
      v-model="alert"
    ></v-alert>
  </template>
  
  <script>
  export default {
    name: "SuccesMsg",
    props: {
      showAlert: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        alert: this.showAlert,
        timeout: 2000,
      };
    },
    watch: {
      showAlert(newVal) {
        this.alert = newVal;
      },
    },
  };
  </script>
  
  <style scoped>
  .overlay-alert {
    position: absolute;
    margin-top: 10px;
    margin-right: 10px;
    right: 20px; /* Adjust as needed */
    z-index: 1000; /* Ensure it appears on top */
  }
  </style>
  