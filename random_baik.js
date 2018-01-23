// Randomly fills "Baik" or "Sangat Baik" di dua belas pertanyaan EDOM dengan dua dosen pengampu

var jmlPertanyaan = 12;
for (m=0;m<jmlPertanyaan;m++)
{
	for (n=0;n<3;n++)
	{
	var xx = (Math.floor(Math.random() * 3) + 1);
	if (xx==1){xx=2};
	var selectorwkwk = '#edom_' + m + '_'+ xx+'_' + n;
	console.log(selectorwkwk);
	jQuery(selectorwkwk).attr('checked', true);
	}
}