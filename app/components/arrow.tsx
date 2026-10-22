type Direction = "up-right" | "right" | "down" | "left" | "up";
const rotation: Record<Direction, number> = { "up-right": -45, right: 0, down: 90, left: 180, up: -90 };

export function Arrow({ direction = "up-right" }: { direction?: Direction }) {
  return <svg className="link-arrow" data-direction={direction} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
    <g transform={`rotate(${rotation[direction]} 12 12)`}><path d="M5 12h14m-6-6 6 6-6 6" /></g>
  </svg>;
}
