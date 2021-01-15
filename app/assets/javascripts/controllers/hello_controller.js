document.addEventListener('turbolinks:load', () => {
  stimulus_application.register('hello', class extends Stimulus.Controller {
    connect () {
      this.element.innerText = 'Hello from Stimulus'
    }
  })
})
