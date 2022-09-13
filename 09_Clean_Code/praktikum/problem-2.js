class Kendaraan {
	totalRoda = 0;
	kecepatanPerJam = 0;

	// Menambahkan variabel 4 pada attribute total roda
	setTotalRoda() {
		this.totalRoda = 4;
	}
}

class Mobil extends Kendaraan {
	berjalan() {
		this.tambahKecepatan(10);
	}

	tambahKecepatan(kecepatanBaru) {
		return (this.kecepatanPerJam = this.kecepatanPerJam + kecepatanBaru);
	}
}

const mobilCepat = new Mobil();
mobilCepat.setTotalRoda();
mobilCepat.tambahKecepatan(20);
mobilCepat.berjalan();

const mobilLamban = new Mobil();
mobilLamban.setTotalRoda();
mobilLamban.berjalan();

console.log({ mobilCepat });
console.log({ mobilLamban });
