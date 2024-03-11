function removeIsActiveClass() {
  const gallery = document.querySelector(".gallery");
  for (const node of gallery.childNodes) {
    if (node?.classList?.contains("isActive")) {
      node.classList.remove("isActive");
    }
  }
}

function switchFrame(id, isNext) {
  const parsedId = +id;
  const frame = document.querySelector(`#frame${parsedId}`);
  frame.classList.remove("isActive");
  const nextFrame = document.querySelector(
    `#frame${parsedId + (isNext ? 1 : -1)}`
  );
  nextFrame.classList.add("isActive");
}

function addActiveClass(node) {
  if (!node?.classList?.contains("isActive")) {
    node.classList.add("isActive");
  }
}

document.querySelector("#frametrigger1").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame1"));
};

document.querySelector("#frametrigger2").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame2"));
};

document.querySelector("#frametrigger3").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame3"));
};

document.querySelector("#frametrigger4").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame4"));
};

document.querySelector("#frametrigger5").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame5"));
};

document.querySelector("#frametrigger6").onclick = function () {
  removeIsActiveClass();
  addActiveClass(document.querySelector("#frame6"));
};
