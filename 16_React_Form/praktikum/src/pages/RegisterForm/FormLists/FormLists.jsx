import style from "./FormLists.module.css";

const FormLists = ({ values, handleChange, errors, handleSubmit, handleReset, fotoSuratKesungguhan }) => {
	return (
		<div className="pt-3 px-3">
			<form onSubmit={handleSubmit}>
				<div className="row mb-3">
					<div className="col">
						<div className="form-floating">
							<input
								type="text"
								className="form-control rounded-3"
								id="nama"
								name="nama"
								placeholder="E.g. budi"
								value={values.nama}
								onChange={handleChange}
								required
							/>
							{errors.nama && <span className="text-danger">{errors.nama}</span>}
							<label className={`form-label ${style.labelNama}`}>Nama Lengkap</label>
						</div>
					</div>
					<div className="col">
						<div className="form-floating">
							<input
								type="email"
								className="form-control rounded-3"
								id="email"
								name="email"
								placeholder="email@gmail.com"
								value={values.email}
								onChange={handleChange}
								required
							/>
							{errors.email && <span className="text-danger">{errors.email}</span>}
							<label className={`form-label ${style.labelEmail}`}>Email</label>
						</div>
					</div>
				</div>
				<div className="form-floating col-12 mb-3">
					<input
						type="text"
						className="form-control rounded-3"
						id="noHandphone"
						name="noHandphone"
						placeholder="081xxxxxxxxx"
						value={values.noHandphone}
						onChange={handleChange}
						required
					/>
					{errors.noHandphone && <span className="text-danger">{errors.noHandphone}</span>}
					<label className={`form-label ${style.labelNoHandphone}`}>No. Handphone</label>
				</div>
				<div className="col-12 mb-3">
					<label className={`form-label ${style.labelPendidikan}`}>Latar Belakang Pendidikan</label>
					<div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="pendidikan"
								value="IT"
								checked={values.pendidikan === "IT"}
								onChange={handleChange}
								required
							/>
							<label className="form-check-label">IT</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="pendidikan"
								value="Non IT"
								checked={values.pendidikan === "Non IT"}
								onChange={handleChange}
								required
							/>
							<label className="form-check-label">Non IT</label>
						</div>
					</div>
				</div>
				<div className="col-12 mb-3">
					<label className={`form-label ${style.labelKelas}`}>Kelas Coding yang Dipilih</label>
					<select className="form-select rounded-3" name="kelas" value={values.kelas || ""} onChange={handleChange} required>
						<option>Pilih kelas coding...</option>
						<option value="Coding Backend with Golang">Coding Backend with Golang</option>
						<option value="Coding Frontend with ReactJS">Coding Frontend with ReactJS</option>
						<option value="Fullstack Developer">Fullstack Developer</option>
					</select>
				</div>
				<div className="col-12 mb-3">
					<label className={`form-label ${style.labelSurat}`}>Foto Surat Kesungguhan</label>
					<input className="form-control form-control-sm" type="file" name="surat" ref={fotoSuratKesungguhan} required />
				</div>
				<div className="form-floating col-12 mb-3">
					<textarea
						className="form-control"
						id="harapan"
						name="harapan"
						placeholder="Masukkan harapan"
						value={values.harapan}
						onChange={handleChange}
						style={{ height: "100px" }}></textarea>
					<label className={`form-label ${style.labelHarapan}`}>Harapan Untuk Coding Bootcamp</label>
				</div>
				<div className="row mb-3 d-flex justify-content-between">
					<div className="col-auto">
						<button type="submit" className="btn btn-primary px-4">
							Submit
						</button>
					</div>
					<div className="col-auto">
						<button
							type="reset"
							className="btn btn-danger px-4"
							onClick={() => {
								if (window.confirm("Apakah Anda ingin mereset form ini?")) handleReset();
							}}>
							Reset
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default FormLists;
