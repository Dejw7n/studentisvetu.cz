/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

const customColors = {
	primary: "#0290fe",
	primary_dark: "#2779bd",
};

module.exports = {
	content: ["./src/**/*.{html,ts}"],
	theme: {
		extend: {
			colors: {
				primary: customColors["primary"],
			},
		},
	},
	plugins: [
		plugin(function ({ addComponents }) {
			addComponents({
				".container": {
					marginLeft: "auto",
					marginRight: "auto",
					padding: "0 1rem",
				},
				".btn": {
					width: "fit-content",
					height: "fit-content",
					padding: "0.7rem 1.7rem",
					borderRadius: ".25rem",
					cursor: "pointer",
					"text-align": "center",
					fontSize: "18px",
					fontWeight: "600",
					lineHeight: "21.04px",
				},
				".btn-primary": {
					backgroundColor: customColors["primary"],
					borderColor: customColors["primary"],
					borderWidth: "2px",
					color: "#fff",
					"&:hover": {
						backgroundColor: customColors["primary_dark"],
						borderColor: customColors["primary_dark"],
					},
				},
				".btn-black": {
					backgroundColor: "#000",
					borderColor: "#000",
					borderWidth: "2px",
					color: "#fff",
					"&:hover": {
						backgroundColor: "#fff",
						color: "#000",
					},
				},
				".btn-empty-black": {
					backgroundColor: "#fff",
					borderColor: "#B7B7B7",
					borderWidth: "2px",
					color: "#000",
					"&:hover": {
						borderColor: customColors["primary"],
					},
				},
			});
		}),
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
	],
};
