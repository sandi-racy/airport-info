<template>
    <div class="order-page">
      <div class="hero">
        <div class="hero__header">
          <h1>Airport Info</h1>
        </div>
      </div>
      <div class="sign-up">
        <div class="row">
            <ul class="form-validate">
                <li v-for="error in errors" class="form-validate__error">{{ error }}</li>
            </ul>
        </div>

        <div class="row">
          <form class="col s12" @submit.prevent="submit">
            <div class="sign-up__name">
              <h2>Hi, {{ user.name }}</h2>
              <p>Please enter your data</p>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="phone" type="number" class="validate" v-model="order.phone_number">
                <label for="phone">Phone Number</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="flight" type="text" class="validate" v-model="order.flight_number">
                <label for="flight">Flight Number</label>
              </div>
            </div>
            <div class="row">
              <p>Category</p>
              <div class="col s12">
                <p>
                  <input type="radio" value="1" name="category_id" id="transportation" v-model="order.category_id" />
                  <label for="transportation">Transportation</label>
                </p>
                <p>
                  <input type="radio" value="2" name="category_id" id="food-beverage" v-model="order.category_id" />
                  <label for="food-beverage">Food and Beverage</label>
                </p>
                <p>
                  <input type="radio" value="3" name="category_id" id="bank" v-model="order.category_id" />
                  <label for="bank">Bank</label>
                </p>
              </div>
            </div>

            <div class="row">
              <p>Notification</p>
              <div class="col s12">
                <p>
                  <input type="radio" value="SMS" name="notification" id="sms" v-model="order.notification" />
                  <label for="sms">SMS</label>
                </p>
                <p>
                  <input type="radio" value="Notification" name="notification" id="notif" v-model="order.notification" />
                  <label for="notif">Notification</label>
                </p>
              </div>
            </div>

            <div class="row">
              <div class="sign-up__button">
                <button class="waves-effect waves-light blue btn"><i class="material-icons left"></i>Save</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>

<style lang="scss">
  .form-validate {
    &__error {
      color: #f44336;
    }
  }
</style>

<script>
    export default {
        data() {
            return {
                errors: [
                  'error 1',
                  'error 2'
                ],
                order: {
                    category_id: null,
                    fb_uid: null,
                    flight_number: null,
                    notification: null,
                    phone_number: null
                },
                user: {
                    name: null
                }
            }
        },

        methods: {
            submit() {
                this.$http.post(ai.api.url + 'getschedule', this.order).then((response) => {
                    let statusCode = response.body.status
                    if (statusCode == 200) {
                        this.errors = []
                        localStorage.setItem('viewOrder', 'yes')
                        this.$router.push('view')
                    } else {
                        this.errors = response.body.message
                    }
                }, () => {
                    alert('Unable to save')
                })
            }
        },

        mounted() {
            if (localStorage.getItem('viewOrder')) {
                this.$router.push('view')
                return null
            }

            this.user.name = localStorage.getItem('userName')
            this.order.fb_uid = localStorage.getItem('fbUid')
        }
    }
</script>
