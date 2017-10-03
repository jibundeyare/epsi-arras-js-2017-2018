document.addEventListener('DOMContentLoaded', function(event) {
  axios.get('https://yesno.wtf/api')
    .then(function (response) {
      console.log(response.data.answer);
      console.log(response.data.image);
    })
    .catch(function (error) {
      console.log(error);
    });
});
