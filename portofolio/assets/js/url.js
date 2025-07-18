var params = {};

// get Param from URLs
window.location.href.replace(/[?@&]+([^&]*)/gi, function(m, item){
  //params[key] = value;
  item_arr = item.split("=");
  tags = item_arr[1].split(",");
  params[item_arr[0]] = tags;
});
	
/*//=====================================================================================
  READ ALL PARAM FROM URL
*///=====================================================================================

if (params.tags){
  console.log(params.tags)
  let filter = document.querySelectorAll("[class^=checkbox]")
  for (i = 0; i < params.tags.length; i++) {
    
  }
  for (var i = 0; i < filter.length; i++) {
    if (params.tags.includes(filter[i].value)) {
      filter[i].checked = true
    }
  }
  toggleCheckbox()
}
	
// Change URL after load
updateURL();
	
// give param to URL when panning
function updateURL(e) {
  // Default url
  let text = location.pathname
  
  var filter = document.querySelectorAll("[class^=checkbox]")

  // Get all selected filter
  let selected = []
  for (var i = 0; i < filter.length; i++) {
    if (filter[i].checked) {
      selected.push(filter[i].value)
    }
  }

  if (selected.length > 0){
    text = "?tags="
    text += selected.join(",")
  }

  // Update urlbox
  history.replaceState({},'', text);
}