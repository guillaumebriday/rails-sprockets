//= require_self
//= require another_file.js
//= require turbolinks
//= require ./controllers/index

document.addEventListener('turbolinks:load', () => {
  console.log('application.js')
})

