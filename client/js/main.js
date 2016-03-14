$(document).ready(function() {

    $('#btn').click(function() {
        var text = $('#inp').val();
        var anonymous = 'anonymous';
        if (text == null || text == '') {
            alert('You must fill in the tweeter!');
        }
        else {
        postData(text, anonymous);
        }
    })

    /*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
    function postData(tweet, user) {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
        var message = {};
        message.text = tweet;
        message.userName = user;
        $.ajax({
            method: 'POST',
            url: 'messages',
            data: JSON.stringify(message)
        }).done(function() {
            $('#tweet_list').prepend('<li>' + message.userName + ': ' + message.text + '</li>');
            clearForm();
        })

    }

    function getData() {
        /*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
            method: 'GET',
            url: 'messages',
        }).done(function(data) {
            var tweets = data.split('\n');
            console.log(tweets);
            for (var i = 0; i < tweets.length; i++) {
                var tweet = JSON.parse(tweets[i]);
                var twit = tweet.text;
                var screenName = tweet.userName;
                $('#tweet_list').prepend('<li>' + screenName + ': ' + twit + '</li>');
            }
        })
    }
    /*Calls function once page loaded to display tweets to page*/
    getData();
});

function clearForm() {
    $('#inp').val('');
}
