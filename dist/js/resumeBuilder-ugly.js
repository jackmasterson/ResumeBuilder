var header='<div id="header"></div>',name='<h1 id="name">Jack Masterson</h1><span id="role">Web Developer</span><hr/>',headDiv='<div class="headDivClass" id="headDiv"></div>',HTMLcontact='<li class="flex-item"><span class="orange-text">%contact%:</span><span class="white-text">%data%</span></li>',contactDiv='<div id="contact"></div>',HTMLheadshot='<div id="inline"><div id=%id%><img src="%data%" class="head"><a class="link" href="#"><h2 id="title">%title%</h2></a></div></div>',HTMLheadTextDiv='<div class="hide" id="%id%"></div>',HTMLheadText='<div class="ht%id%" id="headText"><div><ul id="skillsText"><li id="liText">%data%</li></ul></div></div>',HTMLpmg='<div id="PMG"><img src="%data%" class="%id%"></div>',HTMLblogButton='<button id="BlogButton">Blogs</button>',HTMLblogDiv='<div id="blogDiv"><nav id="drawer""><ul id="blogUL"></ul></nav></div>',HTMLblogLI='<li id="navLI"></li>',HTMLblogLink='<a href="%link%" target="_blank" id="blglink"><img id="blgimg" src="%pic%"></a>',HTMLimprov='<div id="improvDiv></div>',HTMLimprovIMG='<img class="improvIMGclass" src="%src%">',HTMLimprovTxt='<p id="improvTxt">%data%</p>',HTMLskillsStart='<h3 id="skillsh3">Skills at a Glance:</h3><ul class="flex-box"></ul>',HTMLskillsReal='<h3 id="skillsh3">Other Hobbies:</h3><ul class="flex-box"></ul>',HTMLskills='<li class="flex-item" id="skills"><span class="white-text">%data%</span></li>',HTMLworkStart='<div class="work-entry"></div>',HTMLworkEmployer='<a target="_blank" href="#">%data%',HTMLworkTitle=" - %data%</a>",HTMLworkDates='<div class="date-text">%data%</div>',HTMLworkLocation='<div class="location-text">%data%</div>',HTMLworkDescription="<p><br>%data%</p>",HTMLprojectStart='<div class="project-entry"></div>',HTMLprojectTitle='<a href="#">%data%</a>',HTMLprojectDates='<div class="date-text">%data%</div>',HTMLprojectDescription="<p><br>%data%</p>",HTMLprojectImage='<img src="%data%" id="projectImage" style="width: Wpx">',HTMLschoolStart='<div class="education-entry"></div>',HTMLschoolName='<div id="%id%"><a href="#" target="_blank">%data%</a>',HTMLschoolDegree=" -- %data%",HTMLschoolDates='</br><div class="date-text">%data%</div>',HTMLschoolLocation='<div class="location-text">%data%</div>',HTMLschoolMajor="<em><br>Major: %data%</em></div>",HTMLschoolHonors="<span><br>%data%</span>",HTMLschoolImage='<img src="%data%" id="schoolImage" style="width: Wpx">',HTMLonlineTitle='<div id="%id%"><h3 id="onlineh3">Online Classes</h3><a target="_blank" href="#">%data%',HTMLonlineSchool=" - %data%</a>",HTMLonlineDates='<div class="date-text">%data%</div>',HTMLonlineURL='<br><a href="#">%data%</a></div>',internationalizeButton="<button>Internatinolize</button>",googleMap="<div id='map'></div>",maph2='<h2 id="maph2">Where I have Lived and Worked</h2>';MakingContact=function(){var e=["mobile","email","github","location","facebook"],a=["(908)433-0178","jackmasterson5@gmail.com","jmast35","Greater NYC","/jack.masterson.560"];for($("#main").append(contactDiv),$("#contact").append(name),i=0;i<e.length;i++){var t=HTMLcontact.replace("%contact%",e[i]).replace("%data%",a[i]);$("#contact").append(t),$("#footerContacts").append(t)}},MakingContact(),headShot=function(){$("#main").append(headDiv);var e=["images/headshot.jpg","images/vale.jpg","images/improv.jpg"],a=["pro","warby","other"],t=["Professionally","Academically","Extra Help"];headShotsfn=function(){var o=e.length;for(i=0;i<o;i++){var r=HTMLheadshot.replace("%data%",e[i]).replace("%id%",a[i]).replace("%click%",a[i]).replace("%title%",t[i]);$("#headDiv").append(r)}},headShotsfn();var o={professional:["Copyediting/Copywriting","Blogging","PR","Marketing"],parapro:["Boston College","Cum Laude","Major: English"],other:["Tutoring","Babysitting","Dog Walking","Homework Help"]};ProSkills=function(){for(i=0;i<o.professional.length;i++){var e=HTMLheadText.replace("%data%",o.professional[i]).replace("%id%",a[0]);$("#pro").append(e)}},ProSkills(),ParaProSkills=function(){for(i=0;i<o.parapro.length;i++){var e=HTMLheadText.replace("%data%",o.parapro[i]).replace("%id%",a[1]);$("#warby").append(e)}},ParaProSkills(),OtherSkills=function(){for(i=0;i<o.other.length;i++){var e=HTMLheadText.replace("%data%",o.other[i]).replace("%id%",a[2]);$("#other").append(e)}},OtherSkills()},headShot();var formatWorkman=HTMLpmg.replace("%data%","..//images/workman.png").replace("%id%","workman"),formatPMG=HTMLpmg.replace("%data%","..//images/pmg.png").replace("%id%","workman"),formatShawmut=HTMLpmg.replace("%data%","..//images/sdc.png").replace("%id%","workman");$("#main").append(formatWorkman),$("#main").append(formatPMG),$("#main").append(formatShawmut),$("#pro").click(function(){"visible"==$("#headDiv").css("visibility")&&($("#warby").toggle(1e3),$("#other").toggle(1e3),$(".htpro").toggle(1e3),$(".head").toggle(1e3),$(".workman").toggle(2e3))}),$("#warby").click(function(){"visible"==$("#headDiv").css("visibility")&&($("#pro").toggle(1e3),$(".head").toggle(1e3),$("#other").toggle(1e3),$(".htwarby").toggle(1e3),$("#main").css("background-image","url(..//images/bc.jpg"))}),$("#other").click(function(){"visible"==$("#headDiv").css("visibility")&&($("#pro").toggle(1e3),$(".head").toggle(1e3),$("#warby").toggle(1e3),$(".htother").toggle(1e3))});var work={jobs:[{employer:"Workman Publishing",title:"Publicist",location:"New York, NY",dates:"July 2014-September 2015",description:"As my first job out of college, Workman was a little intimidating at first. Luckily, I was set up with a manager who really knew what he was doing, and he was able to show me the ropes of the Publicity Department. I was responsible for maintaining Best Seller Lists of various books, fielding calls for my boss, and - above all - making daily calls to reporters and editors to try to get them to write about the different books I was assigned from season to season. I created and managed the company Medium account, wrote press releases and kept the minutes for the weekly Marketing meeting.",url:"https://www.workman.com"},{employer:"Shawmut Design and Construction",title:"Junior Marketing Coordinator",location:"Boston, MA",dates:"September 2013 - July 2014",description:'Shawmut started as an internship, and eventually - upon graduating from college, it turned into a bit of a trainee-ship. My main responsibility was proofreading documents before they went to print, checking semantics, spelling, capitalization, and the like. I cannot say it was thrilling, but the people were phenomenal to work with and my English background came in handy, which many people told me would not happen outside of a college campus. I gathered information for company newsletters, created "focus sheet" project narratives that were in turn used for marketing purposes, and worked with the Senior Copywriter to develop a template for Business Development documents.',url:"http://www.shawmut.com"},{employer:"PMG Public Relations",title:"Intern",location:"Boston, MA",dates:"2012F",description:"It was a pleasure working with the people at PMG, and it helped whet my appetite for Public Relations, a craving I would go on to satisfy at Workman Publishing a few years later. PMG was a lot of going through databases in order to streamline the work of those above me on the corporate food chain, but it helped serve the purpose of giving me a kind of initiation to different publications and their audiences, knowledge which would make acclimating to the Workman atmosphere that much easier.",url:"http://peoplemakinggood.com/"},{employer:"Union Landing",title:"Barback",location:"Brielle, NJ",dates:"Summers, 2011-2013",description:"I had to stock beer, liquor, wine, napkins, and other bar materials in order to keep the night running smoothly. I found that at Union Landing, it was necessary for me to develop a heightened sense of customer relations and personability, as inebriated restaurant guests are not always the most cooperative. These social skills would aid in my future positions in Marketing and Public Relations.",url:"https://www.facebook.com/UnionLanding"}],display:"work.display"};work.display=function(){for(var e in work.jobs){$("#collapseOne").append(HTMLworkStart);var a=HTMLworkEmployer.replace("%data%",work.jobs[e].employer).replace("#",work.jobs[e].url),t=HTMLworkTitle.replace("%data%",work.jobs[e].title),i=a+t;$(".work-entry:last").append(i);var o=HTMLworkDates.replace("%data%",work.jobs[e].dates);$(".work-entry:last").append(o);var r=HTMLworkDescription.replace("%data%",work.jobs[e].description);$(".work-entry:last").append(r)}},work.display(),$(document).click(function(e){var a=e.pageX,t=e.pageY;logClicks(a,t)});var projects={projects:[{title:"Project 3 - Arcade Game Clone",dates:"January 8, 2015 - February 7, 2016",description:'According to the Udacity instructor who reviewed it, "excellently implemented game...I am really impressed by your work." This was a fun one. It took me a bit of time to get started in that I was not sure exactly where to begin, but watching the offered Office Hours was a huge help. All we had to do was create the scene with one player, the bugs, the grass/stone/water and we could turn it in, but I got a little creative and put in levels, a scorekeeper, obstacles and lawnmowers in levels down the road, a way to get an extra life, and a way to pick your character (my favorite is Iron Man). Give it a try and let me know what you think!',images:["images/Project3.png"],imgWidth:[650]},{title:"Project 2 - Resume",dates:"November 30, 2015 - Jan 3, 2016",description:"You are looking at it! Whaddya think?? I took some time off in between Project 1 and 2, and boy was that a misTAKE. Diving back in took some time, and I took lesson 2 on JavaScript at least three times before I got the hang of it all again. Though I have to say, there is no more rewarding feeling than figuring out some code that has been eluding you for hours/months.",images:["images/ss7.png"],imgWidth:[650]},{title:"Project 1 - Portfolio Site",dates:"October 9, 2015 - October 24, 2015",description:"Project Un for Udacity was a great challenge for someone just getting their feet wet on web developing. I messed with different screen sizes and with different animations which was great to get the hang of. There is more than you can see in the pictures and I suppose it is not even all quite done, but for how far I came in such a short time, I am a little proud of it.",images:["images/ss5.png","images/ss4.png","images/ss3.png","images/ss6.png"],imgWidth:[410]},{title:"Project 0 - About Me",dates:"October 1, 2015-October 8, 2015",description:"This was a brief introduction to HTML and CSS.I had just learned the basics to the two languages and filled out the project parameters. Looking back, I wish I had spent a little more time on it since it is pretty bare-bones. Whatever.",images:["images/ss1.png","images/ss2.png"],imgWidth:[450]}],display:"projects.display"};projects.display=function(){for(var e in projects.projects){$(".project-entry:last").append;$("#collapseTwo").append(HTMLprojectStart);var a=HTMLprojectTitle.replace("%data%",projects.projects[e].title);$(".project-entry:last").append(a);var t=HTMLprojectDates.replace("%data%",projects.projects[e].dates);$(".project-entry:last").append(t);var i=HTMLprojectDescription.replace("%data%",projects.projects[e].description);if($(".project-entry:last").append(i),projects.projects[e].images.length>0)for(var o in projects.projects[e].images){var r=HTMLprojectImage.replace("%data%",projects.projects[e].images[o]).replace("W",projects.projects[e].imgWidth);$(".project-entry:last").append(r)}}},projects.display(),Blogs=function(){var e=[{name:"Medium",url:"https://medium.com/@jmast35",pic:"images/medium1.png"},{name:"Man of the Heights",url:"http://manoftheheights.blogspot.com/",pic:"images/heights1.png"},{name:"Union Lane",url:"http://unionlane.blogspot.com/",pic:"images/unionlane1.png"},{name:"Abroad in Moswetuset",url:"http://jackisabroad.blogspot.com/",pic:"images/abroad.png"},{name:"Ill Write About It",url:"http://illwriteaboutit.com",pic:"images/writeaboutit.png"}];BlogFormat=function(){for($("#contact").append(HTMLblogButton),i=0;i<e.length;i++){var a=HTMLblogLink.replace("%link%",e[i].url).replace("%pic%",e[i].pic);$("#contact").append(HTMLblogDiv),$("#blogUL").append(HTMLblogLI),$("#navLI").append(a)}$("#BlogButton").click(function(){$("#blogDiv").toggle(1e3)})}},Blogs(),BlogFormat();var improv=function(){var e=["images/kewl.jpg","images/dog.jpg","images/yoga.jpg","images/beard.jpg","images/trash.jpg"];for(i=0;i<e.length;i++){$("#improvDiv").append(HTMLimprovIMG);var a=HTMLimprovIMG.replace("%src%",e[i]);$("#collapseThree").append(a)}var t=['</br><a href="#collapseThree" id="improvTOG">improv</a> I love improv. I have been performing since Senior year of high school. I was in a group throughout college that performed throughout Boston College campus and the city of Boston at large. I have been in shows at home at Manasquan High School for charity, and at the Manasquan Community Center just for fun. Lately I have been helping to teach it to high schoolers in a class on Friday evenings. If you can make someone laugh, that to me is one of the most rewarding feelings ever.'],o=HTMLimprovTxt.replace("%data%",t[0]);$("#collapseThree").append(o),$("#improvTOG").click(function(){$(".improvIMGclass").animate({width:"toggle"})})};improv();