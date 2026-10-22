import { Arrow } from "./arrow";

const profileUrl = "https://www.codewars.com/users/jlsomnifero";

async function getStats(): Promise<{ rank: string; completed: number } | null> {
  try {
    const response = await fetch("https://www.codewars.com/api/v1/users/jlsomnifero", {
      next: { revalidate: 86400 },
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return null;
    const data = await response.json();
    const rank = data.ranks?.overall?.name;
    const completed = data.codeChallenges?.totalCompleted;
    if (typeof rank !== "string" || !Number.isInteger(completed) || completed < 0) return null;
    return { rank, completed };
  } catch {
    return null;
  }
}

export async function CodewarsProfile() {
  const stats = await getStats();
  return <a className="codewars-profile" href={profileUrl} target="_blank" rel="noreferrer">
    Codewars{stats && <> · {stats.rank} · {stats.completed} kata completed</>} <Arrow />
  </a>;
}
