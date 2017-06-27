new Vue({
    el: "#exercise",
    data: {
        highlighted: true, // false will shrink
        well: "well",
        color: "green",
        userClass1: "well",
        userClass2: "reallywide",
        use: true
    },

    methods: {
        startEffect: function() {
            let model = this;

            setInterval(function() {
                model.highlighted = !model.highlighted;
            }, 2000);
        }
    }
});
