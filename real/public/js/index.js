var $submitBtn = $("#btn_login");
var $accounts = $("#account-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveAccount: function(account) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/accounts",
      data: JSON.stringify(account)
    });
  },
  getAccounts: function(id) {
    return $.ajax({
      url: "api/accounts/" + id,
      type: "GET"
    });
    }
};
var refreshAccountList = function() {
    API.getAccounts().then(function(data) {
      var $accounts = data.map(function(account) {
        var $a = $("<a>")
          .text(account.name)
          .attr("href", "/account/" + account.id);
  
        var $li = $("<li>")
          .attr({
            class: "list-group-item",
            "data-id": account.id
          })
          .append($a);
  
        return $li;
      });
  
      $accountList.empty();
      $accountList.append($accounts);
    });
  };
var handleFormSubmit = function(event) {
    event.preventDefault();
  
    var account = {
      name: $email.val().trim(),
      password: $password.val().trim()
    };
  
    // if (!(account.name && account.password)) {
    //   alert("!");
    //   return;
    // }
  
    API.saveAccount(account).then(function() {
      refreshAccountList();
    });
  };

$submitBtn.on("click", handleFormSubmit);