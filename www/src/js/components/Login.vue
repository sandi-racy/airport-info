<template>
    <div class="login">
      <div class="overlay"></div>
      <h1>Airport Info</h1>
      <div class="login__card">
        <div class="row">
          <div class="col s12 m12">
            <div class="card-action text-center">
              <a class="waves-effect waves-light blue btn" @click="login"><i class="material-icons left"></i>Login with Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        methods: {
            login: function () {
                this.$router.push('order')
            }
        }
    }
</script>
