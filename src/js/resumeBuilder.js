//header
var header = '<div id="header"></div>';
var name = '<h1 id="name">Jack Masterson</h1><span id="role">Web Developer</span><hr/>';
var headDiv = '<div class="headDivClass" id="headDiv"></div>';
var HTMLcontact = '<li class="flex-item"><span class="orange-text">%contact%:</span><span class="white-text">%data%</span></li>';
var contactDiv = '<div id="contact"></div>';

//headshot pictures
var HTMLheadshot = '<div id="inline"><div id=%id%>' +
  '<img src="%data%" class="head">' +
  '<a class="link" href="#"><h2 id="title">%title%</h2>' +
  '</a></div></div>';

var HTMLheadTextDiv = '<div class="hide" id="%id%"></div>';
var HTMLheadText = '<div class="ht%id%" id="headText"><div><ul id="skillsText">' +
                   '<li id="liText">%data%</li></ul></div></div>';
var HTMLpmg = '<div id="PMG"><img src="%data%" class="%id%"></div>';

//Blogs
var HTMLblogButton = '<button id="BlogButton">Blogs</button>';
var HTMLblogDiv = '<div id="blogDiv"><nav id="drawer""><ul id="blogUL"></ul></nav></div>';
var HTMLblogLI = '<li id="navLI"></li>';
var HTMLblogLink = '<a href="%link%" target="_blank" id="blglink"><img id="blgimg" src="%pic%"></a>';

//improv section
var HTMLimprov = '<div id="improvDiv></div>';
var HTMLimprovIMG = '<img class="improvIMGclass" src="%src%">';
var HTMLimprovTxt = '<p id="improvTxt">%data%</p>'

//skills section
var HTMLskillsStart = '<h3 id="skillsh3">Skills at a Glance:</h3><ul class="flex-box"></ul>';
var HTMLskillsReal = '<h3 id="skillsh3">Other Hobbies:</h3><ul class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item" id="skills"><span class="white-text">%data%</span></li>';

//work section
var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a target="_blank" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

//projects
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a target="_blank" href="%link%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" id="projectImage" style="width: Wpx">';

//education
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div id="%id%"><a href="#" target="_blank">%data%</a>';
var HTMLschoolDegree = ' -- %data%';
var HTMLschoolDates = '</br><div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em></div>';
var HTMLschoolHonors = '<span><br>%data%</span>';
var HTMLschoolImage = '<img src="%data%" id="schoolImage" style="width: Wpx">';

//online schooling
var HTMLonlineTitle = '<div id="%id%"><h3 id="onlineh3">Online Classes</h3><a target="_blank" href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a></div>';


//This establishes the above-the-fold contact section, including my name,
//role, cell, email, etc
MakingContact = function() {
	
	var headings = ['mobile', 'email', 'github', 
		'location', 'facebook'];

	var contact = ['(908)433-0178', 'jackmasterson5@gmail.com', 'jackmasterson',
		'Greater NYC', '/jack.masterson.560',];

			$('#main').append(contactDiv);
			$('#contact').append(name);

		var len = headings.length;

			for(i=0; i<len; i++) {
			var formattedContact = HTMLcontact
				.replace('%contact%', headings[i])
				.replace('%data%', contact[i]);
				$('#contact').append(formattedContact);
				$('#footerContacts').append(formattedContact);
			}
};


MakingContact();

//function to establish the three main sections you see when the page loads;
//professional, academics, and extra help
headShot = function() {

	$('#main').append(headDiv);
	
	var headshot =['images/headshot.jpg', 'images/vale.jpg',
		'images/dogwalk.jpg'];
	var headId = ['pro', 'warby', 'other'];
	var headId2 = ['"#pro"', '"#warby"', '"#other"'];
	var headTitle = ['Professionally', 'Academically', 
		'Extra Help'];

	//sets up the individual headshots with their information
	headShotsfn = function() {

		var len = headshot.length;
		for(i=0; i<len; i++) {
			var formattedHead = HTMLheadshot
				.replace('%data%', headshot[i])
				.replace('%id%', headId[i])
				.replace('%click%', headId[i])
				.replace('%title%', headTitle[i]);
			$('#headDiv').append(formattedHead);
			}
		};
	headShotsfn();

		//skills used to populate the headshots
		var skills = {
			"professional" : ['Web Development', 'Copyediting/Copywriting', 'Blogging', 
				'Marketing'],
			"parapro" : ['Boston College', 'Cum Laude', 'Major: English',],
			"other" : ['Tutoring', 'Babysitting', 
			'Dog Walking', 'Homework Help']
		};

		//Professional Skills section
		ProSkills = function() {
			var len = skills.professional.length;
			for(i=0;i<len;i++) {
				var formatSkills = HTMLheadText
					.replace('%data%', skills.professional[i])
					.replace('%id%', headId[0]);
					$('#pro').append(formatSkills);

			}
			//I feel like there is a better, more efficient way to do this, but can't
			//think of it right now. It makes the logos of the three companies I've
			//worked at pop up with my professional skills
			var formatWorkman = HTMLpmg.replace('%data%', '..//images/workman.png')
				.replace('%id%', 'workman');
			var formatPMG = HTMLpmg.replace('%data%', '..//images/pmg.png')
				.replace('%id%', 'workman');
			var formatShawmut = HTMLpmg.replace('%data%', '..//images/sdc.png')
				.replace('%id%', 'workman');
			    $('#main').append(formatWorkman);
			    $('#main').append(formatPMG);
			    $('#main').append(formatShawmut);
				
		};
		ProSkills();
		
		//'Paraprofessional' skills section, aka academics
		ParaProSkills = function() {
			var len = skills.parapro.length;
			for(i=0;i<len;i++) {
				var formatSkills = HTMLheadText
					.replace('%data%', skills.parapro[i])
					.replace('%id%', headId[1]);
					$('#warby').append(formatSkills);
			}
				
		};
		ParaProSkills();

		//Other skills, ie tutoring, after school help, dog walking, etc
		OtherSkills = function() {
			var len = skills.other.length;
			for(i=0;i<len;i++) {
				var formatSkills = HTMLheadText
					.replace('%data%', skills.other[i])
					.replace('%id%', headId[2]);
					$('#other').append(formatSkills);
			}
				
		};
		OtherSkills();
	//the following toggles each headshot section when another is clicked
	toggleSections = function() {
		$('#pro').click(function(){
			if ($('#headDiv').css('visibility') == 'visible') {
		        $('#warby').toggle(1000);
		        $('#other').toggle(1000);
		        $('.htpro').toggle(1000);
		        $('.head').toggle(1000);
		        $('.workman').toggle(2000);
			    $('#main').css('background-image', 'url(..//images/beach2.jpg');
		    }

	    });
		

		$('#warby').click(function(){
			if ($('#headDiv').css('visibility') == 'visible') {
		        $('#pro').toggle(1000);
		        $('.head').toggle(1000);
		        $('#other').toggle(1000);
		        $('.htwarby').toggle(1000);
		        $('#main').css('background-image', 'url(..//images/bc2.jpg');



		    }
	    });
		$('#other').click(function(){
			if ($('#headDiv').css('visibility') == 'visible') {
		        $('#pro').toggle(1000);
		        $('.head').toggle(1000);
		        $('#warby').toggle(1000);
		        $('.htother').toggle(1000);
		        $('#main').css('background-image', 'url(..//images/notepad.JPG');
		        
		    }
	    });
	};
	toggleSections();
};
headShot();

//establishes the blog content/info
Blogs = function() {
	var blogInfo = [{
		'name': 'Medium',
		'url': 'https://medium.com/@jmast35',
		'pic': 'images/medium1.png'
	}, {
		'name': 'Man of the Heights',
		'url': 'http://manoftheheights.blogspot.com/',
		'pic': 'images/heights1.png'
	}, {
		'name': 'Union Lane',
		'url': 'http://unionlane.blogspot.com/',
		'pic': 'images/unionlane1.png'
	}, {
		'name': 'Abroad in Moswetuset',
		'url': 'http://jackisabroad.blogspot.com/',
		'pic': 'images/abroad.png'
	}, {
		'name': 'Ill Write About It',
		'url': 'http://illwriteaboutit.com',
		'pic': 'images/writeaboutit.png'
	}];
	
	//formats the blog section and button
	BlogFormat = function() {
		$('#contact').append(HTMLblogButton);
		for(i=0;i<blogInfo.length;i++) {
			var blogLink = HTMLblogLink.replace('%link%', blogInfo[i].url)
				.replace('%pic%', blogInfo[i].pic);
			$('#contact').append(HTMLblogDiv);
			$('#blogUL').append(HTMLblogLI);
			$('#navLI').append(blogLink);

		}
		$('#BlogButton').click(function(){
	        $('#blogDiv').toggle(1000);
	    });
	};
	
};

Blogs();
BlogFormat();


//JSON with all my work info
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

//displays all the work information how I want it
work.display = function() {
	var jobs = work.jobs;
	for(var job in jobs) {
	$('#collapseOne').append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace(
		'%data%', jobs[job].employer).replace('#', 
		jobs[job].url);
	var formattedTitle = HTMLworkTitle.replace(
		'%data%', jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$('.work-entry:last').append(
		formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace('%data%',
    	jobs[job].dates);
  	$('.work-entry:last').append(formattedDates);

  	var formattedDescription = HTMLworkDescription
  	.replace('%data%', jobs[job].description);
  	$('.work-entry:last').append(formattedDescription);
	}
};

work.display();




//JSON with my project info
var projects = {
	'projects': [{
		'title': 'Wedding Landing Page',
		'dates': 'November 15, 2015 - Dec 19, 2015',
		'description': 'Created a landing page for a wedding for a client that happens to be my sister. ' +
		'Includes a slideshow, Bootstrap features, jQuery, and any and all information ' +
		'someone could want when attending a wedding in the area.',
		'images': ['images/couple.png', 'images/grub.png', 'images/hotels.png'],
		'imgWidth': [650],
		'link': 'http://www.sarahandryantietheknot.com'
	}, {
		'title': 'Project 3 - Arcade Game Clone',
		'dates': 'January 8, 2015 - February 7, 2016',
		'description': 'According to the Udacity instructor who reviewed it,' +
		' "excellently implemented game...I am really impressed by your work."' + 
		' This was a fun one. It took me a bit of time to' +
		' get started in that I was not sure exactly where to begin, but' +
		' watching the offered Office Hours was a huge help. All we had to do' +
		' was create the scene with one player, the bugs, the grass/stone/water' +
		' and we could turn it in, but I got a little creative and put in levels,' +
		' a scorekeeper, obstacles and lawnmowers in levels down the road, a way to' +
		' get an extra life, and a way to pick your character (my favorite is Iron' +
		' Man). Give it a try and let me know what you think!',
		'images': ['images/Project3.png'],
		'imgWidth': [650],
		'link': 'https://github.com/jackmasterson/Arcade-Game.git'
	}, {
		'title': 'Project 2 - Resume',
		'dates': 'November 30, 2015 - Jan 3, 2016',
		'description': 'You are looking at it! Whaddya think?? I took some time off' +
		' in between Project 1 and 2, and boy was that a misTAKE. Diving back in' +
		' took some time, and I took lesson 2 on JavaScript at least three times before' +
		' I got the hang of it all again. Though I have to say, there is no more rewarding' +
		' feeling than figuring out some code that has been eluding you for hours/months.',
		'images': ['images/ss7.png'],
		'imgWidth': [650],
		'link': 'https://github.com/jackmasterson/ResumeBuilder.git'
	}, {
		'title': 'Resume Template',
		'dates': 'December 2015',
		'description': 'Took some creative liberties and experimented with ' +
		'a new resume template idea. Just really fooling around, but I included ' +
		' a carousel for my work experience and tried out different layouts. It gets ' +
		'the job done.',
		'images': ['images/shell.png', 'images/work.png', 'images/hobbies.png'],
		'imgWidth': [650],
		'link': 'https://github.com/jackmasterson/Carmody.git'
	},{
		'title': 'Project 1 - Portfolio Site',
		'dates': 'October 9, 2015 - October 24, 2015',
		'description': 'Project Un for Udacity was a great challenge for' +
		' someone just getting their feet wet on web developing. I messed with' +
		' different screen sizes and with different animations which was great to' + 
		' get the hang of. There is more than you can see in the pictures and I suppose' +
		' it is not even all quite done, but for how far I came in such a short time,' + 
		' I am a little proud of it.',
		'images': ['images/ss5.png', 'images/ss4.png', 'images/ss3.png', 'images/ss6.png'],
		'imgWidth': [410],
		'link': '#/'
	}, {
		'title': 'Project 0 - About Me',
		'dates': 'October 1, 2015-October 8, 2015',
		'description': 'This was a brief introduction to HTML and CSS.' +
		'I had just learned the basics to the two languages and filled' +
		' out the project parameters. Looking back, I wish I had spent a' +
		' little more time on it since it is pretty bare-bones. Whatever.',
		'images':
			['images/ss1.png', 'images/ss2.png'],
		'imgWidth': [450],
		'link': '#/'
	}],
	'display': 'projects.display'
};

//sets up the projecst the way I want them displayed
projects.display = function() {

	for (var project in projects.projects) {

		var projectLast = $('.project-entry:last').append;
		$('#collapseTwo').append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.
			projects[project].title).replace('%link%', projects.projects[project].link);
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





var improv = function() {


	var improvPics = ['images/kewl.jpg', 'images/dog.jpg', 'images/yoga.jpg',
	'images/beard.jpg', 'images/trash.jpg']

	
	

	for(i=0;i<improvPics.length;i++) {
		$('#improvDiv').append(HTMLimprovIMG);
		var formatIMPROV = HTMLimprovIMG.replace('%src%', improvPics[i])

		$('#collapseThree').append(formatIMPROV);
	}


	var improvTxt = ['</br><a href="#collapseThree" id="improvTOG">' +
	'improv</a> Performed: Improv Boston, Manasquan High School, Local ' +
	'Community Centers; </br> Bars: Boston and NYC; </br> Not-for-profit, ' +
	'charity, and for-profit']

	var formatImprovTxt = HTMLimprovTxt.replace('%data%', improvTxt[0]);


	$('#collapseThree').append(formatImprovTxt);

	$('#improvTOG').click(function(){
    $('.improvIMGclass').animate({width: 'toggle'});
});

};
improv();


