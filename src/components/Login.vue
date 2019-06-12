<template>
<div class="container">
  <form>
    <div class="form-group">
      <label>Email</label>
      <input type="email" class="form-control" v-model="input.email" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
    <div class="form-group">
      <label>Password</label>
      <input type="password" class="form-control" v-model="input.password" placeholder="Password">
    </div>
    <button @click.prevent="save" type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        email: '',
        password: '',
      }],
      input: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    save: function() {
      var em = this.input.email
      var pd = this.input.password

      this.items.push({
        email: em,
        password: pd,
      })
    },
  }
}
</script>

<style lang="css" scoped>
.container {
    width: 100%;
    max-width: 800px;
}
</style>
