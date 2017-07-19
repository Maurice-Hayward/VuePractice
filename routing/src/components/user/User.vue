<template>
<div>
    <h3>User</h3>
    <hr />
    <button @click="navigateToHome" class="btn btn-primary">Go to Home</button>
    <hr />
    <router-view ></router-view>
</div>
</template>

<script>
export default {
    methods: {
        navigateToHome() {
            this.$router.push({ name: "HOME" });
        }
    }
};
</script>
