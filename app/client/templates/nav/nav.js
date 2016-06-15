/*****************************************************************************/
/* Nav: Event Handlers */
/*****************************************************************************/
Template.Nav.events({
	'click .btn-logout':function(e){
		Meteor.logout();
	},
	'click .navbar-brand':function(e){
		var currentTarget = $(e.currentTarget);

		if (currentTarget.hasClass('nav-plan')){
			Session.set('planPage', 'Search Recipes');
		}
	}

});

/*****************************************************************************/
/* Nav: Helpers */
/*****************************************************************************/
Template.Nav.helpers({
	loggedIn:function(){
		var currentUser = Meteor.userId();
		return (currentUser) ? true : false;
	},
	pageCheck:function(param1){
		var routeName = Router.current().route.getName();
		if (routeName === param1) {
			return 'active'
		} else {
			return ''
		}
	}
});

/*****************************************************************************/
/* Nav: Lifecycle Hooks */
/*****************************************************************************/
Template.Nav.onCreated(function () {
});

Template.Nav.onRendered(function () {
});

Template.Nav.onDestroyed(function () {
});