// Load Checkbox
var filter_tag_software = {
  "javascript": {
    "name": "Javascript",
    "logo": "JavaScript-logo",
  },
  "leaflet": {
    "name": "Leaflet",
    "logo": "Leaflet_logo",
  },
  "vuejs": {
    "name": "Vue.js",
    "logo": "vuejs-logo",
  },
  "carto": {
    "name": "CARTO",
    "logo": "CARTO-logo",
  },
  "sql": {
    "name": "SQL",
    "logo": "sql-logo",
  },
  "geopandas": {
    "name": "Geopandas",
    "logo": "geopandas_icon",
  },
  "python": {
    "name": "Python",
    "logo": "Python-logo",
  },
  "unreale": {
    "name": "Unreal Engine",
    "logo": "Unreal_Engine_Logo",
  },
  "autocad": {
    "name": "AutoCAD",
    "logo": "AutoCad_new_logo",
  },
  "revit": {
    "name": "Revit",
    "logo": "revit",
  },
  "agisoft": {
    "name": "Agisoft",
    "logo": "agisoft",
  },
}

var filter_tag_skill = [
  "GIS", "Photogrametry", "BIM", "Agriculture"
]

function load_filter_tag() {
  let doc_soft = document.getElementById("software_tags");
  let doc_skill = document.getElementById("skill_tags");
  Object.keys(filter_tag_software).forEach(function(kode) {
    let tag =
    '<input type="checkbox" class="checkbox" onClick="toggleCheckbox()" value="'+ kode +'" id="check_'+ kode +'">' + 
    '<label for="check_'+ kode +'" class="logo_border"><img class="filter_logo"'+ 
    'src="./assets/img/logo/'+filter_tag_software[kode]["logo"]+'.png" title="'+filter_tag_software[kode]["name"]+'"></label>'
    doc_soft.innerHTML += tag
  });

  for (var i = 0; i < filter_tag_skill.length; i++) {
    let kode = filter_tag_skill[i]
    let tag = 
    '<input type="checkbox" class="checkbox" onClick="toggleCheckbox()" value="'+ kode +'" id="check_'+ kode +'">' + 
    '<label for="check_'+ kode +'" class="skill_tag">' + kode +'</label>'
    doc_skill.innerHTML += tag
  }
  
}

load_filter_tag()

// Add class name
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  if (arr1.includes(name) == false){
    arr1.push(name)
  }
  element.className = arr1.join(" ")
}

// Remove class name
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Checkbox function
function toggleCheckbox() {
  var filter = document.querySelectorAll("[class^=checkbox]")
  var portofolio = document.querySelectorAll("[class^=portofolio]")
  var selected = []
  // Get all selected
  for (var i = 0; i < filter.length; i++) {
    if (filter[i].checked) {
      selected.push(filter[i].value)
    }
  }
  // console.log(selected)
  // Filter all the portofolio
  for (var i = 0; i < portofolio.length; i++) {
    // show all
    w3RemoveClass(portofolio[i], "hide_portofolio")
    let classes = portofolio[i].className.split(" ");
    // check if any checkbox is checked
    if(selected.length > 0){
      let show = false
      for (var j = 0; j < selected.length; j++) {
        if (classes.includes(selected[j])) {
          show = true
        }
      }
      // hide unchecked portopolio
      if (show == false) w3AddClass(portofolio[i], "hide_portofolio")
    }
  }  
}