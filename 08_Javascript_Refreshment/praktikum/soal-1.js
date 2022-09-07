let a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
let lengkapArr = [a, b, nama, terdaftar];
let index2 = lengkapArr[2];

function perkenalan() {
	let asal = "Indonesia";
	return console.log(
		"perkenalkan nama saya " + 
		nama + 
		" nomor urut " + 
		a + 
		" sekarang sedang mengikuti " + 
		b + 
		"berasal dari " + 
		asal
	);
}

if (terdaftar === true) {
	console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}

a = b;
// nama = b; // Melakukan komen pada code ini agar tidak terjadi error saat program dijalankan

console.log("array = " + index2);
console.log("a adalah = " + a);
console.log("b adalah = " + b);
perkenalan();
