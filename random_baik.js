// Randomly fills "Baik" or "Sangat Baik" di dua belas pertanyaan EDOM dengan dua dosen pengampu
// score : 0 -> Buruk
// score : 1 -> Cukup
// score : 2 -> Baik
// score : 3 -> Sangat Baik

var jmlPertanyaan = 12;
var first_score = 0;
var prev_score = 0;
for (m=0;m<jmlPertanyaan;m++)
{
	for (n=0;n<3;n++)
	{
		var score = (Math.floor(Math.random() * 3) + 1);
		if (score==1){score=2};
		if (first_score==3 &&  n==2 && prev_score==2){score=3};
		if (first_score==2 &&  n==2 && prev_score==3){score=2};
		var selectorwkwk = '#edom_' + m + '_' + score + '_' + n;
		if (n==0){first_score = score};
		prev_score = score;
		console.log(selectorwkwk);
		jQuery(selectorwkwk).attr('checked', true);
	}
	first_score = 0;
	prev_score = 0;
}
