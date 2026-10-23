// Lightweight highlighting for the curated TypeScript excerpts. React escapes text.
export function CodeExcerpt({ code }: { code: string }) {
  const tokens = code.split(/(\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:export|function|const|let|if|else|return|for|of|true|false|null|number|boolean|void)\b|\b\d+(?:\.\d+)?\b)/g);
  return <pre><code>{tokens.map((token, index) => {
    const kind = token.startsWith("//") ? "comment" : /^["']/.test(token) ? "string" : /^\d/.test(token) ? "number" : /^(export|function|const|let|if|else|return|for|of|true|false|null|number|boolean|void)$/.test(token) ? "keyword" : undefined;
    return kind ? <span key={index} className={`code-${kind}`}>{token}</span> : token;
  })}</code></pre>;
}
