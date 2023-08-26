// Bài 1
document.querySelector("#soN").onclick = function () {
  var s = 0;
  var n = 0;
  while (s < 10000) {
    n++;
    s += n;
  }

  document.querySelector("#ketQua1").innerHTML =
    "Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: " + n;
  document.querySelector("#ketQua2").innerHTML =
    "Tổng các số từ 1 đến " + n + " là " + s.toLocaleString();
};

// Bài 2
document.querySelector("#tinh").onclick = function () {
  var x = +document.querySelector("#nhapX").value;
  var n = +document.querySelector("#nhapN").value;
  var sum = 0;
  if (x <= 0 || n <= 0) {
    document.querySelector("#ketQua3").innerHTML = "nhập x và n lớn hơn 0 nhé";
  } else {
    for (var i = 1; i <= n; i++) {
      sum += Math.pow(x, i);
    }
    document.querySelector("#ketQua3").innerHTML = "Tổng: " + sum;
  }
};

//Bài 3
document.getElementById("tinhGiaiThua").onclick = function () {
  var tong = 1;
  var n = document.getElementById("nhapNGiai").value;
  if (n <= 0) {
    document.getElementById("ketQua4").innerHTML = "Vui lòng nhập n > 0 ";
  } else {
    for (var i = 1; i <= n; i++) {
      tong *= i;
    }
    document.getElementById("ketQua4").innerHTML = "Kết quả: " + tong;
  }
};

// Bài 4
document.getElementById("in").onclick = function () {
  var soTheDiv = document.getElementById("nhapSoTheDiv").value;
  var hienThi = "";

  for (var i = 0; i < soTheDiv; i++) {
    if (i % 2 == 0) {
      hienThi += `<div style="background-color: blue; width: 50px; height: 50px"></div> <br>`;
    } else {
      hienThi += `<div style="background-color: red; width: 50px; height: 50px"></div> <br>`;
    }
  }
  document.getElementById("ketQua5").innerHTML = hienThi;
};

//Bài 5
function isPrime(n) {
  if (n == 1 || n == 0) {
    return false;
  }
  for (var i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

document.getElementById("inSoNguyenTo").onclick = function () {
  soN = +document.getElementById("nhapSoNguyen").value;
  var ketQua = "";
  for (var i = 1; i <= soN; i++) {
    if (isPrime(i)) {
      ketQua += i+" ";
    }
  }
  document.getElementById('ketQua6').innerHTML = "Kết quả: " + ketQua;
};
