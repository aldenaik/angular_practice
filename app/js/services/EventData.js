eventsApp.factory('eventData',function(){
	return{
		event: {
			name:"Whatever",
			date: '1/1/2013',
			time: '10:30 am',
			location: {
				address: 'Google Headquarters',
				city: 'Mountain View',
				province: 'CA' 
			},
			imageUrl: '/Users/aldenaik/DevMtn/angular_practice/app/img/angularjs.jpg',
			 sessions: [
			{
				name: "Class Numero Uno",
				creator:"rodney Dude",
				duration:"20 mins",
				level:"wow",
				abstract: "what does this even mean?",
				upVoteCount: 0
			},
			{
				name: "Class Numbero Dos",
				creator:"Duder Man",
				duration:"40 mins",
				level:"wowzer",
				abstract: "who knows?",
				upVoteCount: 0
			},
			{
				name: "Class Number Tres",
				creator:"Iam Theman",
				duration:"forever",
				level:"top notch",
				abstract: "thinking?",
				upVoteCount: 0
			}
		 ]

		}
	};
});