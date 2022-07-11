var elements = document.getElementsByClassName("collapsible");

for (let i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
}
