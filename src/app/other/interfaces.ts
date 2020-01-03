export interface SpotResponse {
    message: string,
    data: DataResponse 
}

export interface Spot {
    name: string,
    slug: string,
    description: string,
    image: string,
    location: string

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