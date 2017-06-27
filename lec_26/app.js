new Vue({
    el: "#app",
    data: {
        attachRed: false,
        color: "green",
        width: 100
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + "px"
            };
        }
    }
});
