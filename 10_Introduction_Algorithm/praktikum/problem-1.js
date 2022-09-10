const cekBilanganPrima = (n) => {
	let pembagi = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i == 0) {
			pembagi++;
		}
	}

	const hasil = pembagi == 2 ? `${n} = Bilangan Prima` : `${n} = Bukan Bilangan Prima`;
	return console.log(hasil);
};

// Test Cases
cekBilanganPrima(3);
cekBilanganPrima(7);
cekBilanganPrima(10);
