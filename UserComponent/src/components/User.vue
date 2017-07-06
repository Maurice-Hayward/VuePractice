<template>
    <div class="component">
        <h1>The User Component</h1>
        <button @click="changeName()">Change My Name</button>
        <p>I'm an awesome User!</p>
        <p>Name is {{name}}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :userAge="age" :name="name" @nameWasReset="name=$event" :resetFn="resetName"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";

export default {
    data: function() {
        return {
            name: "Maurice",
            age: 18
        };
    },
    methods: {
        changeName() {
            this.name = "Anna";
        },
        resetName() {
            this.name = "Maurice";
        }
    },
    components: {
        appUserDetail: UserDetail,
        appUserEdit: UserEdit
    }
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
