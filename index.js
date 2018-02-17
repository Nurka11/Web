function onload() {
	setTimeout(function(){
		document.querySelector('.loader').classList.add("animhid");
		document.querySelector('.homeBar').classList.add("active");
		document.body.scrollTop = 0;
	}, 100);
}

function moveToClass1(){
	document.querySelector('.processBar').classList.add("active");
	document.querySelector('.homeBar').classList.remove('active');
	document.querySelector('.featuresBar').classList.remove('active');
	document.querySelector('.pricingBar').classList.remove('active');
	document.querySelector('.faqBar').classList.remove('active');
	document.querySelector('.signupBar').classList.remove('active');

	var animY = document.querySelector('.process').offsetTop;
	var x = document.body.scrollTop;
	var interval = setInterval(function () {
		if (document.body.scrollTop == animY || document.body.scrollTop < (animY + 15) && document.body.scrollTop > (animY - 15)){
			clearInterval(interval);
			return
		}
		else moving()
	},0);
	function moving(){
		if(document.body.scrollTop > animY)
			document.body.scrollTop -= 5;
		else
			document.body.scrollTop += 5;
	}
}

document.querySelector('.processBar').addEventListener('click', moveToClass1);
document.querySelector('.learnbutton').addEventListener('click', moveToClass1);

function moveToClass2(){
	document.querySelector('.homeBar').classList.add("active");
	document.querySelector('.processBar').classList.remove('active');
	document.querySelector('.featuresBar').classList.remove('active');
	document.querySelector('.pricingBar').classList.remove('active');
	document.querySelector('.faqBar').classList.remove('active');
	document.querySelector('.signupBar').classList.remove('active');

	var animY = document.querySelector('.home').offsetTop;
	var x = document.body.scrollTop;
	var interval = setInterval(function () {
		if (document.body.scrollTop == animY || document.body.scrollTop < (animY + 15) && document.body.scrollTop > (animY - 15)){
			clearInterval(interval);
			return
		}
		else moving()
	},0);
	function moving(){
		if(document.body.scrollTop > animY)
			document.body.scrollTop -= 5;
		else
			document.body.scrollTop += 5;
	}
}

document.querySelector('.homeBar').addEventListener('click', moveToClass2);

function moveToClass3(){
	document.querySelector('.featuresBar').classList.add("active");
	document.querySelector('.homeBar').classList.remove('active');
	document.querySelector('.processBar').classList.remove('active');
	document.querySelector('.pricingBar').classList.remove('active');
	document.querySelector('.faqBar').classList.remove('active');

	var animY = document.querySelector('.features').offsetTop;
	var x = document.body.scrollTop;
	var interval = setInterval(function () {
		if (document.body.scrollTop == animY || document.body.scrollTop < (animY + 15) && document.body.scrollTop > (animY - 15)){
			clearInterval(interval);
			return
		}
		else moving()
	},0);
	function moving(){
		if(document.body.scrollTop > animY)
			document.body.scrollTop -= 5;
		else
			document.body.scrollTop += 5;
	}
}

document.querySelector('.featuresBar').addEventListener('click', moveToClass3);

function moveToClass4(){
	document.querySelector('.pricingBar').classList.add("active");
	document.querySelector('.homeBar').classList.remove('active');
	document.querySelector('.featuresBar').classList.remove('active');
	document.querySelector('.processBar').classList.remove('active');
	document.querySelector('.faqBar').classList.remove('active');

	var animY = document.querySelector('.pricing').offsetTop;
	var x = document.body.scrollTop;
	var interval = setInterval(function () {
		if (document.body.scrollTop == animY || document.body.scrollTop < (animY + 15) && document.body.scrollTop > (animY - 15)){
			clearInterval(interval);
			return
		}
		else moving()
	},0);
	function moving(){
		if(document.body.scrollTop > animY)
			document.body.scrollTop -= 5;
		else
			document.body.scrollTop += 5;
	}
}

document.querySelector('.pricingBar').addEventListener('click', moveToClass4);

function moveToClass5(){
	document.querySelector('.faqBar').classList.add("active");
	document.querySelector('.homeBar').classList.remove('active');
	document.querySelector('.featuresBar').classList.remove('active');
	document.querySelector('.pricingBar').classList.remove('active');
	document.querySelector('.processBar').classList.remove('active');

	var animY = document.querySelector('.faq').offsetTop;
	var x = document.body.scrollTop;
	var interval = setInterval(function () {
		if (document.body.scrollTop == animY || document.body.scrollTop < (animY + 15) && document.body.scrollTop > (animY - 15)){
			clearInterval(interval);
			return
		}
		else moving()
	},0);
	function moving(){
		if(document.body.scrollTop > animY)
			document.body.scrollTop -= 5;
		else
			document.body.scrollTop += 5;
	}
}

document.querySelector('.faqBar').addEventListener('click', moveToClass5);

function changingSection(){
	homeSectionOffset = document.querySelector('.home').offsetTop;
	processSectionOffset = document.querySelector('.process').offsetTop;
	featuresSectionOffset = document.querySelector('.features').offsetTop;
	faqSectionOffset = document.querySelector('.faq').offsetTop;
	pricingSectionOffset = document.querySelector('.pricing').offsetTop;
	if (document.body.scrollTop == homeSectionOffset || document.body.scrollTop < (homeSectionOffset + document.querySelector('.home').clientHeight - 15) && document.body.scrollTop > (homeSectionOffset - 15)){
		document.querySelector('.homeBar').classList.add("active");
		document.querySelector('.processBar').classList.remove('active');
		document.querySelector('.featuresBar').classList.remove('active');
		document.querySelector('.pricingBar').classList.remove('active');
		document.querySelector('.faqBar').classList.remove('active');
		document.querySelector('.signupBar').classList.remove('active');
	}
	if (document.body.scrollTop == processSectionOffset || document.body.scrollTop < (processSectionOffset + document.querySelector('.process').clientHeight - 15) && document.body.scrollTop > (processSectionOffset - 15)){
		document.querySelector('.processBar').classList.add("active");
		document.querySelector('.homeBar').classList.remove('active');
		document.querySelector('.featuresBar').classList.remove('active');
		document.querySelector('.pricingBar').classList.remove('active');
		document.querySelector('.faqBar').classList.remove('active');
		document.querySelector('.signupBar').classList.remove('active');
	}
	if (document.body.scrollTop == featuresSectionOffset || document.body.scrollTop < (featuresSectionOffset + document.querySelector('.features').clientHeight - 15) && document.body.scrollTop > (featuresSectionOffset - 15)){
		document.querySelector('.featuresBar').classList.add("active");
		document.querySelector('.processBar').classList.remove('active');
		document.querySelector('.homeBar').classList.remove('active');
		document.querySelector('.pricingBar').classList.remove('active');
		document.querySelector('.faqBar').classList.remove('active');
		document.querySelector('.signupBar').classList.remove('active');
	}
	if (document.body.scrollTop == faqSectionOffset || document.body.scrollTop < (faqSectionOffset + document.querySelector('.faq').clientHeight - 15) && document.body.scrollTop > (faqSectionOffset - 15)){
		document.querySelector('.faqBar').classList.add("active");
		document.querySelector('.processBar').classList.remove('active');
		document.querySelector('.featuresBar').classList.remove('active');
		document.querySelector('.pricingBar').classList.remove('active');
		document.querySelector('.homeBar').classList.remove('active');
		document.querySelector('.signupBar').classList.remove('active');
	}
	if (document.body.scrollTop == pricingSectionOffset || document.body.scrollTop < (pricingSectionOffset + document.querySelector('.pricing').clientHeight - 15) && document.body.scrollTop > (pricingSectionOffset - 15)){
		document.querySelector('.pricingBar').classList.add("active");
		document.querySelector('.processBar').classList.remove('active');
		document.querySelector('.featuresBar').classList.remove('active');
		document.querySelector('.homeBar').classList.remove('active');
		document.querySelector('.faqBar').classList.remove('active');
		document.querySelector('.signupBar').classList.remove('active');
	}
}
