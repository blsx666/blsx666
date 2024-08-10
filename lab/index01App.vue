<template>
    <div id="index01app">
        <h1>xmodal</h1>
        <button @click="ismodalOpen = !ismodalOpen">open modal</button>
        <xmodal v-model="ismodalOpen" :params="options" />
    </div>
</template>

<script>
import Vue from "vue";
import xmodal from "xmodal-vue";

import modal from "index01modal.vue";

Vue.use(xmodal);

export default {
    name: "App",
    data() {
        return {
            ismodalOpen: false,
            // basic modal options
            options: {
                component: modal,
                backgroundColor: "#000000",
                opacity: "0.7",
                animation: "scaleLeft",
            },
        };
    },
    beforeMount(){
    }
};
</script>