var bio = {
		'name' : 'Jack Masterson',
		'role' : 'Web Developer',
		'contacts' : {
			'mobile': '(908)433-0178',
			'email': 'jackmasterson5@gmail.com',
			'github' : 'jmast35',
			'twitter': 'jmast35',
			'location': 'Greater NYC/Joisey Shaw',
			'facebook': '/jack.masterson.560',
		}, 
		'welcomeMessage' : 'Welcome to my resume! There is no turning back now!',
		'skills' : skills,
		'biopic' : headshot,


};
bio.display = function() {
	var formattedName = HTMLheaderName.replace('%data%', bio.name);
	var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

//	var welcome = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

	$('#hiddenskills').append(HTMLskillsReal);



	var formattedIreland = HTMLformattedHeadshot.replace('%data%', headshot.img[1]);
	var formattedWarby = HTMLformattedHeadshot.replace('%data%', headshot.img[2]);

		var formattedLumber = HTMLformattedHeadshot
		.replace('%data%', headshot.img[0])
		.replace('555', 'lumberid');
			$('#header').prepend(formattedHeadshot);
			$('#header').prepend(formattedIreland);
			$('#header').prepend(formattedWarby);
			$('#header').prepend(formattedLumber);

			$('#click2').click(function () {
    			$.when($('#lumberid').fadeOut('slow')).done(function () {
        		$('#headshotid').fadeIn('slow');
    		});
		});
			$('#click').click(function () {
    			$.when($('#headshotid').fadeOut('slow')).done(function () {
        		$('#lumberid').fadeIn('slow');
    		});
		});
			$('#hiddenclick').click(function () {
    			$.when($('#carouselstuff').fadeOut('slow')).done(function () {
       			$('#hiddenskills').fadeIn('slow');
    		});
		});

	var formattedEmail = HTMLemail.replace(
		'%data%', bio.contacts.email);
	$('#emailcell').append(formattedEmail);

	var formattedCell = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#mobilecell').append(formattedCell);

	var formattedLocation = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#mobilecell').append(formattedLocation);

	var formattedFacebook = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#facebookcell').append(formattedFacebook);

	var formattedEmailtop = HTMLemail.replace(
		'%data%', bio.contacts.email);
	$('#contactuptop').append(formattedEmailtop);

	var formattedCelltop = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#contactuptop').append(formattedCelltop);

	var formattedLocationtop = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#contactuptop').append(formattedLocationtop);

	var formattedFacebooktop = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#contactuptop').append(formattedFacebooktop);
	
	$('#contactuptop').prepend(formattedRole);
	$('#contactuptop').prepend(formattedName);

	for (var realskill in bio.realskills) {	
		var formattedRealSkills = HTMLskills.replace('%data%', bio.
			realskills[realskill]);
		$('#hiddenskills').append(formattedRealSkills);

	}
	if(bio.skills.length > 0) {
	$('#carouselstuff').append(HTMLskillsStart);	
}

};

bio.display();




var education = {
	'schools': [{
		'name': 'Boston College',
		'location': 'Boston, MA',
		'degree': 'BA',
		'majors': ['English, International Studies Minor'],
		'dates': '2009-2014F',
		'url' : 'https://bc.edu',
		'honors': 'cum laude',
		'schId': 'bctab'

	}, {
		'name': 'Manasquan High School',
		'location': 'Manasquan, NJ',
		'degree': 'HS Diploma',
		'majors': 'None',
		'dates': '2005-2009',
		'url' : 'http://www.manasquanschools.org/mhs',
		'honors': 'Valedictorian',
		'schId': 'squantab'
		
	}],
	'onlineCourses' : [{
		'title': 'Front-End Web Developing',
		'school': 'Udacity',
		'date': 'October 2014-Present',
		'url' : 'https://www.udacity.com',
		'schId': 'udutab'
	}],
	'display' : 'education.display'
};


education.display = function() {
	for (var school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName
			.replace('%data%', education.schools[school].name)
			.replace('#', education.schools[school].url);

		var formattedSchoolDates = HTMLschoolDates
			.replace('%data%', education.schools[school].dates);

		var formattedSchoolLoc = HTMLschoolLocation
			.replace('%data%', education.schools[school].location);

//		var formattedSchoolHonors = HTMLschoolHonors
//			.replace('%data%', education.schools[school].honors);

		var formattedSchoolMajor = HTMLschoolMajor
			.replace('%data%', education.schools[school].majors);

		var formattedSchoolID = formattedSchoolName
			.replace('%id%', education.schools[school].schId);

		var formattedSchoolIndividual = 
			formattedSchoolID + formattedSchoolDates + formattedSchoolLoc + 
			formattedSchoolHonors + formattedSchoolMajor;

		console.log(formattedSchoolIndividual);
		$('.none').append(formattedSchoolIndividual);
}
	for (var online in education.onlineCourses) {
		//$('#education').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle
			.replace('%data%', education.onlineCourses[online].title)
			.replace('#', education.onlineCourses[online].url);

		var formattedOnlineSchool = HTMLonlineSchool
			.replace('%data%', education.onlineCourses[online].school);

		var formattedOnlineDates = HTMLonlineDates
			.replace('%data%', education.onlineCourses[online].date);
	}

		var formattedOnlineIndividual = formattedOnlineTitle
		.replace('%id%', education.onlineCourses[online].schId) +
		formattedOnlineSchool + formattedOnlineDates;

		$('.none').append(formattedOnlineIndividual);

	var formattedBC = document.getElementById('bctab');
		$('#college').append(formattedBC);


	var formattedSquan = document.getElementById('squantab');
		$('#squan').append(formattedSquan);

	var formattedUdacity = document.getElementById('udutab');
		$('#udacity').append(formattedUdacity);

		$('#college').css('background-image', 
			'url("images/bostoncollege.jpg")');

		$('#udacity').css('background-image', 'url("images/bwgrad.png")');

		$('#squan').css('background-image', 'url("images/locker.jpg")');


//Education tab navigation-------------//
  $(document).ready(function(){
    $('.nav-tabs a').click(function(){
        $(this).tab('show');
    });
});

$('#maph2div').append(maph2);
$('#map').append(googleMap);


$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
    var offset = $('.panel.panel-default > .panel-collapse.in').offset();
    if(offset)$('html,body').scrollTop(offset.top); }); });
	};



education.display();




/*		var formattedBCschool = HTMLschoolName.replace('%data%', 
			education.schools[0].college)
			.replace('#', education.schools[0].slink);
		$('#college').append(formattedBCschool);

		var formattedBCdates = HTMLschoolDates
		.replace('%data%', education.schools[0].dates);
		$('#college').append(formattedBCdates);

		var formattedBCloc = HTMLschoolLocation
		.replace('%data%', education.schools[0].location);
		$('#college').append(formattedBCloc);

		var formattedBChonors = HTMLschoolHonors
		.replace('%data%', education.schools[0].honors);
		$('#college').append(formattedBChonors);

		var formattedBCmajor = HTMLschoolMajor
		.replace('%data%', education.schools[0].major);
		$('#college').append(formattedBCmajor);

		$('#college').css('background-image', 
			'url('images/bostoncollege.jpg')');


		var formattedUdacityschool = HTMLschoolName.replace('%data%', 
			education.schools[1].college)
			.replace('#', education.schools[1].slink);
		$('#udacity').append(formattedUdacityschool);

		var formattedUdacitydates = HTMLschoolDates
		.replace('%data%', education.schools[1].dates);
		$('#udacity').append(formattedUdacitydates);

		var formattedUdacityloc = HTMLschoolLocation
		.replace('%data%', education.schools[1].location);
		$('#udacity').append(formattedUdacityloc);

		var formattedUdacityhonors = HTMLschoolHonors
		.replace('%data%', education.schools[1].honors);
		$('#udacity').append(formattedUdacityhonors);

		var formattedUdacitymajor = HTMLschoolMajor
		.replace('%data%', education.schools[1].major);
		$('#udacity').append(formattedUdacitymajor);

		$('#udacity').css('background-image', 'url('images/bwgrad.png')');


		var formattedMHSschool = HTMLschoolName.replace('%data%', 
			education.schools[2].college)
			.replace('#', education.schools[2].slink)
			.replace('555', 'squanid');
		$('#squan').append(formattedMHSschool);


		var formattedMHSdates = HTMLschoolDates
		.replace('%data%', education.schools[2].dates);
		$('#squan').append(formattedMHSdates);

		var formattedMHSloc = HTMLschoolLocation
		.replace('%data%', education.schools[2].location);
		$('#squan').append(formattedMHSloc);

		var formattedMHShonors = HTMLschoolHonors
		.replace('%data%', education.schools[2].honors);
		$('#squan').append(formattedMHShonors);

		var formattedMHSmajor = HTMLschoolMajor
		.replace('%data%', education.schools[2].major);
		$('#squan').append(formattedMHSmajor);

		$('#squan').css('background-image', 'url('images/locker.jpg')');


}

*/




var work = {
	'jobs': [{
		'employer': 'Workman Publishing',
		'title': 'Publicist',
		'location': 'New York, NY',
		'dates': 'July 2014-September 2015',
		'description': 'As my first job out of college, Workman was a little' +
		' intimidating at first. Luckily, I was set up with a manager who really' + 
		' knew what he was doing, and he was able to show me the ropes of the Publicity' +
		' Department. I was responsible for maintaining Best Seller Lists of various books,' +
		' fielding calls for my boss, and - above all - making daily calls to reporters' + 
		' and editors to try to get them to write about the different books I was assigned' + 
		' from season to season. I created and managed the company Medium account,' +
		' wrote press releases and kept the minutes for the weekly Marketing meeting.',
		'url': 'https://www.workman.com'
	}, {
		'employer': 'Shawmut Design and Construction',
		'title': 'Junior Marketing Coordinator',
		'location': 'Boston, MA',
		'dates': 'September 2013 - July 2014',
		'description': 'Shawmut started as an internship, and eventually - upon' +
		' graduating from college, it turned into a bit of a trainee-ship. My main responsibility' + 
		' was proofreading documents before they went to print, checking semantics' +
		', spelling, capitalization, and the like. I cannot say it was thrilling, but' +
		' the people were phenomenal to work with and my English background came in handy,' +
		' which many people told me would not happen outside of a college campus.' +
		' I gathered information for company newsletters, created "focus sheet"' +
		' project narratives that were in turn used for marketing purposes, and' +
		' worked with the Senior Copywriter to develop a template for Business Development' + 
		' documents.',
		'url': 'http://www.shawmut.com'
	}, {
		'employer': 'PMG Public Relations',
		'title': 'Intern',
		'location': 'Boston, MA',
		'dates': '2012F', 
		'description' : 'It was a pleasure working with the people at PMG, and it' +
		' helped whet my appetite for Public Relations, a craving I would go on to satisfy' +
		' at Workman Publishing a few years later. PMG was a lot of going through databases' +
		' in order to streamline the work of those above me on the corporate food chain,' +
		' but it helped serve the purpose of giving me a kind of initiation to different ' +
		'publications and their audiences, knowledge which would make acclimating to the Workman' +
		' atmosphere that much easier.',
		'url': 'http://peoplemakinggood.com/'
	}, {
		'employer': 'Union Landing',
    	'title': 'Barback',
    	'location': 'Brielle, NJ',
    	'dates': 'Summers, 2011-2013',
    	'description': 'I had to stock beer, liquor, wine, napkins, and other bar materials in order to keep the night running smoothly.' +
    	' I found that at Union Landing, it was necessary for me to develop a heightened sense of' + 
    	' customer relations and personability, as inebriated restaurant guests' +
    	' are not always the most cooperative. These social skills would aid in my future positions in ' +
    	'Marketing and Public Relations.',
    	'url': 'https://www.facebook.com/UnionLanding'
	}],
	'display': 'work.display'
};

/*work.position = 'Life Mentor';
work.employer = 'Cath and Tom Masterson';
work.years= 25;
work.city='Sea Girt, NJ';*/

work.display = function() {
	for(var job in work.jobs) {
	$('#collapseOne').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace(
		'%data%', work.jobs[job].employer).replace('#', 
		work.jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace(
		'%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$('.work-entry:last').append(
		formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace('%data%',
    	work.jobs[job].dates);
  	$('.work-entry:last').append(formattedDates);

  	var formattedDescription = HTMLworkDescription
  	.replace('%data%', work.jobs[job].description);
  	$('.work-entry:last').append(formattedDescription);
	}
};

work.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});




var projects = {
	'projects': [{
		'title': 'Project 0 - About Me',
		'dates': 'October 1, 2014-October 8, 2014',
		'description': 'This was a brief introduction to HTML and CSS.' +
		'I had just learned the basics to the two languages and filled' +
		' out the project parameters. Looking back, I wish I had spent a' +
		' little more time on it since it is pretty bare-bones. Whatever.',
		'images':
			['images/ss1.png', 'images/ss2.png'],
		'imgWidth': [450]
	}, {
		'title': 'Project 1 - Portfolio Site',
		'dates': 'October 9, 2014 - October 24, 2014',
		'description': 'Project Un for Udacity was a great challenge for' +
		' someone just getting their feet wet on web developing. I messed with' +
		' different screen sizes and with different animations which was great to' + 
		' get the hang of. There is more than you can see in the pictures and I suppose' +
		' it is not even all quite done, but for how far I came in such a short time,' + 
		' I am a little proud of it.',
		'images': ['images/ss5.png', 'images/ss4.png', 'images/ss3.png', 'images/ss6.png'],
		'imgWidth': [410]
	}, {
		'title': 'Project 2 - Resume',
		'dates': 'November 30, 2014 - Jan 3, 2015',
		'description': 'You are looking at it! Whaddya think?? I took some time off' +
		' in between Project 1 and 2, and boy was that a misTAKE. Diving back in' +
		' took some time, and I took lesson 2 on JavaScript at least three times before' +
		' I got the hang of it all again. Though I have to say, there is no more rewarding' +
		' feeling than figuring out some code that has been eluding you for hours/months.',
		'images': ['images/ss7.png'],
		'imgWidth': [650]
	}],
	'display': 'projects.display'
};

projects.display = function() {
	for (var project in projects.projects) {
		$('#collapseTwo').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.
			projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.
			projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', 
			projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (var image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', 
					projects.projects[project].images[image]).replace('W',
					projects.projects[project].imgWidth);
				$('.project-entry:last').append(formattedImage);
			}
		}
	}
};

projects.display();



$('#collapseOne').collapse('hide');




var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span><span class="white-text">%data%</span></li>';
var HTMLfacebook = '<li class="flex-item" id="facebook"><span class="orange-text">facebook</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span><span class="white-text">%data%</span></li>';


var formattedCell = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#mobilecell').append(formattedCell);
	$('#contact').append(formattedCell);

	var formattedLocation = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#mobilecell').append(formattedLocation);
	$('#contact').append(formattedLocation);

	var formattedFacebook = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#facebookcell').append(formattedFacebook);
	$('#contact').append(formattedFacebook);

	var formattedEmailtop = HTMLemail.replace(
		'%data%', bio.contacts.email);
	$('#contactuptop').append(formattedEmailtop);
	$('#contact').append(formattedEmailtop);

	var formattedCelltop = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#contactuptop').append(formattedCelltop);


	var formattedLocationtop = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#contactuptop').append(formattedLocationtop);


	var formattedFacebooktop = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#contactuptop').append(formattedFacebooktop);

	
	$('#contactuptop').prepend(formattedRole);
	$('#contactuptop').prepend(formattedName);

	var skills = ['Copyediting/Copywriting', 'Researching Target Markets', 'Drafting Press Releases', 'Taking Minutes',
	'Tutoring', 'Working with Kids', 'Blogging'];


var bio = {
		'name' : 'Jack Masterson',
		'role' : 'Web Developer' 
	};



	headShot = function() {
	$('#main').append(headDiv);
	
	var headshot =['images/headshot.jpg', 'images/warby.jpg',
		'images/ireland.jpg'];
	var headId = ['pro', 'warby', 'ireland'];
	var headTitle = ['The Worker', 'The Casual', 'The Drinker']

	
	for(i=0; i<headshot.length; i++) {
		var formattedHead = HTMLheadshot.replace('%data%', headshot[i])
			.replace('%id%', headId[i]).replace('%id2', headId[i])
			.replace('%title%', headTitle[i])
		$('#headDiv').append(formattedHead);
	};

	if ($('#main').css('display') == 'block') {
	    	$('#headDiv').toggle(2000);
		}	



/*


	$('#warby').click(function(){
		if ($('#main').css('display') == 'block') {
			$('#inline').css('margin-right','50%');
		}
	});
	$('#pro').click(function(){
		if ($('#main').css('display') == 'block') {
			$('#inline').css('margin-right','50%');
		}
	});
	$('#ireland').click(function(){
		if ($('#main').css('display') == 'block') {
			$('#inline').css('margin-right','50%');
		}
	});
*/



	$('#warby').click(function(){
        $('#pro').toggle(1000);
        $('#ireland').toggle(1000);
        $('#headText').toggle(1000);
        $('#warby').click(ParaproSkills());

    });

    $('#ireland').click(function(){
        $('#pro').toggle(1000);
        $('#warby').toggle(1000);
        $('#headText').toggle(1000);
        $('#ireland').click(OtherSkills());

	});



                       <div class="panel-body">


                            <div class="container">
                                <div class="none"></div>


            </div>

                                <div class="tab-content">
                                    <div onclick="#educationformat" id="college" class="tab-pane fade in active"></div>
                                    <div id="udacity" class="tab-pane fade"></div>
                                    <div id="squan" class="tab-pane fade"></div>
                                </div>
                                <ul class="nav nav-tabs">
                                    <li class="active"><a href="#college">College</a>
                                    </li>
                                    <li><a href="#udacity">Web Development</a>
                                    </li>
                                    <li><a href="#squan">High School</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>



                
education.display = function() {
	for (var school in education.schools) {
		$('#education').append(HTMLschoolStart);

		var formattedSchoolName = HTMLschoolName
			.replace('%data%', education.schools[school].name)
			.replace('#', education.schools[school].url);

		var formattedSchoolDates = HTMLschoolDates
			.replace('%data%', education.schools[school].dates);

		var formattedSchoolLoc = HTMLschoolLocation
			.replace('%data%', education.schools[school].location);

//		var formattedSchoolHonors = HTMLschoolHonors
//			.replace('%data%', education.schools[school].honors);

		var formattedSchoolMajor = HTMLschoolMajor
			.replace('%data%', education.schools[school].majors);

		var formattedSchoolID = formattedSchoolName
			.replace('%id%', education.schools[school].schId);

		var formattedSchoolIndividual = 
			formattedSchoolID + formattedSchoolDates + formattedSchoolLoc + 
			formattedSchoolHonors + formattedSchoolMajor;

		console.log(formattedSchoolIndividual);
		$('.none').append(formattedSchoolIndividual);
}
	for (var online in education.onlineCourses) {
		//$('#education').append(HTMLonlineClasses);

		var formattedOnlineTitle = HTMLonlineTitle
			.replace('%data%', education.onlineCourses[online].title)
			.replace('#', education.onlineCourses[online].url);

		var formattedOnlineSchool = HTMLonlineSchool
			.replace('%data%', education.onlineCourses[online].school);

		var formattedOnlineDates = HTMLonlineDates
			.replace('%data%', education.onlineCourses[online].date);
	}

		var formattedOnlineIndividual = formattedOnlineTitle
		.replace('%id%', education.onlineCourses[online].schId) +
		formattedOnlineSchool + formattedOnlineDates;

		$('.none').append(formattedOnlineIndividual);

	var formattedBC = document.getElementById('bctab');
		$('#college').append(formattedBC);


	var formattedSquan = document.getElementById('squantab');
		$('#squan').append(formattedSquan);

	var formattedUdacity = document.getElementById('udutab');
		$('#udacity').append(formattedUdacity);

		$('#college').css('background-image', 
			'url("images/bostoncollege.jpg")');

		$('#udacity').css('background-image', 'url("images/bwgrad.png")');

		$('#squan').css('background-image', 'url("images/locker.jpg")');


//Education tab navigation-------------//
  $(document).ready(function(){
    $('.nav-tabs a').click(function(){
        $(this).tab('show');
    });
});

$('#maph2div').append(maph2);
$('#map').append(googleMap);


$(function () {
    $('#accordion').on('shown.bs.collapse', function (e) {
    var offset = $('.panel.panel-default > .panel-collapse.in').offset();
    if(offset)$('html,body').scrollTop(offset.top); }); });
	};



education.display();

*/
/*
var formattedCell = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#mobilecell').append(formattedCell);
	$('#contact').append(formattedCell);

	var formattedLocation = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#mobilecell').append(formattedLocation);
	$('#contact').append(formattedLocation);

	var formattedFacebook = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#facebookcell').append(formattedFacebook);
	$('#contact').append(formattedFacebook);

	var formattedEmailtop = HTMLemail.replace(
		'%data%', bio.contacts.email);
	$('#contactuptop').append(formattedEmailtop);
	$('#contact').append(formattedEmailtop);

	var formattedCelltop = HTMLmobile.replace(
		'%data%', bio.contacts.mobile);
	$('#contactuptop').append(formattedCelltop);


	var formattedLocationtop = HTMLlocation.replace(
		'%data%', bio.contacts.location);
	$('#contactuptop').append(formattedLocationtop);


	var formattedFacebooktop = HTMLfacebook.replace(
		'%data%', bio.contacts.facebook);
	$('#contactuptop').append(formattedFacebooktop);

	
	$('#contactuptop').prepend(formattedRole);
	$('#contactuptop').prepend(formattedName);


*/

