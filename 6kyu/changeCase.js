function changeCase(identifier, targetCase) {
  // Validate input types
  if (typeof identifier !== "string" || typeof targetCase !== "string")
    return undefined;
  if (!identifier) return ""; // empty string returns ""

  const validCases = ["snake", "camel", "kebab"];
  if (!validCases.includes(targetCase)) return undefined;

  // Check for invalid characters (only letters, underscores, and hyphens allowed)
  if (!/^[a-zA-Z_-]*$/.test(identifier)) return undefined;

  // Check for mixed separators (cannot have both underscores and hyphens)
  if (identifier.includes("_") && identifier.includes("-")) return undefined;

  // Check for mixed naming conventions:
  // - If it contains separators (_ or -), it shouldn't have uppercase letters (except possibly first char)
  // - If it's camelCase, it shouldn't have separators
  const hasSeparators = /[-_]/.test(identifier);
  const hasUppercase = /[A-Z]/.test(identifier);

  if (hasSeparators && hasUppercase) {
    // Allow uppercase only if it's the first character (like "CamelCase" input)
    const withoutFirstChar = identifier.slice(1);
    if (
      withoutFirstChar.includes("_") ||
      withoutFirstChar.includes("-") ||
      /[A-Z]/.test(withoutFirstChar)
    ) {
      return undefined;
    }
  }

  let newStr = "";

  switch (targetCase) {
    case "snake":
      newStr = identifier
        .replace(/([A-Z])/g, "_$1")
        .replace(/-/g, "_")
        .toLowerCase();
      break;

    case "camel":
      newStr = identifier.replace(/[-_]([a-z])/g, (_, char) =>
        char.toUpperCase()
      );
      break;

    case "kebab":
      newStr = identifier
        .replace(/([A-Z])/g, "-$1")
        .replace(/_/g, "-")
        .toLowerCase();
      break;
  }

  return newStr;
}
console.log(changeCase("snakeCamel_case", "snake")); // undefined (mixed conventions)
console.log(changeCase("snake_case", "camel")); // "snakeCase"
console.log(changeCase("camelCase", "snake")); // "camel_case" 
console.log(changeCase("kebab-case", "camel")); // "kebabCase"
console.log(changeCase("mixed-case_bad", "camel")); // undefined (mixed separators)
console.log(changeCase("Valid", "kebab")); // "valid" (single word with capital)