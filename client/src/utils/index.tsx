export function formToObject<T extends object = {}>(data: HTMLFormElement): T {
    const d = new FormData(data);
    const r = Object.fromEntries(d.entries());
    return r as T;
}