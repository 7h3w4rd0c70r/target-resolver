export declare type IMethod = 'ALL' | 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTIONS' | 'HEAD' | 'PATCH';
export declare type IRoute = {
    route: string;
    target: string;
    method?: IMethod;
};
export declare type IOptions = {};
