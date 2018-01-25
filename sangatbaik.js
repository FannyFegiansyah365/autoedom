// Otomatis ngisi "SANGAT BAIK" di dua belas pertanyaan EDOM dengan dua dosen pengampu
// score : 0 -> Buruk
// score : 1 -> Cukup
// score : 2 -> Baik
// score : 3 -> Sangat Baik

var jmlPertanyaan = 12;
var score = 3;
for (m=0;m<jmlPertanyaan;m++)
{
	for (n=0;n<3;n++)
	{
		var selectorwkwk = '#edom_' + m + '_' + score + '_' + n;
		console.log(selectorwkwk);
		jQuery(selectorwkwk).attr('checked', true);
	}
}
