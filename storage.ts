const KEY = "sightings";

export function getSightings(): any[] {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveSighting(item: any) {
  const list = getSightings();
  list.unshift(item);
  localStorage.setItem(KEY, JSON.stringify(list));
}

export function clearSightings() {
  localStorage.removeItem(KEY);
}
