$(function(){
	var articles = {
		himself : [
			{
				selection:"dubious",
				headline:"Donald Trump named People magazine's Smarmiest Man Alive",
				paragraph: "Despite missing out on the magazine's top accolade, The Donald was quoted as saying that “The beauty of me is that I’m very rich.”",
				pic1: "",
				pic2: "assets/trump-praise.png",
				pic3: "assets/bg-moneypit.jpg",
				class1: "",
				class2: "trumpraise",
				class3: ""
			},
			{
				selection:"dubious",
				headline:"President Trump claims to have an excellent relationship with Mexican hombres",
				paragraph: "“Mexicans love me,” Donald Trump claimed last night. “They even have a nickname for me, 'El Diablo'. I admit I don't know what it means, but it's very endearing. We have a great relationship. Really great.”",
				pic1: "assets/el-diablo.png",
				pic2: "assets/trump-red.png",
				pic3: "assets/mexico-large.gif",
				class1: "eldiablotext",
				class2: "trumpred",
				class3: "mexicoflag"
			},
			{
				selection:"dubious",
				headline:"In a speech about War Veterans Donald Trump claimed John McCain was “pretty lame” for having been a POW",
				paragraph: "Mr. Trump stated that although he had never served in the military he had also never lost a game of battleship, and if it ever came close he'd simply quit. “John McCain should've quit before he got caught. Bad at war. Bad!”",
				pic1: "",
				pic2: "assets/trump-fingersguns.png",
				pic3: "assets/battleship.jpg",
				class1: "",
				class2: "trumpfingerguns",
				class3: "battleshipbg"
			},

			{
				selection:"doubtful",
				headline:"Trump cites scientific evidence which 'proves' his hands aren't child-sized",
				paragraph: "While his fellow Americans continue to fret about the geopolitical and economic future of their country, President Trump holds a press conference to proclaim “They're Yuge. YUGE.”",
				pic1: "",
				pic2: "",
				pic3: "assets/trump-hands.jpg",
				class1: "",
				class2: "",
				class3: "trumphands"
			},
			{
				selection:"doubtful",
				headline:"White House insiders report anxieties about the President's vise-like attachment to Twitter",
				paragraph: "Mr.Trump continues to confuse social media likes with political clout brashly stating, “My twitter has become so powerful that I can actually make my enemies tell the truth.” His advisors remain concerned about his emotional well-being should Twitter ever go offline.”",
				pic1: "assets/trump-tweethead.png",
				pic2: "",
				pic3: "assets/bg-whitehouse.jpeg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"Trump begins State of the Union speech with: “The more you know, the more you realize how much you don’t know. Except for me. I know all the things. FACT.”",
				paragraph: "In an astounding display of complete lack of self-awareness Mr. Trump emphasized his purported intelligence to a quizzical crowd. In related news, the President continues to conflate facts with simple opinions.",
				pic1:"",
				pic2: "assets/trump-thoughtful.png",
				pic3: "assets/us-flag.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"Despite losing the popular vote, President Trump boasts that “Over 70% of the world” voted for him",
				paragraph: "When confronted with how it would be possible for “the world” to vote for him, President Trump declined correction. Proving yet again that the American president has a sub-optimal understanding of the political system of his country.",
				pic1:"",
				pic2: "assets/trump-confused.png",
				pic3: "assets/earth.jpg",
				class1: "",
				class2: "trumpconfused",
				class3: "earthbg"
			},
			{
				selection:"donald",
				headline:"Mr. Trump refutes evidence supporting Global Warming by citing the existence of Vanilla Ice",
				paragraph: "A spokesperson for the President reiterated “How can temperatures continue to be on the rise if the last time they went to the extreme and rocked the ice like a vandal was in 1990?”",
				pic1: "",
				pic2: "assets/trump-head.png",
				pic3: "assets/vanillaice.jpg",
				class1: "",
				class2: "trumphead",
				class3: ""
			},
			{
				selection:"donald",
				headline:"In his most recent speech Trump clarified that “...the only difference between me and others is that I’m more honest and my women are more beautiful.”",
				paragraph: "At this point it is unclear whether the President knows what the actual dictionary definition of honesty is or that women are not property (our thoughts and prayers are with Melania Trump.)",
				pic1: "",
				pic2: "",
				pic3: "assets/honesty.PNG",
				class1: "",
				class2: "",
				class3: "honesty"
			}
		],
		opponent : [
			{
				selection:"dubious",
				headline:"After hearing of groups supporting religious headwear, Trump threatens “There will be hell toupée”",
				paragraph: "After being questioned about his trouble with successfully implementing hateful legislation, Mr. Trump argued, “Many say my policies are hair today, gone tomorrow, but no. It's not true. My policies are the best policies. Ask anyone.”",
				pic1: "assets/banned.png",
				pic2: "assets/trumpHair.png",
				pic3: "assets/bg-whitehouse.jpeg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"dubious",
				headline:"Trump explains his issues with Obama's policies: “Obamacare? More like, NObamacare. He's not even a doctor. Sad!”",
				paragraph: "He continued with “We're going to repeal Obamacare and replace it with the Affordable Care Act.” When reporters tried to point out the obvious error in this proposal they were barred from future press briefings.",
				pic1: "",
				pic2: "",
				pic3: "assets/obama-sad.png",
				class1: "",
				class2: "obamasad",
				class3: ""
			},
			{
				selection:"dubious",
				headline:"Trump issues executive order banning people from shopping at Nordstrom",
				paragraph: "When asked whether this order was motivated by Nordstrom's contract termination with his daughter's clothing collection, Trump replied “I don't hold grudges, but I could hold a great many if I wanted to because my hands are yuge and perfect. Hillary Clinton can't hold many grudges because her hands are very small and incapable.”",
				pic1: "",
				pic2: "assets/trump-head.pnghamm",
				pic3: "assets/nordstrom.jpg",
				class1: "",
				class2: "trumpraise",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"Trump's feathers are ruffled over his alleged Russian ties. Claims his ties are All-American. Or Chinese if he can find one he likes.",
				paragraph: "The White House press corps persevered in attempting to clarify the meaning of 'tie' during Question Period but to no avail. Mr. Trump simply confirmed his sartorial preferences and walked away.",
				pic1: "",
				pic2: "assets/russianties.png",
				pic3: "assets/us-flag.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"Donald Trump lambasts media's fact-finding mission as “un-American”",
				paragraph: "The President proclaimed that the principles of Journalism - remaining independent, unbiased and ethical - “just sound like a bunch of liberal media FAKE NEWS hocus pocus to me.”",
				pic1: "",
				pic2: "",
				pic3: "assets/fakenews.jpg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"President Trump encounters difficulty signing his first bill in the oval office. “Which Bill are we signing for?”, Donald asked, “...Clinton?”",
				paragraph: "After initial stunned silence from his staff, Donald fired back with “I know these things. We are doing great things. It was a joke. I know it's Bill Murray.”",
				pic1: "",
				pic2: "",
				pic3: "assets/billmurray.jpg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"Mr. Trump: “Does the constitution have a birth certificate?”",
				paragraph: "After days of severe discord surrounding the legality of his executive orders, several judges issue a stay citing clear passages within the constitution. Trump fires back by asking whether the founding documents are even totally legit, or if they themselves are part of the fake media. ",
				pic1: "",
				pic2: "",
				pic3: "assets/constitution.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"White House issues press release: “America has many enemies: ISIS, Illegals, FAKE NEWS, Nordstrom.”",
				paragraph: "The press release goes on to detail further threats to the country - “There are many other enemies too. Nuclear war, climate change scientists, Rosie O'Donnell, liberals, the IRS, nasty women, ethnic peoples and the nefarious Wet Bandits.”",
				pic1: "",
				pic2: "",
				pic3: "assets/Trumpsmirk.jpg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"Donald Trump aims to ban “those Chinese fortune cookies” citing concern for foreign control over American futures",
				paragraph: "“Everybody enjoys a good, stale fortune cookie,” The President of the United States said in a press release this morning. “But you can never know if some rogue Chinese fortune-teller is going to have a bad day and decide to write a mean one. That would be dangerous. Dangerous for America.”",
				pic1: "",
				pic2: "assets/fortunecookie.png",
				pic3: "assets/us-flag.png",
				class1: "",
				class2: "",
				class3: ""
			}
		],
		policy : [
			{
				selection:"dubious",
				headline:"The Oval Office issued a statement today claiming that Mexico has ultimately agreed to pay for Trump's Wall",
				paragraph: "The caveats include that the wall be built by Americans, on Mexican soil, with a prominent “No Americans Por Favor” sign emblazoned on it.",
				pic1: "alternate ",
				pic2: "",
				pic3: "assets/trumpwall.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"dubious",
				headline:"White House supports implementation of Alternate Facts curriculum in public schools.",
				paragraph: "“How can you know what truthy facts are, without encountering the falsey ones? Facts aren't so black and white!” crowed Besty DeVos, the inexplicable current Secretary of Education.",
				pic1: "",
				pic2: "",
				pic3: "assets/alternatefacts.jpg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"dubious",
				headline:"White House denies concerns about being in a state of complete and utter disarray.",
				paragraph: "A spokesperson was quoted as saying, “Just because no one wants to work here doesn't mean that we're understaffed, overwhelmed, and generally confused about our basic responsibilities to the American people.”",
				pic1: "",
				pic2: "assets/trump-point.png",
				pic3: "assets/bg-whitehouse.jpeg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"White House ensures detractors that “It's not a Muslim Ban, it's a MUSLIN ban.”",
				paragraph: "Trump continues to wage confused war on fabrics. “It's the fabrics that Muslims wear, isn't it? No muslin, no Muslims. But, like, it's definitely not a Muslim ban...”",
				pic1: "assets/banned.png",
				pic2: "assets/muslin.png",
				pic3: "assets/bg-whitehouse.jpeg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"Trump vows to build largest firewall ever made. “We will lock out all of these threats. The wall will be very hot”",
				paragraph: "Trump showed an alarming lack of technological understanding this weekend when he seemingly confused the internet and its security issues with real, physical breaches. He has been quoted saying “We will manufacture the hottest fire you've ever seen, and do it on American soil. Or get it from China and have them pay for it.”",
				pic1: "",
				pic2: "assets/firewall.png",
				pic3: "assets/mexico-large.gif",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"doubtful",
				headline:"Executive order is signed to make Canada 50th state",
				paragraph: "When presented with the fact that the U.S.A. already has 50 states Trump responded with 'Not once I'm finished with them.'",
				pic1: "",
				pic2: "",
				pic3: "assets/camerica.jpg",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"Trump administration explains away foreign ties with, “Putin is as American as apple pie. His football skills are tremendous!”",
				paragraph: "The White House followed up  by chastising the public - “Americans need to stop 'russian' to judgment. The Cold War is over and the Soviets are all about the American dream.”",
				pic1: "",
				pic2: "assets/putinpie.png",
				pic3: "assets/us-flag.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"Congress outlaws the IRS. Replaces it with the ITS: Internal Trump Service",
				paragraph: "The Secretary of the Treasury defended the change by saying, “What's the purpose of tax returns anyhow? What we need is a return to business. Big Business. The biggest of businesses. Ponzi schemes.”",
				pic1: "",
				pic2: "",
				pic3: "assets/its.png",
				class1: "",
				class2: "",
				class3: ""
			},
			{
				selection:"donald",
				headline:"White House puts cast of SNL on Terrorist Screening Database",
				paragraph: "Press Secretary Sean Spicer explained the move by saying, “Humour is for liberals. And I'm not entirely sure what satire is...but it sounds worryingly Islamic.”",
				pic1: "",
				pic2: "",
				pic3: "assets/snl.jpg",
				class1: "",
				class2: "",
				class3: ""
			}
		]
		//unfortunately some of these quotes are real
	}
	var articleLoaded = false;
	console.log($('#chooseNews'));
	$('#chooseNews').on("submit", function(e){
		e.preventDefault();
		// sets choice1 && choice2 from group1 && group2 clicked thing
		var choice1= $('input[name=group1]:checked').val();
		var choice2= $('input[name=group2]:checked').val();
		// creates array of potential articles based on choices
		var potentialArticles = articles[choice1].filter(function(article){
			return article.selection === choice2;
		})
		// choose random article from array
		var chosenArticle = getRandomArrayElement(potentialArticles);

		// sets author name
		var userText = $('input[id=authorName]').val();

		// $('article').fadeOut( "400", function() {

			
			
		// });
		if(choice1 != undefined && choice2 != undefined){
			// GETS CONTENT FROM CHOSEN ARTICLE
			$('.meta-author').html(userText);
			$('.headline').html(chosenArticle.headline);
			$('.paragraph').html(chosenArticle.paragraph);
			$('#layer3').css("background-image", "url("+ chosenArticle.pic3+")"); 
			$('#layer2').css("background-image", `url('${chosenArticle.pic2}')`);
			$('#layer1').css("background-image", `url('${chosenArticle.pic1}')`);
			$('#layer3').removeClass();
			$('#layer2').removeClass();
			$('#layer1').removeClass();
			$('#layer3').addClass(chosenArticle['class3']);
			$('#layer2').addClass(chosenArticle['class2']);
			$('#layer1').addClass(chosenArticle['class1']);
			articleLoaded = true;
			var choice1= undefined;
			var choice2= undefined;
		}else{
			alert('bad bad not good');
			articleLoaded = false;
		}
		if(articleLoaded){
			$('#toolbox').fadeOut("400");
			$('article').fadeIn( "400", function() {
				$('input').prop('checked', false);
				$('#headline').val('');
				scrollArticle()
			})
		}
		
	});
	function scrollArticle(){
		if(articleLoaded === true){
			$('html, body').animate({
				scrollTop: $("#newsArticle").offset().top
			}, 400);
		}
	}
	//array full of headlines
	function getRandomArrayElement(array){
		var randoNum = Math.floor(Math.random()*array.length);
		return array[randoNum];
	}
	var asideOpen = true;
	$('.toolboxButton').on('click', function(e){
		// e.preventDefault();

	$('#toolbox').removeClass('toolboxClose').fadeIn("400");
	$('article').fadeOut( "400", function() {
		// $('input').prop('checked', false);
		// $('#headline').val('');
		// scrollArticle()
	})
	})

});
// click button from group, save choice. Do for each group.
