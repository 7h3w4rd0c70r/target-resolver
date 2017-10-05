
export type Options = {
}

export type Method = 'ALL'|'GET'|'POST'|'PUT'|'DELETE'|'OPTIONS'|'HEAD'|'PATCH';

export type Route = {
    route: string;
    target: string;
    secured?: boolean;
    method?: Method;
}

export type Match = Route & {
    path: string;
    params: object;
}
