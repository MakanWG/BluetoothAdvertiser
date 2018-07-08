var host = function () {
  if (window.location.host == "localhost:3000") {
    return "http://localhost:3000";
  }
  else {
    return "";
  }
}
var validateUrl = function () {
  postRequest = new XMLHttpRequest();
  postRequest.open(
    'POST',
    host() + "/update-url", true
  );
  postRequest.addEventListener('load', function (response) {
    console.log(response);
    alert("saved");
  });

  postRequest.send(JSON.stringify(app.beacon_url));
}

Vue.use(VueMaterial.default);

var app = new Vue({
  el: '#app',
  data: {
    beacon_url: ''
  },
  methods:{
    validateUrlCommand: validateUrl
  }
})

