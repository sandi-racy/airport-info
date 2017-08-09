<template>
    <div class="order-page">
      <div class="hero">
        <div class="hero__header">
          <h1>Airport Info</h1>
        </div>
      </div>
      <div class="sign-up">
        <div class="row">
          <form class="col s12">
            <div class="sign-up__name">
              <h2>Hi, Muslim Al Fatih</h2>
              <p>Please enter your data</p>
            </div>

            <div class="row">
              <div class="input-field col s12">
                <input id="phone" type="number" class="validate">
                <label for="phone">Phone Number</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input id="flight" type="text" class="validate">
                <label for="flight">Flight Number</label>
              </div>
            </div>
            <div class="row">
              <p>Categories</p>
              <div class="col s12">
                <p>
                  <input type="checkbox" id="transportation" />
                  <label for="transportation">Transportation</label>
                </p>
                <p>
                  <input type="checkbox" id="food-beverage" />
                  <label for="food-beverage">Food and Beverage</label>
                </p>
                <p>
                  <input type="checkbox" id="bank" />
                  <label for="bank">Bank</label>
                </p>
              </div>
            </div>

            <div class="row">
              <p>Notification</p>
              <div class="col s12">
                <p>
                  <input class="with-gap" name="group" type="radio" id="sms" />
                  <label for="sms">SMS</label>
                </p>
                <p>
                  <input class="with-gap" name="group" type="radio" id="notif" />
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
