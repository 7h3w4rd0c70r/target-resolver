export declare type Options = {};
export declare type Method = 'ALL' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
export declare type Route = {
    route: string;
    target: string;
    secured?: boolean;
    method?: Method;
};
export declare type Match = Route & {
    path: string;
    params: object;
};
