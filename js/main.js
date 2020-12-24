function showMenu() {
  // get link click element
  // add event click
  // a.classList.contains('showx')
  // get header element
  // toggle class show popup for header
  var element = document.getElementById('showpop')
  element.onclick = (evt) => {
    document.getElementsByClassName('bg-menu')[0].classList.toggle('active')
    document.getElementsByClassName('header')[0].classList.toggle("show--poppop");
    element.classList.toggle('showx')
    evt.stopPropagation()
  }
  /*document.body.onclick = (e) => {
    var isClickedSearch = document.getElementsByClassName('search')[0].classList.contains('show--search')
    // console.error('TARGET', e.target)
    if (isClickedSearch) {
      let target = e.target
      // temp1.closest('.search')
      //  kiem tra xem co dang click trong .search?
      if (target.closest('.search')) {
        // khong lam gi
      } else {
        document.getElementsByClassName('search')[0].classList.remove('show--search')
      }
    }
    var isClickedPop = element.classList.contains('showx')
    if (isClickedPop) {
      document.getElementsByClassName('header')[0].classList.remove("show--poppop");
      element.classList.remove('showx')
    }
  }*/
}

function showSearch() {
  var element = document.getElementsByClassName('submit')[0]
  element.onclick = (e) => {
    document.getElementsByClassName('search')[0].classList.toggle('show--search')
    e.stopPropagation()

  }
}

function hide() {
  document.body.onclick = (e) => {
    var isClickedSearch = document.getElementsByClassName('search')[0].classList.contains('show--search')
    /*
            console.error('TARGET', e.target)
    */
    if (isClickedSearch) {
      let target = e.target
      // temp1.closest('.search')
      // to do kiem tra xem co dang click trong .search?
      if (!target.closest('.search')) {
        //neu khong trong CLOSEST thi remove
        document.getElementsByClassName('search')[0].classList.remove('show--search')
      }
      // neu co trong CLOSEST thi ko lam gi
    }
    var isClickedPop = document.getElementsByClassName('header')[0].classList.contains('show--poppop')
    if (isClickedPop) {
      document.getElementsByClassName('header')[0].classList.remove("show--poppop");
      document.getElementById('showpop').classList.remove('showx')
      document.getElementsByClassName('bg-menu')[0].classList.remove('active')

    }
  }
}
window.onload = function () {
  showMenu();
  showSearch();
  hide();
}
