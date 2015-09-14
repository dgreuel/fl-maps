Template.congratsModal.helpers({
	selectedEvent: function() {
        var eventId = Session.get('selected');
        var event = Events.findOne(eventId);
        if (event == undefined) {
        	Meteor.Error('no-event-selected', 'No event selected.');
        	return;
        }
		event.url = event.url ? event.url : window.location.href;
        return event;
	},
	shareOnFacebookLink: function(url) {
		return 'https://www.facebook.com/sharer/sharer.php?&u=' + url;
	},
	shareOnTwitterLink: function(url,title) {
		return 'https://twitter.com/intent/tweet?url=' + url + '&text=' + title + '&hashtags=Focallocal';
	},
	shareOnGooglePlusLink: function(url) {
		return 'https://plus.google.com/share?url=' + url;
	}
});
function selectText(containerid) {
			 if (document.selection) {
					 var range = document.body.createTextRange();
					 range.moveToElementText(document.getElementById(containerid));
					 range.select();
			 } else if (window.getSelection) {
					 var range = document.createRange();
					 range.selectNode(document.getElementById(containerid));
					 window.getSelection().addRange(range);
			 }
	 }
Template.congratsModal.events({
	'click #copy-button': function() {
		selectText('selectable');
	}
})
