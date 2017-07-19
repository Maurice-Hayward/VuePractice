<template>
    <div>
        <h3>User Details</h3>
        <p>User Loaded has Id: {{$route.params.id}}</p>
        <router-link tag="button" :to="link"  class="btn btn-primary">Edit Us</router-link>

    </div>
</template>
<script>
export default {
    data() {
        return {
            link: {
                name: "userEdit",
                params: { id: this.$route.params.id },
                query: { local: "en", q: 100 },
                hash: "#data"
            }
        };
    }
};
</script>
