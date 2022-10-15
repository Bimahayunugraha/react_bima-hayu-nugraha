import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import NameForm from "./FormCoding";
import userEvent from "@testing-library/user-event";

describe("NameForm", () => {
	test("render NameForm components", () => {
		render(<NameForm />);

		expect(screen.getByText("Pendaftaran Peserta Coding Bootcamp")).toBeInTheDocument();
		expect(screen.getByLabelText(/Nama Lengkap:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Email:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/No Handphone:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Foto Surat Kesungguhan:/)).toBeInTheDocument();
		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toBeInTheDocument();
	});

	test("input all data to check the value", () => {
		render(<NameForm />);

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budi@gmail.com" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901901901" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "reactjs");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File(["hello"], "hello.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "Dapat menjadi yang terdepan" } });

		// Expected result
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Sutanto");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("budi@gmail.com");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081901901901");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);
		userEvent.upload(fileInput, testImageFile);
		// When the file has been input it is worth 1
		expect(fileInput.files.length).toBe(1);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Dapat menjadi yang terdepan");
	});

	test("input for pengarang with number", () => {
		render(<NameForm />);

		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto10000" } });

		// Expected result when click the submit button
		expect(screen.getByText("Nama Lengkap Harus Berupa Huruf")).toBeInTheDocument();
	});

	test("input for email with invalid format email", () => {
		render(<NameForm />);

		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budigmcom" } });

		// Expected result when click the submit button
		expect(screen.getByText("Email Tidak Sesuai")).toBeInTheDocument();
	});

	test("input for number with length less than 9 more than 14 characters", () => {
		render(<NameForm />);

		// If Input Number less than 9 characters
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901" } });

		// If Input Number more than 14 characters
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901901901901901" } });

		// Expected result when click the submit button
		expect(screen.getByText("No Handphone Tidak Sesuai")).toBeInTheDocument();
	});

	test("when click submit button if there is empty data", () => {
		render(<NameForm />);

		// Test for alert if data empty then not called
		const alertMock = jest.spyOn(window, "alert").mockImplementation();

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File([""], "", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "" } });

		// Expected results when click the submit button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");

		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		// Expected results after click the submit button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toBeRequired();
		expect(screen.getByLabelText(/Email:/)).toBeRequired();
		expect(screen.getByLabelText(/No Handphone:/)).toBeRequired();
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeRequired();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toBeRequired();
		expect(fileInput).toBeRequired(testImageFile);
		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).not.toBeRequired();

		expect(alertMock).not.toBe();
	});

	test("when click submit button if data was inputted is invalid", () => {
		render(<NameForm />);

		// Test for alert if data invalid
		const alertMock = jest.spyOn(window, "alert").mockImplementation();

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto10" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budigmcom" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/Non IT/), { target: { value: "Non IT" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "reactjs");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File(["hello"], "hello.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "Dapat menjadi yang terdepan" } });

		// Test error message
		const errorMessage = screen.getAllByRole("listitem");

		// Expected results when click the submit button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Sutanto10");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("budigmcom");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081901");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);
		userEvent.upload(fileInput, testImageFile);
		// When the file has been input it is worth 1
		expect(fileInput.files.length).toBe(1);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Dapat menjadi yang terdepan");
		expect(errorMessage.length).toBe(3);

		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		// Expected results after click the submit button
		expect(alertMock).toHaveBeenCalledTimes(1);
	});

	test("when click submit button if data was inputted is valid", () => {
		render(<NameForm />);

		// Test for alert if data valid
		const alertMock = jest.spyOn(window, "alert").mockImplementation();

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budi@gmail.com" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901901901" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "reactjs");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File(["hello"], "hello.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "Dapat menjadi yang terdepan" } });

		/// Expected results when click the submit button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Sutanto");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("budi@gmail.com");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081901901901");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true);
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);
		userEvent.upload(fileInput, testImageFile);
		// When the file has been input it is worth 1
		expect(fileInput.files.length).toBe(1);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Dapat menjadi yang terdepan");

		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		/// Expected results after click the submit button
		expect(alertMock).toHaveBeenCalledTimes(1);

		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
		expect(fileInput.value).toBe("");
		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
	});

	test("when click submit button if data was inputted is valid and not input text for harapan", () => {
		render(<NameForm />);

		// Test for alert if data valid
		const alertMock = jest.spyOn(window, "alert").mockImplementation();

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budi@gmail.com" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901901901" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "reactjs");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File(["hello"], "hello.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "" } });

		// Expected results when click the submit button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Sutanto");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("budi@gmail.com");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081901901901");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true);
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);
		userEvent.upload(fileInput, testImageFile);
		// When the file has been input it is worth 1
		expect(fileInput.files.length).toBe(1);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");

		fireEvent.click(screen.getByRole("button", { name: /submit/i }));

		// Expected results after click the submit button
		expect(alertMock).toHaveBeenCalledTimes(1);

		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
		expect(fileInput.value).toBe("");
		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
	});

	test("reset button to reset value in the form to empty value", () => {
		render(<NameForm />);

		// Test Input Nama
		fireEvent.input(screen.getByRole("textbox", { name: /nama/i }), { target: { value: "Budi Sutanto10" } });

		// Test Input Email
		fireEvent.input(screen.getByRole("textbox", { name: /email/i }), { target: { value: "budigmacom" } });

		// Test Input No Handphone
		fireEvent.input(screen.getByRole("spinbutton", { name: /no handphone/i }), { target: { value: "081901" } });

		// Test Input Latar Belakang Pendidikan
		fireEvent.change(screen.getByRole("radio", { name: /pendidikan/i }));
		fireEvent.click(screen.getByLabelText(/IT/), { target: { value: "IT" } });

		// Test Kelas Coding yang Dipilih
		const selectedItem = screen.getByRole("combobox", { name: /kelas/i });
		userEvent.selectOptions(selectedItem, "reactjs");

		// Test Input Foto Surat Kesungguhan
		const testImageFile = new File(["hello"], "hello.pdf", { name: /surat kesungguhan/i }, { type: "image/*,.pdf" });
		const fileInput = screen.getByLabelText(/Foto Surat Kesungguhan:/);

		// Test Input Harapan
		fireEvent.input(screen.getByRole("textbox", { name: /harapan/i }), { target: { value: "Dapat menjadi yang terdepan" } });

		// Test error message
		const errorMessage = screen.getAllByRole("listitem");

		// Expected results when click the reset button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("Budi Sutanto10");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("budigmacom");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("081901");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).toBeChecked(true);
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("reactjs");

		// When the file has not been input
		expect(fileInput.files.length).toBe(0);
		userEvent.upload(fileInput, testImageFile);
		// When the file has been input it is worth 1
		expect(fileInput.files.length).toBe(1);

		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("Dapat menjadi yang terdepan");
		expect(errorMessage.length).toBe(3);

		fireEvent.click(screen.getByRole("button", { name: /reset/i }));

		// Expected results after click the reset button
		expect(screen.getByLabelText(/Nama Lengkap:/)).toHaveValue("");
		expect(screen.getByLabelText(/Email:/)).toHaveValue("");
		expect(screen.getByLabelText(/No Handphone:/)).toHaveDisplayValue("");
		expect(screen.getByLabelText(/Latar Belakang Pendidikan:/)).not.toBeChecked();
		expect(screen.getByLabelText(/Kelas Coding yang Dipilih:/)).toHaveValue("");
		userEvent.upload(fileInput, testImageFile);
		expect(fileInput.value).toBe("");
		expect(screen.getByLabelText(/Harapan Untuk Coding Bootcamp Ini:/)).toHaveValue("");
		expect(errorMessage.length).not.toBe();
	});
});
