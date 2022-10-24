//tv animation

document.addEventListener("DOMContentLoaded",tv);
function tv() {
	var cnv = document.getElementById("static"),
		c = cnv.getContext("2d"),
		cw = cnv.offsetWidth,
		ch = cnv.offsetHeight,
		staticScrn = c.createImageData(cw,ch),
		staticFPS = 30,
		isStatic = false,
		staticTO,
		gifData = [
			{
				file: "https://i.ibb.co/chSK1Zt/willie.gif",
				desc: "Mickey Mouse steering a ship"
			},
			{
				file: "https://i.ibb.co/0FqQVrj/skeletons.gif",
				desc: "Spooky scary skeletons"
			},
			{
				file: "https://i.gifer.com/VDS0.gif",
				desc: "screaming lady",
			},
			{
				file: "https://i.pinimg.com/originals/6f/ec/6d/6fec6dd21ec595d5636b72db79ec855a.gif",
				desc: "lady ghost",
			},
			{
				file: "https://steamuserimages-a.akamaihd.net/ugc/924804272475378599/F384D63E9F7537910A1FB61C0DB12A38A888FF2E/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
				desc: "KoKo the clown",
			}
		],
		gifs = [],
		channel = 0;

	for (g in gifData) {
		gifs.push(new Image());
		gifs[g].src = gifData[g].file;
		gifs[g].alt = gifData[g].desc;
	}

	/* Static */
	var runStatic = function() {
		isStatic = true;
		c.clearRect(0,0,cw,ch);

		for (var i = 0; i < staticScrn.data.length; i += 4) {
			let shade = 127 + Math.round(Math.random() * 128);
			staticScrn.data[0 + i] = shade;
			staticScrn.data[1 + i] = shade;
			staticScrn.data[2 + i] = shade;
			staticScrn.data[3 + i] = 255;
		}
		c.putImageData(staticScrn,0,0);

		staticTO = setTimeout(runStatic,1e3/staticFPS);
	};
	runStatic();

	/* Channels */
	var changeChannel = function() {
		var displayed = document.getElementById("displayed");

		++channel;
		if (channel > gifData.length)
			channel = 1;

		this.classList.remove("pristine");
		this.style.transform = `rotate(${channel * 360/(gifData.length + 1)}deg)`;

		cnv.classList.remove("hide");
		displayed.classList.add("hide");

		if (!isStatic)
			runStatic();

		setTimeout(function(){
			cnv.classList.add("hide");
			displayed.classList.remove("hide");

			displayed.src = gifs[channel - 1].src;
			displayed.alt = gifs[channel - 1].alt;

			isStatic = false;

			clearTimeout(staticTO);
		},300);
	};
	document.getElementById("channel").addEventListener("click",changeChannel);
}
