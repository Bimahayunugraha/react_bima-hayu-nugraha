/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import axios from "axios";
import { render, screen, act, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search.jsx";

jest.mock("axios");

describe("Search", () => {
	test("success to fetch and display stories from an API", async () => {
		render(<Search />);
		const stories = [
			{ objectID: "1", title: "Hello" },
			{ objectID: "2", title: "React" },
		];

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

		await act(async () => {
			await userEvent.click(screen.getByRole("button"));
		});

		const items = await screen.findAllByRole("listitem");

		expect(items).toHaveLength(2);
	});

	test("fails to fetch and display stories from an API", async () => {
		render(<Search />);

		axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

		await act(async () => {
			await userEvent.click(screen.getByRole("button"));
		});

		const items = await screen.findByText("Ada yang error ...");

		expect(items).toBeInTheDocument();
	});

	test("input to search stories from API", async () => {
		render(<Search />);

		axios.get.mockImplementationOnce(() => Promise.resolve({ data: { value: "" } }));

		await act(async () => {
			await fireEvent.input(screen.getByRole("textbox"), { target: { value: "Stephen Hawking has died" } });
		});

		const items = await screen.findByPlaceholderText(/Tulis Cerita/);

		expect(items).toHaveValue("Stephen Hawking has died");
	});
});
