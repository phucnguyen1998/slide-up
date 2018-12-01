window.onscroll = function() {Scroll()};
		
		function Scroll() {
			if(document.body.scrollTop > 5 || document.documentElement.scrollTop > 5){
				document.getElementById("content").className = "slideUp content";

				if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
					document.getElementById("about-us").className = "slideUp container-fluid about";

					if(document.body.scrollTop > 1050 || document.documentElement.scrollTop > 1050){
						document.getElementById("services").className = "slideUp container-fluid services";

						if(document.body.scrollTop > 1300 || document.documentElement.scrollTop > 1300){
							document.getElementById("WeDo").className = "slideUp container-fluid We-Do";
							document.getElementById("dn").className = "slideUp We-Do-design";
							document.getElementById("dc").className = "slideUp We-Do-design";
							document.getElementById("da").className = "slideUp We-Do-design";

							if(document.body.scrollTop > 1950 || document.documentElement.scrollTop > 1950){
								document.getElementById("topwork").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 topwork";
								document.getElementById("join").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 join";
								document.getElementById("market").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 market";
								document.getElementById("worktop").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 worktop";
								document.getElementById("lable").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 lable";
								document.getElementById("KYIV").className = "slideUp divOpacity col-lg-3 col-md-6 col-sm-12 KYIV";
							}
						}
					}
				}
			}
		}
