//your JS code here. If required.
const colorSelect = document.getElementById("colorSelect");

function selectAndRemove() {
	
  colorSelect.remove(colorSelect.selectedElement);
}