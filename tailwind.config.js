// tailwind.config.js
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        textPrimary: "var(--text-primary)", // Text Colors
        textSecondary: "var(--text-secondary)",
        headingText: "var(--heading-text)",
        btnPrimaryBg: "var(--btn-primary-bg)", // Button Colors
        btnPrimaryHoverBg: "var(--btn-primary-hover-bg)",
        btnPrimaryText: "var(--btn-primary-text)",
        btnSecondaryBg: "var(--btn-secondary-bg)",
        btnSecondaryHoverBg: "var(--btn-secondary-hover-bg)",
        btnSecondaryText: "var(--btn-secondary-text)",
        linkColor: "var(--link-color)", // Link Colors
        linkHoverColor: "var(--link-hover-color)",
        dividerColor: "var(--divider-color)", // Divider and Border Colors
        inputBg: "var(--input-bg)", // Input Fields
        inputBorder: "var(--input-border)",
      },
      backgroundImage: {
        "gradient-primary":
          "linear-gradient(180deg, var(--primary-color), #f4f6fa)",
      },
      maxWidth: {
        md: "80%",
        sm: "87%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
