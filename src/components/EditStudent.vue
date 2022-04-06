<template>


   <div class="pt-1 pb-1 mb-3">
    <h1 class="h2">Edit Employee</h1>
  </div>
 
  
  <form @submit.prevent="onUpdateForm">
    <div class="flex">
    <div class="card">
       <div class="container">
    <div class="mb-3">
      <label  class="form-label">CompanyName</label>
      <input
        type="text"
        class="form-control"
        v-model="employee.CompanyName"
        required
      />
    </div>

    <div class="mb-3">
      <label  class="form-label">Email</label>
      <input
        type="email"
        class="form-control"
        v-model="employee.email"
        required
      />
    </div>
    <div class="mb-3">
      <label  class="form-label">state</label>
      <input
        type="text"
        class="form-control"
        v-model="employee.state"
        required
      />
    </div>
    <div class="mb-3">
      <button class="btn btn-primary btn-block">Update Employee</button>
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
      employee: {},
    };
  },
  created() {
    let dbRef = db.child(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.employee = doc.val();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    onUpdateForm(event) {
      event.preventDefault();
      db.child(this.$route.params.id)
        .update(this.employee)
        .then(() => {
          this.$router.push("/students");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
<style>

 .container{
  height: 330px;
  width: 450px;
display: block;
  padding-top:23px;
  

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
  padding-bottom:10px ;


}
.form-control{
  height:35px;
  border-radius: 8px;

}
</style>