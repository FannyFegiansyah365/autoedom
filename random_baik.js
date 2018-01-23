// Randomly fills "Baik" or "Sangat Baik" di dua belas pertanyaan EDOM dengan dua dosen pengampu

var jmlPertanyaan = 12;
for (m=0;m<jmlPertanyaan;m++)
{
	for (n=0;n<3;n++)
	{
	var selectorwkwk = '#edom_' + m + '_'+(Math.floor(Math.random() * 3) + 2)+'_' + n;
	console.log(selectorwkwk);
	jQuery(selectorwkwk).attr('checked', true);
	}
}