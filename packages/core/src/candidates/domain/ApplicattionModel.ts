export enum statusList{
    'Pending Review' = 0,
    'Accepted' = 1,
    'Rejected' = 2
}

export interface applicationProps{
    id: number,
    date: string,
    idEmployee: number,
    idJobOffer: number, 
    status: statusList
}