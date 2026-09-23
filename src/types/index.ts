export interface movieProps {
    id: number,
    poster_path: string,
    title: string,
    genre?: number[],
    overview: string
}

export interface movieCardProps {
    title: string,
    cardLink?: string,
    cardLinkText?: string,
    cardData: movieProps[]
}