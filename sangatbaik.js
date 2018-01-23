// Otomatis ngisi "SANGAT BAIK" di dua belas pertanyaan EDOM dengan dua dosen pengampu

var jmlPertanyaan = 12;
for (m=0;m<jmlPertanyaan;m++)
{
	for (n=0;n<3;n++)
	{
	var selectorwkwk = '#edom_' + m + '_3_' + n;
	console.log(selectorwkwk);
	jQuery(selectorwkwk).attr('checked', true);
	}
}