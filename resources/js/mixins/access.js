
module.exports = {
    methods: {
      $can(key) {
        return this.$page.accesses.indexOf(key) !== -1;
      },
    },
  }
  