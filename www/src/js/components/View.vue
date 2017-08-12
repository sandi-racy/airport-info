<template>
    <div class="order-page">
      <div class="hero">
        <div class="hero__header">
          <h1>Airport Info</h1>
        </div>
      </div>
      <div class="row">
        <div class="col s6"></div>
      </div>
      <div class="card--view">
        <div class="profile-view">
          <div class="profile-view__image">
            <span>{{ order.userName.charAt(0) }}</span>
          </div>
          <div class="profile-view__content">
            <p>{{ order.userName }}</p>
            <p>{{ order.station1_desc }} - {{ order.station2_desc }}</p>
          </div>
        </div>
      </div>

      <div class="card--info">
        <h3>Order Info</h3>
        <div class="card--info__name">
          <dl>
            <dt>Name</dt>
            <dd>{{ order.userName }}</dd>
          </dl>
        </div>

        <div class="card--info__phone">
          <dl>
            <dt>Phone</dt>
            <dd>{{ order.user.no_telp }}</dd>
          </dl>
        </div>

        <div class="card--info__category">
          <dl>
            <dt>Category</dt>
            <dd>{{ order.category.name }}</dd>
          </dl>
        </div>

        <div class="card--info__notification">
          <dl>
            <dt>Notification</dt>
            <dd>{{ order.notification }}</dd>
          </dl>
        </div>

        <div class="card--info__departure">
          <dl>
            <dt>Departure</dt>
            <dd>{{ order.departure }}</dd>
          </dl>
        </div>

        <!-- <div class="card--info__edit">
          <p>Edit Details</p>
        </div> -->

        <div class="order-page__button">
          <button class="waves-effect waves-light blue btn" @click="done"><i class="material-icons left"></i>Done</button>
        </div>
      </div>
    </div>
</template>

<script type="text/javascript">
    import moment from 'moment'

    export default {
        data() {
            return {
                order: {}
            }
        },

        methods: {
            done() {
                localStorage.removeItem('viewOrder')
                this.$router.push('order')
            }
        },

        mounted() {
            this.$http.get(ai.api.url + 'getorder?fb_uid=' + localStorage.getItem('fbUid')).then((response) => {
                this.order = response.body.order
                this.order.userName = localStorage.getItem('userName')
                this.order.departure = moment(this.order.estimated).format('MMMM Do YYYY, h:mm:ss a')
            }, () => {
                alert('Unable to get order data')
            })
        }
    }
</script>

<style lang="scss">
  .order-page {
    padding-bottom: 40px;

    &__button {
      display: block;
      margin-bottom: 10px;
      text-align: right;
    }
  }

  .card {
    &--info,
    &--view {
      width: 80%;
      margin: 0 auto;
      padding: 15px 20px;
      border-radius: 5px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(100,100,100,.175);
    }

    &--view {
      position: relative;
      top: -45px;
    }

    &--info {
      margin-top: -25px;

      h3 {
        margin-top: 10px;
        font-size: 1.4rem;
      }

      dt {
        font-size: 0.9rem;
        color: #757575;
      }

      dd {
        margin-left: 0;
      }
    }
  }
  .profile-view {
    display: flex;

    &__image {
      margin-right: 15px;
      width: 50px;
      height: 50px;
      line-height: 47px;
      border-radius: 50%;
      border: 2px solid #9e9e9e;
      text-align: center;
      font-size: 17px;
      font-weight: 500;

      span {
        color: #2196f3;
      }
    }

    &__content {
      padding: 5px 0;

      p {
        margin: 0;
        &:last-of-type {
          font-size: 12px;
        }
      }
    }
  }

</style>
