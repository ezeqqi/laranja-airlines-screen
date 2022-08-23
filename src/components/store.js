import { reactive } from "vue";

export const store = reactive({
  stepper: {
    step: 0,
    nextStep() {
      this.step++
    },
    previousStep() {
      this.step--
    },
  }
})
