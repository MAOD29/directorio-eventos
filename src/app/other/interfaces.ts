export interface Response {
    message: string,
    data: DataResponse 
}

export interface Spot {
    id:number,
    name: string,
    slug: string,
    description: string,
    image: string,
    location: string

}
export interface Event {
    id:number,
    title: string,
    slug: string,
    descripcion: string,
    location: string,
    image: string,
    date: Date,
    start: Date,
    finish: Date,
    web_site: string
}
export interface Business{
    id: number,
    name: string,
    slug: string,
    descripcion: string,
    image: string,
    location: string,
    contac: string,
    start: Date,
    finish: Date,
    red_social: string,

}
export interface DataResponse{
    current_page: number
    data: any[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: number
    to: number
    total: number
}