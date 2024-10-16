function showhide() {
  const divElement = document.getElementById("hiddenDiv");
  const divElementStyle = window.getComputedStyle(divElement).display;

  console.log("초기의 스타일 값: " + divElementStyle);
  if (divElementStyle === "none") {
    divElement.style.display = "block";
  } else {
    divElement.style.display = "none";
  }
}
