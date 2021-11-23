function filter() {
        let search = document.getElementById("search").value.toLowerCase();
        let listInner = document.getElementsByClassName("listInner");

        for (let i = 0; i < listInner.length; i++) {
          names = listInner[i].getElementsByClassName("names");
          writer = listInner[i].getElementsByClassName("writer");
          if (names[0].innerHTML.toLowerCase().indexOf(search) != -1 ||
            writer[0].innerHTML.toLowerCase().indexOf(search) != -1
          ) {
            listInner[i].style.display = "flex"
          } else {
            listInner[i].style.display = "none"
          }
        }
      }
