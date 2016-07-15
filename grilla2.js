
(function(){

var color=['active','inactive','blue','aqua','grass','green','leave','yelloww','yellow','orange','red','inactive','active'];

var color2=['active1','purple', 'inactive1', 'mora', 'blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1'];

var color3=['purple', 'inactive1', 'mora', 'blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple'];

var color4=['inactive1', 'mora', 'blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1'];

var color5=['mora', 'blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora'];

var color6=['blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1'];

var color7=['blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber'];

var color8=['aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1'];

var color9=['alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga'];

var color10=['grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1'];

var color11=['eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes'];

var color12=['green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1'];

var color13=['greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost'];

var color14=['leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1'];

var color15=['paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel'];

var color16=['yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1'];

var color17=['egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg'];

var color18=['yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1'];

var color19=['paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora'];

var color20=['orange1','carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1'];

var color21=['carmesi','red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi'];

var color22=['red1','morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1'];

var color23=['morado','inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado'];

var color24=['inactive1','midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1'];

var color25=['midmora','purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora'];

var color26=['purple','active1','purple','inactive1','mora','blue1','blueber','aqua1','alga','grass1','eyes','green1','greenghost','leave1','paleyel','yelloww1','egg','yellow1','paleora','orange1','carmesi','red1','morado','inactive1','midmora','purple'];

var a25=$('#a25'); var aa25=$('#aa25'); var a24= $('#a24'); var aa24= $('#aa24'); var a23=$('#a23'); var aa23=$('#aa23');
var a22= $('#a22'); var aa22= $('#aa22'); var a21=$('#a21'); var aa21=$('#aa21'); var a20= $('#a20'); var aa20= $('#aa20');
var a19=$('#a19'); var aa19=$('#aa19'); var a18=$('#a18'); var aa18=$('#aa18'); var a17=$('#a17'); var aa17=$('#aa17');
var a16=$('#a16'); var aa16=$('#aa16'); var a15=$('#a15'); var aa15=$('#aa15'); var a14=$('#a14'); var aa14=$('#aa14');
var a13=$('#a13'); var aa13=$('#aa13'); var a12=$('#a12'); var aa12=$('#aa12'); var a11=$('#a11'); var aa11=$('#aa11');
var a10=$('#a10'); var aa10=$('#aa10'); var a9=$('#a9'); var aa9=$('#aa9'); var a8=$('#a8'); var aa8=$('#aa8');
var a7=$('#a7'); var aa7=$('#aa7'); var a6=$('#a6');var aa6=$('#aa6'); var a5=$('#a5'); var aa5=$('#aa5'); var a4=$('#a4');
var aa4=$('#aa4'); var a3=$('#a3'); var aa3=$('#aa3'); var a2=$('#a2'); var aa2=$('#aa2'); var a1=$('#a1'); var aa1=$('#aa1');

var back = $('body');
var y=1000;
var m= 1000;
var e= 0;
var o=990;
var n=0;
var x=0;

back.addClass('active');

/////////////////a#

a25.addClass('active1');
a24.addClass('purple');
a23.addClass('inactive1');
a22.addClass('mora');
a21.addClass('blue1');
a20.addClass('blueber');
a19.addClass('aqua1');
a19.addClass('alga');
a17.addClass('grass1');
a16.addClass('eyes');
a15.addClass('green1');
a14.addClass('greenghost');
a13.addClass('leave1');
a12.addClass('paleyel');
a11.addClass('yelloww1');
a10.addClass('egg');
a9.addClass('yellow1');
a8.addClass('paleora');
a7.addClass('orange1');
a6.addClass('carmesi');
a5.addClass('red1');
a4.addClass('morado');
a3.addClass('inactive1');
a2.addClass('midmora');
a1.addClass('purple');

/////////////////aa#


aa25.addClass('active1');
aa24.addClass('purple');
aa23.addClass('inactive1');
aa22.addClass('mora');
aa21.addClass('blue1');
aa20.addClass('blueber');
aa19.addClass('aqua1');
aa19.addClass('alga');
aa17.addClass('grass1');
aa16.addClass('eyes');
aa15.addClass('green1');
aa14.addClass('greenghost');
aa13.addClass('leave1');
aa12.addClass('paleyel');
aa11.addClass('yelloww1');
aa10.addClass('egg');
aa9.addClass('yellow1');
aa8.addClass('paleora');
aa7.addClass('orange1');
aa6.addClass('carmesi');
aa5.addClass('red1');
aa4.addClass('morado');
aa3.addClass('inactive1');
aa2.addClass('midmora');
aa1.addClass('purple');

aa1.on('click',function(){
	alert('Hola bitch');
})


for (var i = 0; i < 30; i++) {


function selector2(){

for (var h = 0; h <= 12; h++) {
	
		// if (i==0){
			x++;
			console.log(n+"q");

		if(x==12){
			x=0;
			x++;
			return x;
		}
					return x;

	 }
}

function selector(){

for (var j = 0; j <= 26; j++) {
	
		// if (i==0){
			n++;
			console.log(n+"h");

		if(n==26){
			n=0;
			n++;
			return n;
		}
					return n;

	 }


}

		for (var u = 0; u <= 12; u++) {
			setTimeout(function(){
			var ham= selector2();
			console.log(ham+"ol");
			back.removeClass(color[ham]).addClass(color[ham + 1]);	
		},m+=3000)
		}



		for (e = 0; e <= 26; e++) {
			setTimeout(function(){
			var num= selector();
			console.log(num);
			a25.removeClass(color2[num]).addClass(color2[num + 1]);
			a24.removeClass(color3[num]).addClass(color3[num + 1]);
			a23.removeClass(color4[num]).addClass(color4[num + 1]);
			a22.removeClass(color5[num]).addClass(color5[num + 1]);
			a21.removeClass(color6[num]).addClass(color6[num + 1]);
			a20.removeClass(color7[num]).addClass(color7[num + 1]);
			a19.removeClass(color8[num]).addClass(color8[num + 1]);
			a18.removeClass(color9[num]).addClass(color9[num + 1]);
			a17.removeClass(color10[num]).addClass(color10[num + 1]);
			a16.removeClass(color11[num]).addClass(color11[num + 1]);
			a15.removeClass(color12[num]).addClass(color12[num + 1]);
			a14.removeClass(color13[num]).addClass(color13[num + 1]);
			a13.removeClass(color14[num]).addClass(color14[num + 1]);
			a12.removeClass(color15[num]).addClass(color15[num + 1]);
			a11.removeClass(color16[num]).addClass(color16[num + 1]);
			a10.removeClass(color17[num]).addClass(color17[num + 1]);
			a9.removeClass(color18[num]).addClass(color18[num + 1]);
			a8.removeClass(color19[num]).addClass(color19[num + 1]);
			a7.removeClass(color20[num]).addClass(color20[num + 1]);
			a6.removeClass(color21[num]).addClass(color21[num + 1]);
			a5.removeClass(color22[num]).addClass(color22[num + 1]);
			a4.removeClass(color23[num]).addClass(color23[num + 1]);
			a3.removeClass(color24[num]).addClass(color24[num + 1]);
			a2.removeClass(color25[num]).addClass(color25[num + 1]);
			a1.removeClass(color26[num]).addClass(color26[num + 1]);			

//////////////////////////aa



			aa25.removeClass(color2[num]).addClass(color2[num + 1]);
			aa24.removeClass(color3[num]).addClass(color3[num + 1]);
			aa23.removeClass(color4[num]).addClass(color4[num + 1]);
			aa22.removeClass(color5[num]).addClass(color5[num + 1]);
			aa21.removeClass(color6[num]).addClass(color6[num + 1]);
			aa20.removeClass(color7[num]).addClass(color7[num + 1]);
			aa19.removeClass(color8[num]).addClass(color8[num + 1]);
			aa18.removeClass(color9[num]).addClass(color9[num + 1]);
			aa17.removeClass(color10[num]).addClass(color10[num + 1]);
			aa16.removeClass(color11[num]).addClass(color11[num + 1]);
			aa15.removeClass(color12[num]).addClass(color12[num + 1]);
			aa14.removeClass(color13[num]).addClass(color13[num + 1]);
			aa13.removeClass(color14[num]).addClass(color14[num + 1]);
			aa12.removeClass(color15[num]).addClass(color15[num + 1]);
			aa11.removeClass(color16[num]).addClass(color16[num + 1]);
			aa10.removeClass(color17[num]).addClass(color17[num + 1]);
			aa9.removeClass(color18[num]).addClass(color18[num + 1]);
			aa8.removeClass(color19[num]).addClass(color19[num + 1]);
			aa7.removeClass(color20[num]).addClass(color20[num + 1]);
			aa6.removeClass(color21[num]).addClass(color21[num + 1]);
			aa5.removeClass(color22[num]).addClass(color22[num + 1]);
			aa4.removeClass(color23[num]).addClass(color23[num + 1]);
			aa3.removeClass(color24[num]).addClass(color24[num + 1]);
			aa2.removeClass(color25[num]).addClass(color25[num + 1]);
			aa1.removeClass(color26[num]).addClass(color26[num + 1]);	
					return num;
	
			}, y+=3000);
	

		}

}
})();

