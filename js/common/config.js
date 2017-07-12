var apikey = "8b8da770-d99c-4617-9f9a-79510505e175";
var secret="262abb49-2ffc-46c6-bdc7-cb27579b21c5";


var p2p_sessions = ["8160a3c5-2a6b-4239-97e8-2d37a6434bdd",
                    "ad347eda-b2d0-42b9-845f-5dae5fc963e1",
                    "189a3f7d-ae92-4d35-856d-2d0c1f54ad5d",
                    "aa2b333b-1ca4-431d-9804-a2bff8799acb"];


function getToken(n) {
    return new Promise(function (resolve,reject) {
        var token_url = "https://api.realtimecat.com/v0.3/sessions/"+p2p_sessions[n]+'/tokens';
        $.ajax({
            'url':token_url,
            'method':'POST',
            'headers':{
                'X-RTCAT-APIKEY':apikey,
                'X-RTCAT-SECRET':secret
            },
            'data':{
                'session_id':p2p_sessions[n],
                'type':'pub'
            }
        }).done(function(msg){
            resolve(msg.uuid);
        }).error(function (error) {
            reject(error)
        });
    });
}