<template>
    <div class="mortgage_calculator">
        <div class="error row" v-if="hasError">
            <p>Please enter value for all <sup>(*)</sup> fields</p>
        </div>
        <div class="mortgage_input row">
            <h2 class="heading">Program Details</h2>
            <div class="col-25">
                <label for="debt">Total Debt<sup>*</sup></label>
            </div>
            <div class="col-75">
                <input class="debt" type="text" placeholder="10000" v-model="debt" required>
            </div>
            <div class="col-25">
                <label for="plm">Program Length in Month<sup>*</sup></label>
            </div>
            <div class="col-75">
            <input class="prgrm_length" type="text" placeholder="24" v-model="prgrm_length" required>
            </div>
            <div class="col-25">
                <label for="debt">Estimated Settlement<sup>*</sup></label>
            </div>
            <div class="col-75">
            <input class="estimated_settlement" type="text" placeholder="5" v-model="estimated_settlement" required>
            </div>
            <div class="col-25">
                <label for="debt">Frequency</label>
            </div>
            <div class="col-75">
            <select class="frequeny" v-model="frequeny">
                <option value="1">Monthly</option>
                <option value="2">Bi-Weekly</option>
                <option value="4">Weekly</option>
            </select>
            </div>
            <h2 class="heading">Program Details</h2>
            <div class="col-25">
                <label for="debt">Admin Fee (%)<sup>*</sup></label>
            </div>
            <div class="col-75">
            <input class="admin_fee" placeholder="5" type="text" v-model="admin_fee" required>
            </div>
            <div class="col-25">
                <label for="debt">Service Fee (%)<sup>*</sup></label>
            </div>
            <div class="col-75">
            <input class="service_fee" type="text" placeholder="5" v-model="service_fee" required>
            </div>
            
            <div class="mortgage_calculated" v-if="is_calculated">
                <h2 class="heading">Cost</h2>
                <div class="col-25">
                    <label for="debt">Total Cost</label>
                </div>
                <div class="col-75">
                    <p>{{total_cost.toFixed(2)}}</p>
                </div>
                <div class="col-25">
                    <label for="debt">Estimated Saving</label>
                </div>
                <div class="col-75">
                <p>{{estimated_saving.toFixed(2)}}</p>
                </div>
                <h2 class="heading">Payments</h2>
                <div class="col-25">
                    <label for="debt">If Monthly</label>
                </div>
                <div class="col-75">
                <p>{{if_monthly.toFixed(2)}}</p>
                </div>
                <div class="col-25">
                    <label for="debt">If Biweekly</label>
                </div>
                <div class="col-75">
                <p>{{if_biweekly.toFixed(2)}}</p>
                </div>
                <div class="col-25">
                    <label for="debt">If Weekly</label>
                </div>
                <div class="col-75">
                <p>{{if_weekly.toFixed(2)}}</p>
                </div>
            </div>
            <center>
            <button class="mortgage_submit" @click="calculate_mortgage()">Calculate</button>
            </center>
        </div>
        <div class="error row" v-if="hasError">
            <p>Please enter value for all <sup>(*)</sup> fields</p>
        </div>
        
    </div>
</template>

<script>
export default {

    name: 'Home',

    data () {
        return {
            debt: '',
            prgrm_length: '',
            estimated_settlement: '',
            frequeny: '',
            admin_fee: '',
            service_fee: '',
            total_cost: '',
            estimated_saving: '',
            if_monthly: '',
            if_biweekly: '',
            if_weekly: '',
            is_calculated: false,
            hasError: false
        }
    },
    methods: {
        calculate_mortgage: function(){
            if(this.debt == ''||this.prgrm_length == ''||this.estimated_settlement==''||this.admin_fee==''||this.service_fee==''){
                this.hasError = true;
            }
            else{
                this.hasError = false;
                var est_settelement = this.estimated_settlement/100;
                var adminFee = this.admin_fee/100;
                var serviceFee = this.service_fee/100;
                this.total_cost = (this.debt*adminFee)+(this.debt*est_settelement)*(1+serviceFee);
                //this.total_cost = this.total_cost.toFixed(2);
                this.estimated_saving = this.debt-this.total_cost;
                this.if_monthly = this.total_cost/this.prgrm_length;
                this.if_biweekly = this.total_cost/(this.prgrm_length*2);
                this.if_weekly = this.total_cost/(this.prgrm_length*4);
                this.is_calculated = true;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style inputs, select elements and textareas */
input[type=text], select, textarea{
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
}

/* Style the label to display next to the inputs */
label {
  display: inline-block;
}

/* Style the submit button */
.mortgage_submit {
  background-color: #f95405;
  color: white;
  padding: 15px 120px 21px 120px;;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

/* Style the container */
.mortgage_calculator, .mortgage_calculated {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;
  width: 100%
}

/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 50%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, .mortgage_submit {
    width: 100%;
    margin-top: 0;
  }
}
.error {
    color: rgb(255, 0, 0);
    text-align: center;
    font-weight: bold;
}
.heading {
    color: #0ca1ac;
}
</style>
