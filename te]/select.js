function changeStylesheet() {
  var selectElement = document.getElementById("mySelect");
  var stylesheetLink = document.getElementById("stylesheet");

  if (selectElement.value === "black backround white text") {
      stylesheetLink.href = "1.css";
  } else if (selectElement.value === "green backround red text") {
      stylesheetLink.href = "2.css";
  } else if (selectElement.value === "blue backround yellow text") {
      stylesheetLink.href = "3.css";
   } else if (selectElement.value === "black backround red text") {
        stylesheetLink.href = "4.css";
      } else if (selectElement.value === "normal") {
        stylesheetLink.href = "0.css";
      } else if (selectElement.value === "black backround white text & large font") {
        stylesheetLink.href = "5.css";
      }



      
  }
  document.addEventListener("keydown", function(event) {
    if (event.key === "s" || event.key === "S") {
      const settingsMenu = document.getElementById("settings-menu");
      settingsMenu.style.display = "block";
    }
  });
  document.addEventListener("keydown", function(event) {
    if (event.key === "h" || event.key === "H") {
      const settingsMenu = document.getElementById("settings-menu");
      settingsMenu.style.display = "none";
      alert("settings menu hidden press s to unhide")
        }
  });