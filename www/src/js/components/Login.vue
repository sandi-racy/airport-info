<template>
    <div class="login">
      <div class="overlay"></div>
      <h1>Airport Info</h1>
      <div class="login__card">
        <div class="row">
          <div class="col s12 m12">
            <div class="card-action text-center">
              <a class="waves-effect waves-light blue btn" @click="doLogin"><i class="material-icons left"></i>Login with Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                login: {
                    data: {
                        fb_uid: 1,
                        email: 'team@hydra.com',
                        name: 'Team Hydra'
                    }
                }
            }
        },

        methods: {
            doLogin() {
                this.$http.post(ai.api.url + 'signin', this.login.data).then(() => {
                    localStorage.setItem('fb_uid', this.login.data.fb_uid)
                    this.$router.push('order')
                }, () => {
                    alert('Can\'t login to Facebook')
                })
            }
        },

        mounted() {
            if (localStorage.getItem('fb_uid')) {
                this.$router.push('order')
            }
        }
    }
</script>
