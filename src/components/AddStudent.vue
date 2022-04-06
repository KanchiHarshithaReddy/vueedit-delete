<template>
  <div class="pt-1 pb-1 mb-3">
    <h1 class="h2">Add Employee</h1>
  </div>
  <form @submit.prevent="onFormSubmit">
    <div class="flex">
    <div class="card">
       <div class="container">

          <div >
            <label for="CompanyName">CompanyName</label>
            <input
              type="text"
              class="form-control"
              v-model="user.CompanyName"
              required
            />
          </div>

          <div >
            <label for="email">Email</label>
            <input
              type="email"
              class="form-control"
              v-model="user.email"
              required
            />
          </div>
          <div >
            <label for="state">State</label>
            <input
              type="text"
              class="form-control"
              v-model="user.state"
              required
            />
          </div>
          <div class="btn">
            <button class="btn btn-primary btn-block" v-on:clck="onFormSubmit">
              add employee
            </button>
          </div>
          </div>
          </div>
          </div>
        </form>
</template>
<script>
import firebase from "../database";
const db = firebase.ref("students-list");
export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onFormSubmit(event) {
      event.preventDefault();
      db.push(this.user)
        .then(() => {
          alert("Student successfully created!");
          this.$router.push("/students");
          this.user.CompanyName = "";
         
          this.user.email = "";
          this.user.state = "";
        })
        console.log(this.user)
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style scoped>
.container{
  height: 330px;
  width: 450px;
display: block;
  padding-top:43px;
  

}
.card{
     width: 550px;
    height: 270px;
    border: 2px solid black;
    background-color: rgb(248, 248, 246);
border-radius: 10px;
}
.flex{
  margin-left:350px;


}
.form-control{
  height:35px;
  border-radius: 8px;

}
</style>