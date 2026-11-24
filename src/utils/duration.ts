// "YYYY-MM" start → "9 meses" / "1 año 2 meses", counting the start month (like LinkedIn).
export const durationSince = (start: string, now = new Date()) => {
  const [year, month] = start.split("-").map(Number)
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + 1
  const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`
  const years = Math.floor(months / 12)
  const rest = months % 12
  if (years === 0) return plural(months, "mes", "meses")
  return rest ? `${plural(years, "año", "años")} ${plural(rest, "mes", "meses")}` : plural(years, "año", "años")
}
