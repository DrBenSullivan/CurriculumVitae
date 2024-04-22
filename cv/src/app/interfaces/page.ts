export interface Page {
    id: number,
    route: string,
    link: string,
    head: string,
    body: string[],
    status?: string[],
}
