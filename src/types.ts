
export type IMethod = 'ALL'|'GET'|'POST'|'PUT'|'DELETE'|'OPTIONS'|'HEAD'|'PATCH';

export type IRoute = {
    route: string;
    target: string;
    method?: IMethod;
}

export type IOptions = {
}
