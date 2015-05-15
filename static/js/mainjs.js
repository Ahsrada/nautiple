
(function() {
	var deleting = function(tags){
			$(tags).mouseenter(function(){
				$(this).addClass('fadeOutDown animated');
			})
	};
	var deleteSQ = function(){
		if ($('.animated').length < 4){
			deleting('.gn-menu li');
		} else if (4 < $('.animated').length && $('.animated').length < 7){
			deleting('li');
		} else if (7 < $('.animated').length && $('.animated').length <= 8){
			deleting('h1,p,ul');
		} 
	}
	var settt = setInterval(deleteSQ, 1500);
})()
var delete1 = function(){
		$('li').addClass('hinge animated');
},
delete2 = function(){
	$('ul').addClass('hinge animated');
},
delete3 = function(){
	$('h1').addClass('hinge animated');
	$('p').addClass('hinge animated');
}
var starthide1 = setTimeout(delete1, 5000)
var starthide2 = setTimeout(delete2, 7000)
var starthide3 = setTimeout(delete3, 10000)
