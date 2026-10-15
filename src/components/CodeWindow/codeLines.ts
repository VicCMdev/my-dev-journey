export type Token = { cls?: string; text: string };
export type CodeLine = { cls?: string; tokens: Token[] };

const COMMENT = [
  "Turning ideas into real, impactful digital products.",
  "Always learning. Always shipping.",
];

const DEVELOPER = {
  name: "Victor Ceja",
  role: "Associate Software Engineer",
  stack: ["JavaScript", "TypeScript", "React", "Node.js", "Express"],
};

// Columns assumed for the server render, before the client measures the real width.
export const DEFAULT_COLUMNS = 48;

/** Greedy word wrap; words longer than `width` are split. */
function wrap(text: string, width: number): string[] {
  const lines: string[] = [];
  let current = "";
  for (let word of text.split(/\s+/)) {
    while (word.length > width) {
      if (current) lines.push(current), (current = "");
      lines.push(word.slice(0, width));
      word = word.slice(width);
    }
    if (!current) current = word;
    else if (current.length + 1 + word.length <= width) current += " " + word;
    else lines.push(current), (current = word);
  }
  if (current) lines.push(current);
  return lines;
}

const pun = (text: string): Token => ({ cls: "pun", text });
const str = (text: string): Token => ({ cls: "str", text: JSON.stringify(text) });
const prop = (text: string): Token => ({ cls: "prop", text });

/** Builds the code lines so that every line fits in `columns` characters. */
export function buildLines(columns: number): CodeLine[] {
  const cols = Math.max(columns, 16);
  const lines: CodeLine[] = [{ cls: "cmt", tokens: [{ text: "/**" }] }];

  COMMENT.forEach((paragraph, i) => {
    if (i > 0) lines.push({ cls: "cmt blank", tokens: [{ text: " *" }] });
    for (const row of wrap(paragraph, cols - 3)) {
      lines.push({ cls: "cmt", tokens: [{ text: ` * ${row}` }] });
    }
  });
  lines.push({ cls: "cmt", tokens: [{ text: " */" }] });

  lines.push({
    tokens: [{ cls: "kw", text: "export const " }, prop("developer"), pun(" = {")],
  });
  lines.push({ tokens: [prop("  name"), pun(": "), str(DEVELOPER.name), pun(",")] });
  lines.push({ tokens: [prop("  role"), pun(": "), str(DEVELOPER.role), pun(",")] });

  // Keep the stack array on one line if it fits, otherwise one item per line.
  const inlineStack = `  stack: [${DEVELOPER.stack.map((s) => JSON.stringify(s)).join(", ")}],`;
  if (inlineStack.length <= cols) {
    const items: Token[] = DEVELOPER.stack.flatMap((s, i) =>
      i === 0 ? [str(s)] : [pun(", "), str(s)],
    );
    lines.push({ tokens: [prop("  stack"), pun(": ["), ...items, pun("],")] });
  } else {
    lines.push({ tokens: [prop("  stack"), pun(": [")] });
    for (const s of DEVELOPER.stack) {
      lines.push({ tokens: [{ text: "    " }, str(s), pun(",")] });
    }
    lines.push({ tokens: [pun("  ],")] });
  }
  lines.push({ tokens: [pun("};")] });

  return lines;
}
