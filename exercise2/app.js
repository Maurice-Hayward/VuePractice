new Vue({
    el: "#exercise",
    data: {
        value: ""
    },
    methods: {
        alertMe: function alertMe() {
            alert("cool");
        },
        storeKey: function(event) {
            this.value = event.target.value;
        }
    }
});
