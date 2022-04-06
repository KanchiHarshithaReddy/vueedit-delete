<template>

  <table class="table table-striped">
    <thead>
      <tr style="color:black" >
        <th>CompanyName</th>
       
        <th>Email</th>
        <th>State</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in employeeList" :key="employee.key">
        <td>{{ employee.CompanyName}}</td>
       
        <td>{{ employee.email }}</td>
        <td>{{ employee.state }}</td>
        <td>
          <router-link
            :to="{ name: 'edit-student', params: { id: employee.key } }"
           
            class="glyphicon glyphicon-edit"
            >
          </router-link>&nbsp;&nbsp;
          <button style="color:red"
            @click.prevent="deleteUser(employee.key)"
            class="glyphicon glyphicon-trash"
          >
          
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import firebase from "../database";
const db = firebase.ref("students-list");
export default {
  data() {
    return {
      employeeList: [],
    };
  },
  created() {
    db.on("value", (snapshot) => {
      snapshot.forEach((snap) => {
      
        this.employeeList.push({
          key: snap.key,
         CompanyName: snap.val().CompanyName,
       
          email: snap.val().email,
          state: snap.val().state,
        });
   
      });
    });
  },
  methods: {
    deleteUser(id) {
      if (window.confirm("Do you  want to delete?")) {
        db.child(id)
          .remove()
          .then(() => {
            alert("employee detected successfully !");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
};
</script>
<style scoped>
.table{
  width: 80%;
  margin-left: 100px;
  margin-right: 150px;
  border: 1px solid black;

}
</style>