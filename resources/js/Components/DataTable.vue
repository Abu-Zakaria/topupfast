<template>
  <div class="table-responsive mt-1">
    <table v-if="config.length > 0" class="table table-hover-animation mb-0">
      <thead>
        <tr>
          <th :colspan="config.length - 1">
            <slot name="header"></slot>
          </th>
          <th colspan="2">
            <input
              type="text"
              v-model="search"
              @keyup="searchData"
              class="form-control"
              placeholder="Search">
          </th>
        </tr>
        <tr>
          <th v-for="(column, index) in config" :key="index" :class="column.align">{{ column.label }}</th>
          <th v-if="action">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in data.data" :key="row.id">
          <td
            v-for="(column, key) in config"
            :key="key"
            :class="column.align">
            {{ filterData(row, column) }}
          </td>

          <td v-if="action">
            <a @click.prevent="editData(row)" role="button" class="mr-1"><i class="feather icon-edit text-info"></i></a>
            <a @click.prevent="removeData(row)" role="button"><i class="feather icon-trash text-warning"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
    export default {
        name: "DataTable",
        props: {
          config: Array,
          data: Object,
          action: {
            type: Boolean,
            default: false
          },
        },
        data: function () {
          return {
            search: ''
          }
        },
        methods: {
          filterData: function (row, coll) {
            let name = coll.name;
            if (name.includes('.')) {
              let arr = name.split('.');
              if (arr.length === 2) {
                return row[arr[0]][arr[1]];
              }
              return row[arr[0]][arr[1]][arr[2]];
            }
            return row[name];
          },
          searchData: function () {
            this.$emit('searchData', this.search);
          },
          editData: function (data) {
            this.$emit('editData', data);
          },
          removeData: function (data) {
            this.$emit('removeData', data);
          }
        }
    }
</script>

<style>

</style>
