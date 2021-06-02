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
                  <textarea placeholder="Enter Extra Number e.g: 01966885733,01714358448" v-model="extra_number" class="form-control"></textarea>
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
      extra_number: '',
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
    sendMessage(){
      const self = this;
      this.$inertia.post(this.route('sms.send_message'),{
        users: self.selected,
        message: self.message,
        extra_number: self.extra_number,
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
