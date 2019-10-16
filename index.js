const hats = ['./img/ikea-hat.png', './img/bowtie.png', './img/glasses.png'];
const bodys = ['./img/bullet-proof.png', './img/flannel.png', './img/herd-jacket .png', './img/wawa.png'];
const legs = ['./img/fishing-waiders.png', './img/joggers.png', './img/pj-bottom.png', './img/sweatpants-tucked.png', './img/yoga-pants.png'];
const shoes = ['./img/crocs.png', './img/flip-flops.png', './img/jordans.png', './img/nike-shoes.png'];
let hat = 0;
let body = 0;
let leg = 0;
let shoe = 0;
const ids = [['#head-right', hat, hats], ['#head-left', hat, hats], ['#body-right', body, bodys], ['#body-left', body, bodys], ['#legs-right', leg, legs], ['#legs-left', leg, legs], ['#shoes-right', shoe, shoes], ['#shoes-left', shoe, shoes]];
for (const x in ids) {
	$(ids[x][0]).click(() => {
		if (ids[x][0].includes('right')) {
			if (ids[x][2].length -1 == ids[x][1]) ids[x][1] = -1;
			ids[x][1]++;
		} else {
			if (ids[x][1] == 0) ids[x][1] = ids[x][2].length;
			ids[x][1]--;
		}
		let img;
		if (ids[x][0].includes('head')) img = '#head';
		if (ids[x][0].includes('body')) img = '#body';
		if (ids[x][0].includes('legs')) img = '#legs';
		if (ids[x][0].includes('shoes')) img = '#shoes';
		const imgUrl = ids[x][2][ids[x][1]];
		$(img).attr('src', imgUrl);
		if (img != '#body') $(img).attr('class', '');
		if (imgUrl.includes('bowtie')) $(img).addClass('bowtie');
		if (imgUrl.includes('glasses')) $(img).addClass('glasses');
		if (imgUrl.includes('ikea')) $(img).addClass('ikea');
		if (imgUrl.includes('waiders')) $(img).addClass('waiders');
		if (imgUrl.includes('joggers')) $(img).addClass('sweat-pants');
		if (imgUrl.includes('sweatpants')) $(img).addClass('sweat-pants');
		if (imgUrl.includes('pj')) $(img).addClass('pjs');
		if (imgUrl.includes('yoga')) $(img).addClass('pjs');
		if (imgUrl.includes('crocs')) $(img).addClass('crocs');
		if (imgUrl.includes('flip')) $(img).addClass('flip-flops');
		if (imgUrl.includes('jordans')) $(img).addClass('jordans');
		if (imgUrl.includes('nike')) $(img).addClass('jordans');
	});
}