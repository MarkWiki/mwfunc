"use strict";
var request = require("request");

module.exports.tokenGitHub = (event, context, callback) => {
  const client_id = process.env.GITHUB_CLIENT_ID;
  const client_secret = process.env.GITHUB_CLIENT_SECRET;
  const code = event.queryStringParameters.code;

  request({
    uri: "https://github.com/login/oauth/access_token",
    method: "POST",
    headers: {
      'content-type' : "application/json",
      accept: "application/json"
    },
    body: JSON.stringify({
      client_id,
      client_secret,
      code
    })
  }, function(error, response, body){
    callback(null, {
      statusCode: 200,
      body: body
    });
  });
};
