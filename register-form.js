import { PolymerElement, html } from '@polymer/polymer'
import '@polymer/iron-form/iron-form.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
class registerForm extends PolymerElement {
  constructor() {
    super();
  }
  static get properties(){
    return{
      invalid: {
        type: Boolean
      }
    }
    
  }
  static get template() {
    return html`
    <style>
    paper-button.indigo {
      background-color: var(--paper-indigo-500);
      color: white;
      --paper-button-raised-keyboard-focus: {
        background-color: var(--paper-pink-a200) !important;
        color: white !important;
      };
    }
    </style>
    <h3>Register Form</h3>
    <iron-form>
      <form id="form" action="/" method="post" on-iron-form-response="_onResponse">
     <paper-input name="first_name" always-float-label auto-validate label="First Name" pattern="[a-zA-Z]{3,30}" auto-validate invalid="{{invalid}}" allowed-pattern="[a-zA-Z]" required   error-message="Alphanumerical characters only"></paper-input>
    <paper-input name="last_name" always-float-label auto-validate label="Last Name" pattern="[a-zA-Z]{3,30}" allowed-pattern="[a-zA-Z]" required  error-message="Alphanumerical characters only" ></paper-input>
      <paper-button on-tap="_onSubmit"  disabled$="[[isDisabled(invalid, value)]]" raised class="indigo">Submit</paper-button>
      </form>
    </iron-form>
    <pre>fdgfdg{{invalid}}</pre>
    `;
  }
  _onSubmit(e) {
    e.preventDefault();
    this.$.form.submit();
  }
  _onResponse(e) {
    console.log(e);
    this.response = JSON.stringify(e.detail.response, null, 2);
  }
  isDisabled(invalid, value) {
    return invalid;
  }
}
customElements.define('register-form', registerForm);