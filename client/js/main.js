$(document).ready(function() {
    $('#btn').click(function () {
        var text = $('#inp').val();
        var anonymous = 'anonymous';
        postData(text, anonymous)
    })
    




    /*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
    function postData(tweet, user) {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
        var msg = {};
        msg.text = tweet;
        msg.userName = user;
        $.ajax({
            method: 'POST',
            url: 'messages',
            data: JSON.stringify(msg)
        }).done(function() {
            
        })

    }

    function getData() {
        /*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
            method: 'GET',
            url: 'messages',
        }).done(function(data) {

            var tweets = data.split('\n');

            for (var i = 0; i < tweets.length; i++) {
                var tweet = JSON.parse(tweets[i]);
                var twit = tweet.text;

                $('#tweet_list').prepend('<li>' + twit + '</li>');
            }
        })
    }

    /*Calls function once page loaded to display tweets to page*/
    getData();

});

// var text = $('#inp').val();
