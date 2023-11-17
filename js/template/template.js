export let URLGeoJson = "https://raw.githubusercontent.com/Ardivadiva/gisdip4/main/gisjson.json";
export let urlPostGCF = "https://asia-southeast2-modular-bucksaw-401904.cloudfunctions.net/function-2";
export let tableTag="tr";
export let tableRowClass="content is-small";
export let tableTemplate=`
<td>#NAME#</td>
<td >#KORDINAT#</td>
<td>#TYPE#</td>
`
export const clickpopup = `
Long : #LONG#<br>
Lat  : #LAT#<br>
X   : #X#<br>
Y   : #Y#<br>
HDMS : #HDMS#<br>
`