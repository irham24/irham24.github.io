// Get the modal
var modal = document.getElementById("myModal");
var modal_header = document.getElementById("modal-header-text");
var modal_footer = document.getElementById("modal-footer-text");
var modal_img = document.getElementById("modal-img");
var modal_link = document.getElementById("modal-link");
var modal_text = document.getElementById("modal-text");
var modal_tags = document.getElementById("modal-tags");
var modal_klik = document.getElementById("modal-project");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function clickPorto(el) {
  modal.style.display = "block";
  let kode = el.id;
  // Change Header
  modal_header.innerText = el.children[1].innerText;
  // Change Body
  modal_img.src = "./assets/img/project/"+ portfolio[kode]["photo"] +".png";
  modal_text.innerHTML = portfolio[kode]["desc"]
  // Tags
  let tag = ""
  tag += 'Tags:<br><div class="modal-tags">'
  classes = el.className.split(" ")
  let software_tags = []
  let skill_tags = []
  for (var j = 0; j < classes.length; j++) {
    if (filter_tag_skill.includes(classes[j])) {
      skill_tags.push(classes[j])
    }
    if (filter_tag_software[classes[j]]) {
      software_tags.push(classes[j])
    }
  }
  for (var j = 0; j < software_tags.length; j++) {
    let kode = software_tags[j];
    tag += 
    '<div for="check_'+ kode +'" class="modal-border"><img class="modal-logo"'+ 
    'src="./assets/img/logo/'+filter_tag_software[kode]["logo"]+'.png" title="'+filter_tag_software[kode]["name"]+'"></div>'
  }
  for (var j = 0; j < skill_tags.length; j++) {
    let kode = skill_tags[j];
    tag += '<div for="check_'+ kode +'" class="modal-skill-tag">' + kode +'</div>'
  }
  tag += "</div>"
  modal_tags.innerHTML = tag


  // Change footer
  if (el.children[2]) {
    modal_footer.innerText = el.children[2].innerText;
  } else {
    modal_footer.innerText = "";
  }
  if(portfolio[kode]["project_link"]){
    modal_klik.innerText = "Click picture to view the project"
    modal_link.href = portfolio[kode]["project_link"]
  } else {
    modal_klik.innerText = ""
    modal_link.href = "#"
  }
}