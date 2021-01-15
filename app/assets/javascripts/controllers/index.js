//= require_self
//= require stimulus
//= require_tree .

document.addEventListener('turbolinks:load', () => {
  window.stimulus_application = Stimulus.Application.start()

  console.log('controllers/index.js')
})

