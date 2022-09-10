const lampuDanTombol = (N) => {
	let tombol = 0;
	for (let i = 1; i <= N; i++) {
		if (N % i == 0) {
			tombol++;
		}
	}

	const hasil = tombol == 2 ? `${N} = lampu mati` : `${N} = lampu menyala`;
	return console.log(hasil);
};

// Test Case 1
lampuDanTombol(5);
lampuDanTombol(4);

// Test Case 2
lampuDanTombol(1);
lampuDanTombol(5);

// Test Case 3
lampuDanTombol(1);
lampuDanTombol(2);
lampuDanTombol(4);
