const Keyboard = {
  elements:{
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capsLock: false
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement('div')
    this.elements.keysContainer = document.createElement('div')

    //Setup main elements
    this.elements.main.classList.add('keyboard','1keyboard--hidden')
    this.elements.keysContainer.classList.add('keyboard__keys')

    // Add to DOMContentLoaded
    this.elements.main.appendChild(this.elements.keysContainer)
    document.body.appendChild(this.elements.main)
  },

  _createKeys() {

  },

  _triggerEvent(handlerName) {
    console.log('Event Triggered! Event Name: ' + handlerName)
  },

  toggleCapsLock() {
    console.log('Caps Lock Toggled!')
  },

  open(initialValue, oninput, onclose) {

  },

  close() {

  }
}

window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init()
})
