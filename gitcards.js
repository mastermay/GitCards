;(function($, window, document,undefined) {
    $.fn.gitcards = function(options) {
    	$(this).each(function(){
        	var element = $(this),
        	    user = element.data('user'),
        	    repo = element.data('repo');
        	if(!repo) {
        		github_user(user, function(data){
	            	data = data.data;
	            	var info = "",
	            		it = 0;
	            	if(data.email) {
	            		info += '<li><a href="mailto:'+data.email+'" target="_blank">'+data.email+'</a></li>';
	            		it += 1;
	            	}
	            	if(data.blog) {
	            		info += '<li><a href="'+data.blog+'" target="_blank">'+data.blog+'</a></li>';
	            		it += 1;
	            	}
	            	if(it < 2 && data.location) {
	            		info += '<li>'+data.location+'</li>';
	            		it += 1;
	            	}
	            	if(it < 2 && data.company) {
	            		info += '<li>'+data.company+'</li>';
	            		it += 1;
	            	}
	            	if(it < 2 && data.created_at) {
	            		info += '<li>Joined on'+data.created_at.substr(0, 10)+'</li>';
	            		it += 1;
	            	}
					element.append('<div class="user"><img src="' + data.avatar_url + '" /><ul><li><a href="'+data.name+'" target="_blank">'+data.name+'</a></li>'+info+'</ul></div><div class="status"><a href="https://github.com/'+data.login+'/followers"><strong>'+data.followers+'</strong><span>Followers</span></a><a href="https://github.com/'+data.login+'/followers"><strong>'+data.followers+'</strong><span>Followers</span></a><a href="https://github.com/'+data.login+'/following"><strong>'+data.following+'</strong><span>Following</span></a></div>');
	            	console.log(data);
	            });
	        } else {
	        	element.addClass('repo');
	        	github_user_repo(user, repo, function(data){
	            	data = data.data;
	            	console.log(data);
	            });
	        }
		});

        function github_user(username, callback) {
		    $.getJSON('https://api.github.com/users/' + username + '?callback=?', callback);
		}
		function github_user_repo(username, repo, callback) {
			//https://api.github.com/repos/{owner}/{repo}
		    $.getJSON('https://api.github.com/repos/' + username + '/' + repo + '?callback=?', callback);
		}
    }
})(jQuery, window, document)