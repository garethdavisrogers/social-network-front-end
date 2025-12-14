export type ApiResponse<T> = 
    | {ok: true, status: number, data: T}
    | {ok: false, status: number, data: string[]};