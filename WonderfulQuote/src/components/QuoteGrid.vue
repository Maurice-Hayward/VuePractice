<template>
<div class="row">
    <quote v-for="(quote, index) in quotes " @click.native="deleteQuote(index)">
        <p>{{quote}}</p>
    </quote>
</div>
</template>

<script>
import Quote from "./Quote.vue";
export default {
    props: ["quotes"],
    methods: {
        deleteQuote: function deleteQuote(index) {
            this.$emit("quoteDeleted", index);
        }
    },
    components: {
        quote: Quote
    }
};
</script>

<style>

</style>
