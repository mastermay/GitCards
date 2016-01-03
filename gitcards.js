;(function($, window, document,undefined) {
    $.fn.gitcards = function(options) {
    	$(this).each(function(){
        	var element = $(this),
        	    user = element.data('user'),
        	    repo = element.data('repo'),
        	    loading = '<div class="loading"><svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59 0.4 0.07 0.55-0.17 0.55-0.38 0-0.19-0.01-0.82-0.01-1.49-2.01 0.37-2.53-0.49-2.69-0.94-0.09-0.23-0.48-0.94-0.82-1.13-0.28-0.15-0.68-0.52-0.01-0.53 0.63-0.01 1.08 0.58 1.23 0.82 0.72 1.21 1.87 0.87 2.33 0.66 0.07-0.52 0.28-0.87 0.51-1.07-1.78-0.2-3.64-0.89-3.64-3.95 0-0.87 0.31-1.59 0.82-2.15-0.08-0.2-0.36-1.02 0.08-2.12 0 0 0.67-0.21 2.2 0.82 0.64-0.18 1.32-0.27 2-0.27 0.68 0 1.36 0.09 2 0.27 1.53-1.04 2.2-0.82 2.2-0.82 0.44 1.1 0.16 1.92 0.08 2.12 0.51 0.56 0.82 1.27 0.82 2.15 0 3.07-1.87 3.75-3.65 3.95 0.29 0.25 0.54 0.73 0.54 1.48 0 1.07-0.01 1.93-0.01 2.2 0 0.21 0.15 0.46 0.55 0.38C13.71 14.53 16 11.53 16 8 16 3.58 12.42 0 8 0z" /></svg></div>';
        	if(!repo) {
        		element.append(loading);
	        	show();
        		github_user(user, function(data){
	            	data = data.data;
	            	var svg_location = '<svg class="icon" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M6 0C2.69 0 0 2.5 0 5.5c0 4.52 6 10.5 6 10.5s6-5.98 6-10.5C12 2.5 9.31 0 6 0z m0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61 0.48 3.56 1.36 0.92 0.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05z m2-9.05c0 1.11-0.89 2-2 2s-2-0.89-2-2 0.89-2 2-2 2 0.89 2 2z" /></svg>',
	            		svg_link = '<svg class="icon" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 9h1v1h-1c-1.5 0-3-1.69-3-3.5s1.55-3.5 3-3.5h4c1.45 0 3 1.69 3 3.5 0 1.41-0.91 2.72-2 3.25v-1.16c0.58-0.45 1-1.27 1-2.09 0-1.28-1.02-2.5-2-2.5H4c-0.98 0-2 1.22-2 2.5s1 2.5 2 2.5z m9-3h-1v1h1c1 0 2 1.22 2 2.5s-1.02 2.5-2 2.5H9c-0.98 0-2-1.22-2-2.5 0-0.83 0.42-1.64 1-2.09v-1.16c-1.09 0.53-2 1.84-2 3.25 0 1.81 1.55 3.5 3 3.5h4c1.45 0 3-1.69 3-3.5s-1.5-3.5-3-3.5z" /></svg>',
	           		 	svg_mail = '<svg class="icon" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M0 4v8c0 0.55 0.45 1 1 1h12c0.55 0 1-0.45 1-1V4c0-0.55-0.45-1-1-1H1c-0.55 0-1 0.45-1 1z m13 0L7 9 1 4h12zM1 5.5l4 3L1 11.5V5.5z m1 6.5l3.5-3 1.5 1.5 1.5-1.5 3.5 3H2z m11-0.5L9 8.5l4-3v6z" /></svg>',
	            		svg_time = '<svg class="icon" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 8h3v2H7c-0.55 0-1-0.45-1-1V4h2v4z m-1-5.7c3.14 0 5.7 2.56 5.7 5.7S10.14 13.7 7 13.7 1.3 11.14 1.3 8s2.56-5.7 5.7-5.7m0-1.3C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7S10.86 1 7 1z" /></svg>',
	            		svg_company = '<svg class="icon" viewBox="0 0 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M4.75 4.95c0.55 0.64 1.34 1.05 2.25 1.05s1.7-0.41 2.25-1.05c0.34 0.63 1 1.05 1.75 1.05 1.11 0 2-0.89 2-2s-0.89-2-2-2c-0.41 0-0.77 0.13-1.08 0.33C9.61 1 8.42 0 7 0S4.39 1 4.08 2.33c-0.31-0.2-0.67-0.33-1.08-0.33-1.11 0-2 0.89-2 2s0.89 2 2 2c0.75 0 1.41-0.42 1.75-1.05z m5.2-1.52c0.2-0.38 0.59-0.64 1.05-0.64 0.66 0 1.2 0.55 1.2 1.2s-0.55 1.2-1.2 1.2-1.17-0.53-1.19-1.17c0.06-0.19 0.11-0.39 0.14-0.59zM7 0.98c1.11 0 2.02 0.91 2.02 2.02s-0.91 2.02-2.02 2.02-2.02-0.91-2.02-2.02S5.89 0.98 7 0.98zM3 5.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2c0.45 0 0.84 0.27 1.05 0.64 0.03 0.2 0.08 0.41 0.14 0.59-0.02 0.64-0.53 1.17-1.19 1.17z m10 0.8H1c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1v2c0 0.55 0.45 1 1 1h1c0.55 0 1-0.45 1-1v-1h1v3c0 0.55 0.45 1 1 1h2c0.55 0 1-0.45 1-1V12h1v1c0 0.55 0.45 1 1 1h1c0.55 0 1-0.45 1-1V11c0.55 0 1-0.45 1-1V7c0-0.55-0.45-1-1-1zM3 13h-1V10H1V7h2v6z m7-2h-1V9h-1v6H6V9h-1v2h-1V7h6v4z m3-1h-1v3h-1V7h2v3z" /></svg>',
	            		info = '',
	            		it = 0;
	            	if(data.email) {
	            		info += '<li>'+svg_mail+'<a href="mailto:'+data.email+'" target="_blank">'+data.email+'</a></li>';
	            		it += 1;
	            	}
	            	if(data.blog) {
	            		info += '<li>'+svg_link+'<a href="'+data.blog+'" target="_blank">'+data.blog+'</a></li>';
	            		it += 1;
	            	}
	            	if(it < 3 && data.location) {
	            		info += '<li>'+svg_location + data.location+'</li>';
	            		it += 1;
	            	}
	            	if(it < 3 && data.company) {
	            		info += '<li>'+svg_company + data.company+'</li>';
	            		it += 1;
	            	}
	            	if(it < 3 && data.created_at) {
	            		info += '<li>'+svg_time+'Joined on '+data.created_at.substr(0, 10)+'</li>';
	            		it += 1;
	            	}
					element.append('<div class="user"><img src="' + data.avatar_url + '" /><h2><span class="nickname"><a href="https://github.com/'+data.login+'" target="_blank">'+data.name+'</a></span><span class="login">'+data.login+'</span></h2><ul>'+info+'</ul></div><div class="status"><a href="https://github.com/'+data.login+'/followers"><strong>'+data.followers+'</strong><span>Followers</span></a><a href="https://github.com/'+data.login+'/following"><strong>'+data.following+'</strong><span>Following</span></a><a href="https://github.com/'+data.login+'?tab=repositories"><strong>'+data.public_repos+'</strong><span>Repositories</span></a></div>');
	            });
	        } else {
	        	var svg_star = '<svg class="icon" viewBox="-1 -1 14 16" xmlns="http://www.w3.org/2000/svg"><path d="M14 6l-4.9-0.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14l4.33-2.33 4.33 2.33L10.4 9.26 14 6z" /></svg>',
	        		svg_fork = '<svg class="icon" viewBox="-1 -1 10 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1c-1.11 0-2 0.89-2 2 0 0.73 0.41 1.38 1 1.72v1.28L5 8 3 6v-1.28c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2S0 1.89 0 3c0 0.73 0.41 1.38 1 1.72v1.78l3 3v1.78c-0.59 0.34-1 0.98-1 1.72 0 1.11 0.89 2 2 2s2-0.89 2-2c0-0.73-0.41-1.38-1-1.72V9.5l3-3V4.72c0.59-0.34 1-0.98 1-1.72 0-1.11-0.89-2-2-2zM2 4.2c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3 10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z m3-10c-0.66 0-1.2-0.55-1.2-1.2s0.55-1.2 1.2-1.2 1.2 0.55 1.2 1.2-0.55 1.2-1.2 1.2z" /></svg>',
	        		svg_repo = '<svg class="icon" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 9h-1v-1h1v1z m0-3h-1v1h1v-1z m0-2h-1v1h1v-1z m0-2h-1v1h1v-1z m8-1v12c0 0.55-0.45 1-1 1H6v2l-1.5-1.5-1.5 1.5V14H1c-0.55 0-1-0.45-1-1V1C0 0.45 0.45 0 1 0h10c0.55 0 1 0.45 1 1z m-1 10H1v2h2v-1h3v1h5V11z m0-10H2v9h9V1z" /></svg>';
	        	element.addClass('repo-wrap');
	        	element.append(loading);
	        	show();
	        	github_user_repo(user, repo, function(data){
	        		$('.gitcards .loading').remove();
	            	data = data.data;
	            	desc = '';
	            	if(data.description) {
	            		desc = 'nodesc';
	            	}
	            	element.append('<div class="repo '+desc+'">'+svg_repo+'<a href="'+data.html_url+'" target="_blank"><span class="reponame">'+data.full_name+'</span><span class="repodesc">'+data.description+'</span></a></div><div class="status"><a href="'+data.html_url+'" target="_blank">'+svg_star+'<span>Star '+data.stargazers_count+'</span></a><a href="'+data.html_url+'" target="_blank">'+svg_fork+'<span>Fork '+data.forks_count+'</span></a><a href="'+data.html_url+'/archive/master.zip" target="_blank"><span>Download ZIP</span></a></div>');
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
		function show() {
			if($('.gitcards .loading').length>0) {
				$('.gitcards .loading').fadeTo(1000, 0, function() {hide();} );
			}
		}
		function hide() {
			if($('.gitcards .loading').length>0) {
				$('.gitcards .loading').fadeTo(1000, 1, function() {show();} );
			}
		}
    }
})(jQuery, window, document)