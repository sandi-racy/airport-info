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
            <span>M</span>
          </div>
          <div class="profile-view__content">
            <p>Muslim Al Fatih</p>
            <p>Jakarta - Bandung</p>
          </div>
        </div>
      </div>

      <div class="card--info">
        <h3>Personal Info</h3>
        <div class="card--info__name">
          <dl>
            <dt>Name</dt>
            <dd>Muslim Al Fatih</dd>
          </dl>
        </div>

        <div class="card--info__phone">
          <dl>
            <dt>Phone</dt>
            <dd>082 272 222 222</dd>
          </dl>
        </div>

        <div class="card--info__category">
          <dl>
            <dt>Category</dt>
            <dd>Banking</dd>
          </dl>
        </div>

        <div class="card--info__notification">
          <dl>
            <dt>Notification</dt>
            <dd>SMS</dd>
          </dl>
        </div>

        <div class="card--info__departure">
          <dl>
            <dt>Departure</dt>
            <dd>13:15</dd>
          </dl>
        </div>

        <div class="card--info__arrival">
          <dl>
            <dt>Arrival</dt>
            <dd>15:15</dd>
          </dl>
        </div>

        <!-- <div class="card--info__edit">
          <p>Edit Details</p>
        </div> -->
      </div>
    </div>
</template>

<style lang="scss">
  .order-page {
    padding-bottom: 40px
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
