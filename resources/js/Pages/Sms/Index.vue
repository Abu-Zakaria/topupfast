<template>
  <Layout name="sms">
    <section class="users-list-wrapper">
      <section id="basic-examples">
        <div class="card">
          <div class="card-content">
            <div class="card-body">

              <div v-if="success" class="alert alert-success">
                {{ success }}
              </div>
              <form @submit.prevent="sendMessage">
                <div>
                  <table class="table table-sm table-bordered display responsive nowrap mb-0" style="width: 100%">
                    <thead>
                      <tr class="bg-light">
                        <th width="5%">
                          <input type="checkbox" v-model="selectAll" />
                        </th>
                        <th>Name</th>
                        <th width="20%">Phone</th>
                        <th width="20%">wallet</th>
                      </tr>
                    </thead>
                    <tbody id="tbody">
                      <tr v-for="(user,index) in users" :key="index">
                          <td>
                            <input type="checkbox" class="selected" v-model="selected" :value="user"  />
                          </td>
                          <td>
                            {{ user.name }}
                          </td>
                          <td>
                            {{ user.phone }}
                          </td>
                          <td>
                            {{user.wallet}}
                          </td>
                      </tr>
                    </tbody>
                  </table>
                  <br>
                  <textarea placeholder="Enter Message" v-model="message" class="form-control"></textarea>
                  <div style="text-align: center;margin-top: 16px;">
                    <button type="submit" class="btn btn-primary btn-md">
                      <i class="feather icon-send"></i> Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  </Layout>
</template>

<script>
import Layout from "../../Shared/Layout";
export default {
  name: "Index",
  components: {Layout},
  props: {
    msg: String,
    success: String,
    users: Array,
    errors: Object,
  },
  data(){
    return {
      my_status: true,
      message: '',
      selected: [],
    }
  },
  computed: {
    selectAll: {
      get(){
        return this.users ? this.selected.length == this.users.length : false;
      },
      set(value){
        let selected = [];

        if (value) {
          this.users.forEach(function (user) {
            selected.push(user);
          });
        }

        this.selected = selected;
      }
    }
  },
  methods: {
    checkChange(){
      let trs = document.getElementById("tbody").querySelectorAll('input.selected');
      for (let tr of trs){
        if (tr.hasAttribute('checked')){
          tr.removeAttribute('checked');
        }else{
          tr.setAttribute('checked','checked');
        }
      }
    },
    sendMessage(){
      const self = this;
      this.$inertia.post(this.route('sms.create'),{
        users: self.users,
      }).then(() => {
        if (Object.keys(self.errors).length === 0) {
          self.$toast('Message Sent Successfully');
        }
        else
        {
          console.log(error.response.data);
        }
      })
    }
  },
}
</script>

<style scoped>
  tr {display: block; }
  th, td { width: 300px; }
  tbody { display: block; height: 40vh; overflow: auto;}
</style>
