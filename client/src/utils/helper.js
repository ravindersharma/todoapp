// Format date in human style
export const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

// Truncate long text
export const truncate = (text, length = 80) =>
  text.length > length ? text.substring(0, length) + "..." : text;

// Pluralize string
export const pluralize = (count, noun) =>
  `${count} ${noun}${count !== 1 ? "s" : ""}`;

// Check empty string
export const isEmpty = (str) => !str || str.trim() === "";

// Safe delay (useful for loaders or UX)
export const wait = (ms = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));
