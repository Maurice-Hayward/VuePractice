<template>
<li class="list-group-item" style="cursor: pointer" @click="serverSelected()">
    Server # {{Server.id}}
</li>
</template>

<script>
import { serverBus } from "../../main";
export default {
    props: ["Server"],
    methods: {
        serverSelected() {
            serverBus.$emit("serverSelected", this.Server);
        }
    }
};
</script>

<style scoped>
div {
    border: 1px solid blue;
}
</style>
