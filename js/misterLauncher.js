var css = document.createElement( "link" );
css.setAttribute( "rel","stylesheet" );
css.setAttribute( "href","//misterlauncher.org/css/vote_widget.css" );
document.head.appendChild( css );

var id = $(".mrl-vote-server").attr("data-vote-id");
var type = $(".mrl-vote-server").attr("data-vote-type");

if( type == 'project' ) {
    var type_text = ' проект';
    var type_url = '/projects/' + id + '/';
} else {
    var type_text = ' сервер';
    var type_url = '/vote/' + id + '/';
}

var server_wrapp = $(".mrl-vote-server[data-vote-id]");
$( server_wrapp ).attr( 'href', type_url );
$( server_wrapp ).click( function() {
	
	window.open( 'https://misterlauncher.org' + type_url, '', 'toolbar=0,location=0,status=0,left=+500,top=50,menubar=0,scrollbars=yes,resizable=0,width=800,height=600' );
	
	return false;
	
});

$( server_wrapp ).find("span img").after( 'Голосовать за' + type_text );
$( server_wrapp ).find("#mrl-vote-counter i").html( '0' );
$.ajax({
	type: "POST",
	url: "https://misterlauncher.org/widgets_api/vote/votes_count/",
	data: { id: id, type: type },
	success: function( votes_count ) {
		$( server_wrapp ).find("#mrl-vote-counter i").html( votes_count );
	}
});