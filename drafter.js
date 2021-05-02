$(document).ready(function() {

	//var America = {Enabled:false};
	var allCivs = {};
	allcivs["alexander"] = true;
	allcivs["amanitore"] = true;
	allcivs["ambiorix"] = true;
	allcivs["batrieu"] = true;
	allcivs["basil-ii"] = true;
	allcivs["catherine-blackqueen"] = true;
	allcivs["catherine-magnificence"] = true;
	allcivs["chandragupta"] = true;
	allcivs["cleopatra"] = true;
	allcivs["cyrus"] = true;
	allcivs["dido"] = true;
	allcivs["eleanor-england"] = true;
	allcivs["eleanor-france"] = true;
	allcivs["frederickbarbarossa"] = true;
	allcivs["gandhi"] = true;
	allcivs["genghiskhan"] = true;
	allcivs["gilgamesh"] = true;
	allcivs["gitarja"] = true;
	allcivs["gorgo"] = true;
	allcivs["hammurabi"] = true;
	allcivs["haraldhardrada"] = true;
	allcivs["hojotokimune"] = true;
	allcivs["jadwiga"] = true;
	allcivs["jayavarman-vii"] = true;
	allcivs["joao-iii"] = true;
	allcivs["johncurtin"] = true;
	allcivs["kristina"] = true;
	allcivs["kublai-china"] = true;
	allcivs["kublai-mongolia"] = true;
	allcivs["kupe"] = true;
	allcivs["ladysixsky"] = true;
	allcivs["lautaro"] = true;
	allcivs["mansamusa"] = true;
	allcivs["matthias"] = true;
	allcivs["menelik-ii"] = true;
	allcivs["montezuma"] = true;
	allcivs["mvembaanzinga"] = true;
	allcivs["pachacuti"] = true;
	allcivs["pedro-ii"] = true;
	allcivs["pericles"] = true;
	allcivs["peter"] = true;
	allcivs["philip-ii"] = true;
	allcivs["poundmaker"] = true;
	allcivs["qinshihuang"] = true;
	allcivs["robertbruce"] = true;
	allcivs["saladin"] = true;
	allcivs["seondeok"] = true;
	allcivs["shaka"] = true;
	allcivs["simonbolivar"] = true;
	allcivs["suleiman"] = true;
	allcivs["tamar"] = true;
	allcivs["teddy-bullmoose"] = true;
	allcivs["teddy-roughrider"] = true;
	allcivs["tomyris"] = true;
	allcivs["trajan"] = true;
	allcivs["victoria"] = true;
	allcivs["wilfridlaurier"] = true;
	allcivs["wilhelmina"] = true;
	
	
	var bannedCivs = 0;
	var totalCivs = 58;
	var titleHTML = "";
	var allclicked = false;
	
	// toggle disable or enabled civ
	$(".Alexander,.Amanitore,.Ambiorix,.BaTrieu,.Basil-II,.Catherine-BlackQueen,.Catherine-Magnificence,.Chandragupta,.Cleopatra,.Cyrus,.Dido,.Eleanor-England,.Eleanor-France,.FrederickBarbarossa,.Gandhi,.GenghisKhan,.Gilgamesh,.Gitarja,.Gorgo,.Hammurabi,.HaraldHardrada,.HojoTokimune,.Jadwiga,.Jayavarman-VII,.Joao-III,.JohnCurtin,.Kristina,.Kublai-China,.Kublai-Mongolia,.Kupe,.LadySixSky,.Lautaro,.MansaMusa,.Matthias,.Menelik-II,.Montezuma,.MvembaaNzinga,.Pachacuti,.Pedro-II,.Pericles,.Peter,.Philip-II,.Poundmaker,.QinShiHuang,.RobertBruce,.Saladin,.Seondeok,.Shaka,.SimonBolivar,.Suleiman,.Tamar,.Teddy-BullMoose,.Teddy-RoughRider,.Tomyris,.Trajan,.Victoria,.WilfridLaurier,.Wilhelmina").bind('click', toggleState)
	
	function toggleState(e) {        // function_tr
		console.log('here');
		if ( !$(this).is(':animated') ) {
			if ($(this).css('opacity') < 1) {
				$(this).css("text-decoration", "none");
				$(this).css("background-color", "#282828");
				$(this).fadeTo( "slow" , 1, function() {});
				allCivs[this.className] = true;
				bannedCivs--;
			} else {
				$(this).css("background-color", "#1a1a1a");
				$(this).fadeTo( "slow" , 0.25, function() {$(this).css("text-decoration", "line-through");});
				allCivs[this.className] = false;
				bannedCivs++;
			}
		}
		
		updateBanned(totalCivs, bannedCivs);
	};
	
	//reset all to enabled
	$('#reset').click(function() {
	
		$(".Alexander,.Amanitore,.Ambiorix,.BaTrieu,.Basil-II,.Catherine-BlackQueen,.Catherine-Magnificence,.Chandragupta,.Cleopatra,.Cyrus,.Dido,.Eleanor-England,.Eleanor-France,.FrederickBarbarossa,.Gandhi,.GenghisKhan,.Gilgamesh,.Gitarja,.Gorgo,.Hammurabi,.HaraldHardrada,.HojoTokimune,.Jadwiga,.Jayavarman-VII,.Joao-III,.JohnCurtin,.Kristina,.Kublai-China,.Kublai-Mongolia,.Kupe,.LadySixSky,.Lautaro,.MansaMusa,.Matthias,.Menelik-II,.Montezuma,.MvembaaNzinga,.Pachacuti,.Pedro-II,.Pericles,.Peter,.Philip-II,.Poundmaker,.QinShiHuang,.RobertBruce,.Saladin,.Seondeok,.Shaka,.SimonBolivar,.Suleiman,.Tamar,.Teddy-BullMoose,.Teddy-RoughRider,.Tomyris,.Trajan,.Victoria,.WilfridLaurier,.Wilhelmina").css(
		{"text-decoration": "none",
		"background-color": "#282828"
		});
		
		$(".Alexander,.Amanitore,.Ambiorix,.BaTrieu,.Basil-II,.Catherine-BlackQueen,.Catherine-Magnificence,.Chandragupta,.Cleopatra,.Cyrus,.Dido,.Eleanor-England,.Eleanor-France,.FrederickBarbarossa,.Gandhi,.GenghisKhan,.Gilgamesh,.Gitarja,.Gorgo,.Hammurabi,.HaraldHardrada,.HojoTokimune,.Jadwiga,.Jayavarman-VII,.Joao-III,.JohnCurtin,.Kristina,.Kublai-China,.Kublai-Mongolia,.Kupe,.LadySixSky,.Lautaro,.MansaMusa,.Matthias,.Menelik-II,.Montezuma,.MvembaaNzinga,.Pachacuti,.Pedro-II,.Pericles,.Peter,.Philip-II,.Poundmaker,.QinShiHuang,.RobertBruce,.Saladin,.Seondeok,.Shaka,.SimonBolivar,.Suleiman,.Tamar,.Teddy-BullMoose,.Teddy-RoughRider,.Tomyris,.Trajan,.Victoria,.WilfridLaurier,.Wilhelmina").fadeTo( "slow" , 1, function() {});
		
		$.each(allCivs, function (index, value) {
			allCivs[index] = true;
		});
				
		//update the title
		bannedCivs = 0;
		updateBanned(totalCivs, bannedCivs);
		
		allclicked = false;
	});

	function updateBanned(totalAllowed, totalBanned) {
		var titleHTML  = (totalAllowed - totalBanned) + " Allowed - " + totalBanned + " Banned";
		
		$(".selectorheadline").html(titleHTML );
	}
	
	// make the draft
	$('#create').click(function() {	  		
  		var players = $("#gameplayers option:selected").index() + 1;
  		var rndpicks = $("#picks option:selected").index() + 1;
  		var neededCivs = players * rndpicks;
  		var enabledCivs = 0;
  		var missingCivs = 0;
  		var allowedCivs = [];
  		var playerPicks = {};
  		
  		//clear any previous results
  		$("#results").empty();
  		
  		//check how many civs are enabled
  		$.each(allCivs, function (index, value) {
			if (allCivs[index] == true) {
				allowedCivs[enabledCivs] = index;
				enabledCivs++;
			};
  		});
		
		//check if the user is trying to pick more civs than avaliable
		if (neededCivs > 58) {
			$("#results").html("<p class='drawerror'>There are not enough civilizations for " + players + " players to have " + rndpicks + " picks each!</br>Select a different number of players or lower the number of random picks and try again!</p>");

		// check if we have enough enabled civs process the draft
		} else if (enabledCivs < neededCivs) { 
			missingCivs = neededCivs - enabledCivs;
			$("#results").html("<p class='drawerror'>There are not enough available civilizations to make the draw!</br>Please unban at least another " + missingCivs +" civilizations and try again!</p>");

		// errors handled we can now make the draw
		} else {
		
			// pick 3 rand civs for each player
			var i;
			var k;
			var picksHTML = "<p class='rescopied'>Draft results have been copied to clipboard</p>";
			var resCopy = ""
			
			picksHTML = picksHTML + "<table class='drawresults'>";

			$("#results").css("text-align", "left");
			//loop thru each player
			for (i = 1; i <= players; i++) { 
				
				//add this player to the results HTML
				picksHTML = picksHTML + "<tr><td>Player " + i + " choose from:</td>";
				resCopy = resCopy  + "Player " + i + " choose from: - ";
				
				//loop however many picks are needed
				for (k = 1; k <= rndpicks; k++) {
					
					//loop thru the avlaiable civs and pick 3 at random
					var thisciv = Math.floor(Math.random() * allowedCivs.length);
					picksHTML = picksHTML + "<td><img src='img/" + allowedCivs[thisciv].toLowerCase() + ".png'></img>" + allowedCivs[thisciv];
					
					if (k < rndpicks) {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + " or ";
					} else {
						picksHTML = picksHTML + "<td>";
						resCopy = resCopy  + allowedCivs[thisciv] + "\r\n";
					}
					
					// remove this item from the array, create new temp array and then assign it to allowed civs						
					enabledCivs = 0;
					var tmpCivs = [];
					
					$.each(allowedCivs, function (index, value) {
						if (index != thisciv) {
							tmpCivs[enabledCivs] = value;
							enabledCivs++;
						};
					});
					
					allowedCivs = tmpCivs.slice();
				}
				
				picksHTML = picksHTML + "</br>"
			}
			
			picksHTML = picksHTML + "</table>"
			picksHTML = picksHTML + "<div id='copyresults'><input class='submitbutton' name='copyres' id='copyres' type='button' value='Copy Results' /></div>"
			$("#results").html(picksHTML);
			
			$("#copyTarget").val(resCopy);
			
			document.getElementById("copyres").addEventListener("click", function() {
			    copyToClipboard(document.getElementById("copyTarget"));
			});
			
			$("#copyres").click();
			
			function copyToClipboard(elem) {
				  // create hidden text element, if it doesn't already exist
			    var targetId = "_hiddenCopyText_";
			    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
			    var origSelectionStart, origSelectionEnd;
			    if (isInput) {
			        // can just use the original source element for the selection and copy
			        target = elem;
			        origSelectionStart = elem.selectionStart;
			        origSelectionEnd = elem.selectionEnd;
			    } else {
			        // must use a temporary form element for the selection and copy
			        target = document.getElementById(targetId);
			        if (!target) {
			            var target = document.createElement("textarea");
			            target.style.position = "absolute";
			            target.style.left = "-9999px";
			            target.style.top = "0";
			            target.id = targetId;
			            document.body.appendChild(target);
			        }
			        target.textContent = elem.textContent;
			    }
			    // select the content
			    var currentFocus = document.activeElement;
			    target.focus();
			    target.setSelectionRange(0, target.value.length);
			    
			    // copy the selection
			    var succeed;
			    try {
			    	  succeed = document.execCommand("copy");
			    } catch(e) {
			        succeed = false;
			    }
			    // restore original focus
			    if (currentFocus && typeof currentFocus.focus === "function") {
			        currentFocus.focus();
			    }
			    
			    if (isInput) {
			        // restore prior selection
			        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
			    } else {
			        // clear temporary content
			        target.textContent = "";
			    }
			    return succeed;
			}
		}
	});
});				

