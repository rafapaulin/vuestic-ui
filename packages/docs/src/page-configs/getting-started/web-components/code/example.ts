export const exampleRegister = `
import { registerVuesticWebComponents } from 'vuestic-ui/web-components'
import 'vuestic-ui/css'

registerVuesticWebComponents()
`

export const usageInIndexHTML = `
<body>
  <div id="app">
    <va-select id="select" stateful model-value="Option 1"></va-select>
    <va-button id="button">Send!</va-button>
  </div>

  <script>
    const select = document.getElementById("select");

    select.options = ["Option 1", "Option 2", "Option 3"];

    select.addEventListener("update:modelValue", (e) => {
      e.target.modelValue = e.detail;
      console.log('Option selected!', e.target.modelValue)
    });
  </script>

  <script>
    const button = document.getElementById("button");

    button.addEventListener("click", () => {
      console.log("Make something! User clicked the button");
    });
  </script>
</body>
`

export const usageOfGlobalConfig = `
<va-config id="config">
   <!-- App code here -->
</va-config>

<script>
const config = document.getElementById("config");

config.components = {
  VaButton: {
    color: "danger",
  },
  VaInput: {
    outline: true,
  }
};
</script>
`
