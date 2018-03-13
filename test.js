let got = require("got");
/*
got.post("URL-GOES-HERE",
{
    headers:  {
        "content-type": "application/json"
    },
    body: {content: "YAAAAAAAAAAAH"},
    json: true
});
*/

const fn = async () => {
    var res = await got.post("http://localhost:12124", {
        headers: {
            "content-type": "application/json"
        },
        body: {test: "WOW SO AMAZING"},
        json: true
    });
};

fn();