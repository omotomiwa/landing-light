<template>
  <div>
    <b-navbar toggleable="sm">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-collapse id="nav-text-collapse" class="justify-content-end" is-nav>
        <b-nav align="right" class="my-3 p-3 mr-4 ml-lg-0  justify-content-end">
          <b-nav-item class="navigation-links">TRIPS</b-nav-item>
          <b-nav-item class="navigation-links">RECENTLY VIEWED</b-nav-item>
          <b-nav-item class="navigation-links">BOOKINGS</b-nav-item>
          <b-nav-item>
            <b-avatar
              class="ml-4"
              src="https://placekitten.com/300/300"
              size="3rem"
            ></b-avatar
          ></b-nav-item>
        </b-nav>
      </b-collapse>
    </b-navbar>

    <v-container>
      <v-divider></v-divider>
    </v-container>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 md6 lg6 class=" sm-pa-2">
          <v-container>
            <h4><b>Payment Information</b></h4>
            <p class="paymentMethod">Choose your method of payment.</p>
            <br />

            <div  xs12 md6 lg6 class="card">
              <div class="cardNumber">CARD NUMBER</div>
              <div class="cardDigits">4324 5433 9382 1030</div>
              <div class="paywave svg"></div>
              <div class="card__reader">
                <div class="card__reader--risk card__reader--risk-one"></div>
                <div class="card__reader--risk card__reader--risk-two"></div>
                <div class="card__reader--risk card__reader--risk-three"></div>
                <div class="card__reader--risk card__reader--risk-four"></div>
              </div>
              <v-container>
                <div class="expiration">EXPIRATION DATE</div>
              </v-container>

              <div class="expirationDigit"><p>03/24</p></div>

              <div class="cardOwner"><p>John Doe</p></div>
              <div class="mastercard_icon svg"></div>
            </div>
          </v-container>
        </v-flex>
        <v-flex xs12 md6 lg6 class="my-2 ">
          <div class="logoContainer">
            <div class="visa">
              <img src="/assets/visa.png" height="30px" width="27px" class="visa-image">
            </div>
            <div class="discover">

               <img src="/assets/discover.png"  height="8px" width="30px" class="discover-image">
              
            </div>
            <div class="circle"></div>
            <div class="paypal"></div>
          </div>
          <v-container>
            <v-layout>
              <v-flex xs12 md6 lg6>
                <p class="headers">Credit card number</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="lg"
                    placeholder="4324 5433 9382 1030"
                  ></b-form-input>
                </b-col>
                <p class="headers">Security code</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="lg"
                    placeholder="420"
                  ></b-form-input>
                </b-col>
              </v-flex>
              <v-flex xs12 md6 lg6>
                <p class="headers">Expiration date</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="lg"
                    placeholder="03/24"
                  ></b-form-input>
                </b-col>
                <p class="headers">Postal code</p>
                <b-col sm="12">
                  <b-form-input
                    id="input-large"
                    class="inputs"
                    size="lg"
                    placeholder="10119"
                  ></b-form-input>
                </b-col>
              </v-flex>
            </v-layout>
            <v-container
              ><b-form-radio name="radio-size" class="radio"
                >Use this card for next time purchase</b-form-radio
              ></v-container
            >
            <v-container>
              <b-button block variant="primary" size="lg" class="button"
                >Add card</b-button
              >
            </v-container>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-divider></v-divider>
      <span class="subTotal ad">Subtotal</span
      ><span class="totals">₦2,497.00</span><br />
      <span class="tax ad ju">Estimated TAX</span
      ><span class="totals ju">₦119.64</span><br />
      <span class="code ad jx">Promotional Code: </span
      ><span class="jx cd">Z4KXLM9A</span><span class="totals jx">₦-60.00</span
      ><br /><br /><br /><br />
      <v-divider></v-divider>
      <v-container>
        <v-layout>
          <v-flex
            ><b-button block variant="primary" size="lg" class="button but"
              >Complete payment</b-button
            ></v-flex
          >
          <v-flex><h3 class="overallTotal">TOTAL:₦2556.64</h3></v-flex>
        </v-layout>
      </v-container>
    </v-container>
  </div>
</template>

<style scoped>
.nav-item.nav-item.nav-item a {
  color: black;
  font-size: 26px;
  font-weight: 500;
}
.navigation-links{
  font-size: 30px;
}
.paymentMethod {
  color: grey;
}
.card {
  height: 275px;
  width: 380px;
  background-image: linear-gradient(
    to right top,
    #e3693e,
    #ea4f63,
    #dd428b,
    #b84cb2,
    #765ecf
  );
  border-radius: 10px;
}
.cardNumber {
  color: white;
  margin-top: 24px;
  margin-left: 35px;
  font-size: 12px;
  font-weight: 600;
}
.cardDigits {
  color: white;
  margin-left: 35px;
  margin-top: 5px;
  font-size: 18px;
  font-weight: 600;
}
.card__reader {
  width: 60px;
  height: 45px;
  background: radial-gradient(#d9a56c, #b18457);
  border-radius: 5px;
  position: absolute;
  top: 50%;
  transform: translate(33px, -40px);
  overflow: hidden;
}
.card__reader--risk {
  width: 50px;
  height: 40px;
  border-radius: 13px;
  background: transparent;
  border: 1px solid #666;
  position: absolute;
  z-index: 0;
}
.card__reader--risk-one {
  transform: translate(37px, 15px);
}
.card__reader--risk-two {
  transform: translate(15px, 30px);
}
.card__reader--risk-three {
  transform: translate(-37px, -15px);
}
.card__reader--risk-four {
  transform: translate(-15px, -30px);
}
.paywave {
  transform: translateZ(30px);
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));
  filter: drop-shadow(-6.4px 6.2px 8px rgba(0, 0, 0, 0.6));
  height: 30px;
  width: 30px;
  margin-top: 31px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='35' viewBox='0 0 46 56'%3E%3Ctitle%3EContactlessIndicator 000%3C/title%3E%3Cpath fill='none' stroke='%23FFF' stroke-width='6' stroke-linecap='round' d='m35,3a50,50 0 0,1 0,50M24,8.5a39,39 0 0,1 0,39M13.5,13.55a28.2,28.5 0 0,1 0,28.5M3,19a18,17 0 0,1 0,18'/%3E%3C/svg%3E");
}
.expiration {
  color: white;
  margin-top: 15px;
  margin-left: 20px;
  font-size: 12px;
  font-weight: 600;
}
.expirationDigit {
  color: white;
  margin-left: 35px;
  font-size: 14px;
  font-weight: 600;
}
.cardOwner {
  color: white;
  margin-left: 33px;
  font-size: 14px;
  font-weight: 600;
}
.mastercard_icon {
  height: 50px;
  width: 120px;
  float: right;
  position: absolute;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  /* background-image: url("https://gist.githubusercontent.com/beckettnormington/9b6427d6f220b6f94e324c86d01cee30/raw/ad33f00e6e29e8e6662c4accb07bc3b0b90841a0/mastercard.svg"); */
  background-image: url("data:image/png;base64,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");
}
.logoContainer {
  display: flex;
  justify-content: space-evenly;
  margin-left: 55%;
}
.visa {
  height: 22px;
  width: 29px;
  background-color: darkblue;
}
.visa-image{
  position: relative;
  bottom: 4px;
}
.discover {
  height: 25px;
  width: 40px;
  background-color: whitesmoke;
  position: relative;
  bottom: 3px;
  margin-left: 7px;
}
.discover-image{
  position: relative;
  left: 5px;
}
.description {
  font-size: 7px;
  font-weight: 700;
}
.o {
  margin-bottom: 3px;
  color: orangered;
}
.paypal {
  height: 80px;
  width: 100px;
  background-image: url("https://cdn.freebiesupply.com/logos/thumbs/2x/paypal-logo.png");
  background-position: center;
  object-fit: contain;
  background-size: cover;
  position: relative;
  bottom: 29px;
  left: 12px;
}
.circle {
  height: 16px;
  width: 16px;
  background-color: whitesmoke;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  left: 23px;
}
.headers {
  margin-left: 15px;
   font-weight: 500;
}
.inputs {
  position: relative;
  bottom: 8px;
  background-color: whitesmoke;
  color: black;
  font-size: 15px;
  font-weight: 500;
  
}
.radio {
  font-size: 14px;
  font-weight: 500;
  font-size: 15px;
}
.button {
  height: 65px;
}
.totals {
  float: right;
  font-weight: bold;
  font-size: 17px;
}
.ad {
  padding: 4px;
  font-weight: bold;
  font-size: 17px;
}
.ju {
  position: relative;
  top: 11px;
  font-size: 17px;
}
.jx {
  position: relative;
  top: 17px;
  font-size: 17px;
}
.cd {
  color: lightgray;
  font-weight: bold;
  font-size: 17px;
}
.but {
  width: 80%;
  height: 70px;
}
.overallTotal {
  font-weight: 900;
  float: right;
}
</style>

export default { name: 'App', components: { }, data: () => ({ // }), };
