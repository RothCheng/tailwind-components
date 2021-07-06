import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "input", "output" ];
  static values = { default: String };

  connect() {
    this.outputTarget.innerHTML = this.defaultValue;

  }

  sync(event) {
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.outputTarget.innerHTML = event.target.value;
    }, 1000);
  }
}
