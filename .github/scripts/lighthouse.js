/**
 * 
 * @param {{summary: Record<string, number>}[]} manifest 
 */
function main(manifest) {
  manifest.map((result) => {
    const summary = result.summary;
    const kv = Object.entries(summary).map(([key, value]) => {
      const score = value * 100;
      const emoji = score >= 90 ? "🟢" : score >= 50 ? "🟠" : "🔴";
      return { key: `${emoji} ${score}`};
    });
    // to markdown table
    const header = "|" + Object.keys(kv).join("|") + "|";
    const row = "|" + Object.values(kv).join("|") + "|";
    const output = header + "\n" +
      "|" + kv.map(() => "---").join("|") + "|" + "\n" +
      row;
    console.log(output);
  });
}
export default main;
