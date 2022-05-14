const hambutton = document.querySelector(".hambutton");
      const sidebar = document.querySelector("div.container");
      const closebutton = document.querySelector(".closebutton");
      hambutton.addEventListener("click", function () {
        sidebar.classList.toggle("show-sidebar");
        sidebar.classList.toggle("hide-sidebar");
      });
      closebutton.addEventListener("click", function () {
        sidebar.classList.add("hide-sidebar");
        sidebar.classList.remove("show-sidebar");
      });