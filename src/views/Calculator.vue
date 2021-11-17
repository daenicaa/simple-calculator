<template>
  <div class="content">
    <div class="calculator">
      <ion-input
        name="display"
        id="display"
        :value="value"
        readonly></ion-input>
      <div class="numbers">
        <ion-button
          v-for="(n, index) in numbers"
          :key="`num-${index}`"
          @click="evaluate(n.value)"
        >
          <template
            v-if="n.value == '*'"
          >
            X
          </template>
          <template v-else>
            {{ n.value }}
          </template>
        </ion-button>
      </div>
    </div>
  </div>
</template>

<script>
import { IonInput, IonButton } from '@ionic/vue';

export default {
  name: 'Calculator',
  components: { IonInput, IonButton },
  data() {
    return{
      value: "",
      display: [],
      isOperator: false,
      numbers:[
        { value: "7" },
        { value: "8" },
        { value: "9" },
        { value: "/" },
        { value: "4" },
        { value: "5" },
        { value: "6" },
        { value: "*" },
        { value: "1" },
        { value: "2" },
        { value: "3" },
        { value: "-" },
        { value: "0" },
        { value: "C" },
        { value: "=" },
        { value: "+" }
      ]
    };
  },
  methods: {
    evaluate(data){
      if(data == '='){
        let beforeValue = this.display.length ? this.display.length - 1 : -1
        if(beforeValue > -1) {
          let dataBefore = this.display[beforeValue]
          if(['/', '*', '-', '+'].includes(dataBefore)) {
            this.display.pop()
          }
        }
        this.value = eval(this.display.join("").toString())
        this.display = []
        this.display.push(this.value)
      }else if(data == 'C'){
        this.display = []
        this.value = ""
      }else{
        let beforeValue = this.display.length ? this.display.length - 1 : null
        if(beforeValue) {
          let dataBefore = this.display[beforeValue]
          if(['/', '*', '-', '+'].includes(dataBefore) && ['/', '*', '-', '+'].includes(data)) {
            this.display.pop()
          }
          if(['/', '*', '-', '+'].includes(dataBefore) && data == 0) {
            data = ''
          }
        }
        this.display.push(data)
        this.value = this.display.join("").toString();
      }
    }
  }
}
</script>
<style scoped>
  .content{
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .calculator{
    font-family: sans-serif;
    width: 350px;
    padding: 8px;
    background-color: lightgray;
    border-radius: 4px;
  }

  .numbers{
    margin-top: 4px;
  }

  ion-input {
    height: 60px;
    font-size: 2.5rem;
    color: #FFF;
    --background: #333;
  }

  ion-button {
    font-size: 1.5rem;
    width: 75px;
    height: 75px;
    margin: 4px;
    --box-shadow: none;
  }
</style>
