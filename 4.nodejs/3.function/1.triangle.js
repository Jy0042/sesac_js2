let n = 5;

function triangle(n) {
  let stars = "";
  for (let i = 1; i <= n; i++) {
    stars += "*";
    console.log(stars);
  }
}
// triangle(n);

function triangle2(n) {
  for (let i = n; i > 0; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}

// triangle2(n);
function triangle3(n) {
  let stars = "";
  for (let i = n; i > 0; i--) {
    let blank = "";
    for (let j = 1; j <= i; j++) {
      blank += "1";
    }
    stars += "*";
    console.log(blank + stars);
  }
}
// triangle3(n);

function triangle4(n) {
  let blank = "";
  for (let i = n; i > 0; i--) {
    let stars = "";
    blank += " ";
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    console.log(blank + stars);
  }
}
// triangle4(n);

function triangle5(n) {
  for (let i = 1; i <= n; i++) {
    let blank = "";
    let stars = "";

    for (let j = 0; j < n - i; j++) {
      blank += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }

    console.log(blank + stars);
  }
}
// triangle5(n);

function triangle6(n) {
  for (let i = n; i > 0; i--) {
    blank = "";
    stars = "";

    for (let j = 0; j < n - i; j++) {
      blank += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }

    console.log(blank + stars);
  }
}
// triangle6(n);
let a = 23;

function heart(a) {
  for (let i = 1; i <= a; i++) {
    let stars = "";
    let blank = "";
    let blank2 = "";

    for (let j = 0; j < a - i + 1; j++) {
      blank += " ";
    }

    for (let j = 0; j < a - i; j++) {
      blank2 += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }

    console.log(blank + stars + blank + blank2 + stars + blank);
  }

  for (let i = a + 1; i > 0; i--) {
    let stars = "";
    let blank = "";

    for (let j = 0; j < 2 * (a - i) + 2; j++) {
      blank += " ";
    }

    for (let k = 0; k < 4 * i - 3; k++) {
      stars += "*";
    }

    console.log(blank + stars);
  }
}
heart(a);

function heart2(a) {
  for (let i = 1; i <= a; i++) {
    let stars = "";
    let blank = "";
    let blank2 = "";

    for (let j = 0; j < a - i + 1; j++) {
      blank += " ";
    }

    for (let j = 0; j < a - i; j++) {
      blank2 += " ";
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      stars += "*";
    }

    console.log(blank + stars + blank + blank2 + stars + blank);
  }

  for (let i = a + 1; i > 0; i--) {
    let stars = "";
    let blank = "";

    for (let j = 0; j < 2 * (a - i) + 2; j++) {
      blank += " ";
    }

    for (let k = 0; k < 4 * i - 3; k++) {
      stars += "*";
    }

    console.log(blank + stars);
  }
}
heart2(a);

//
//
//
// 강사님 풀이
function leftTriangle() {
  let rows = 5;
  let currentRow = 1;
  while (currentRow <= rows) {
    // 매줄 카운팅은 성공했고,
    // 매번 별의 갯수 늘린다.
    let starts = "";
    let startCount = 1;
    while (startCount <= currentRow) {
      starts += "*";
      startCount++;
    }
    console.log(starts);
    currentRow++;
  }
}

// leftTriangle();

function leftInvertTriangle() {
  let rows = 5;
  let currentRow = 1;
  while (currentRow <= rows) {
    // 매줄 카운팅은 성공했고,
    // 매번 별의 갯수 늘린다.
    let starts = "";
    let startCount = 5;
    while (currentRow <= startCount) {
      starts += "*";
      startCount--;
    }
    console.log(starts);
    currentRow++;
  }
}

// leftInvertTriangle();
