$(document).ready(function(){
/*Using document ready runs code only after the DOM is ready for js code to run more on that here: https://learn.jquery.com/using-jquery-core/document-ready */
	function postData() {
		/*This function should create a post request using jquery. When posted it should:
			1) Add tweets to the 'database'
			2) After posted prepend message to list of messages and clear input box */
            $.ajax({
                method: 'POST',
                url: 'messages.txt',
                success: function() {
                    var text = $(input).val();
                    $('#tweet_list').prepend(<li>text</li>)
                }
                
            })
            
	}

	function getData() {
		/*This function should make a get request from 'database', parse the data and prepend each to the page*/
        $.ajax({
                method: 'GET',
                url: 'messages.txt',
                success: function(tweets) {
                    $.each(tweets, function (i, tweet) {
                        $('#tweet_list').prepend(<li>tweet</li>)
                    })
                }
            })
	}

	/*Calls function once page loaded to display tweets to page*/
	getData();
});