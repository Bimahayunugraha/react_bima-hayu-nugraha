import { useRef, useState } from "react";

import FormInfo from "./components/FormInfo";
import FormLists from "./FormLists/FormLists";

const Form = () => {
	const baseValue = {
		nama: "",
		email: "",
		noHandphone: "",
		pendidikan: "",
		kelas: "",
		surat: "",
		harapan: "",
	};

	const baseErrors = {
		name: "",
		email: "",
		noHandphone: "",
	};

	const [values, setValues] = useState(baseValue);
	const [errors, setErrors] = useState(baseErrors);
	const fotoSuratKesungguhan = useRef(null);

	// Regex Validasi
	const regexNameValidation = /^[a-zA-Z\s]*$/;
	const regexEmailValidation =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const regexPhoneValidation = /^[0-9]*$/g;

	const handleChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setValues({
			...values,
			[name]: value,
		});

		validation(name, value);
	};

	const validation = (name, value) => {
		// Validasi nama
		if (name === "nama") {
			if (!regexNameValidation.test(value)) {
				setErrors({ ...errors, nama: "Nama lengkap harus berupa huruf" });
			} else {
				setErrors({ ...errors, nama: "" });
			}
		}

		// Validasi email
		if (name === "email") {
			if (!regexEmailValidation.test(value)) {
				setErrors({ ...errors, email: "Email tidak sesuai" });
			} else {
				setErrors({ ...errors, email: "" });
			}
		}

		// Validasi NoHandphone
		if (name === "noHandphone") {
			if (!regexPhoneValidation.test(value)) {
				setErrors({ ...errors, noHandphone: "No handphone harus berupa angka" });
			} else if (value.length < 9) {
				setErrors({ ...errors, noHandphone: "No handphone harus lebih dari 9 karakter" });
			} else if (value.length > 14) {
				setErrors({ ...errors, noHandphone: "No handphone harus kurang dari 14 karakter" });
			} else {
				setErrors({ ...errors, noHandphone: "" });
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (errors.nama !== "" || errors.email !== "" || errors.noHandphone !== "") {
			alert("Data pendaftar tidak sesuai");
		} else {
			alert(`Data pendaftar "${values.nama}" berhasil diterima`);
			setValues(baseValue);
			fotoSuratKesungguhan.current.value = "";
		}
	};

	const handleReset = () => {
		setValues(baseValue);
		setErrors(baseErrors);
	};

	return (
		<div className="container pt-5 pb-3">
			<div className="shadow rounded">
				<div className="row">
					<div className="col-md-3">
						<FormInfo />
					</div>
					<div className="col-md-9">
						<FormLists
							handleChange={handleChange}
							values={values}
							errors={errors}
							fotoSuratKesungguhan={fotoSuratKesungguhan}
							handleSubmit={handleSubmit}
							handleReset={handleReset}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Form;
