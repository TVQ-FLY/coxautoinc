function bigImg(id) {
  const ele = document.getElementById(id);
  console.log(ele);
  const elements = document.querySelectorAll(".one-img");
  const descrtion = document.querySelectorAll(".descrtion");
  descrtion.forEach((element) => {
    element.classList.remove("active");
  });
  elements.forEach((element) => {
    element.classList.remove("hover-custom");
  });

  ele.classList.add("hover-custom");
  const parent = ele.parentNode.parentNode;
  switch (id) {
    case "one-img":
      parent.querySelector(".descrtion-1").classList.add("active");
      break;
    case "two-img":
      parent.querySelector(".descrtion-2").classList.add("active");
      break;
    default:
      parent.querySelector(".descrtion-3").classList.add("active");
  }
}

bigImg("two-img");
