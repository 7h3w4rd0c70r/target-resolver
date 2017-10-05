
import {
    Options as IOptions,
    Route as IRoute,
    Method as IMethod,
    Match as IMatch,
} from './types'
import Route from './route'

const Resolver = function Resolver(routes: Array<IRoute> = [ ], options: IOptions = { }): void {
    this.routes = [ ]

    for (let i in routes) {
        this.routes.push(new Route(routes[i]))
    }
}

Resolver.prototype.resolve =
    function resolve(path: string, method: IMethod = 'ALL'): IMatch|boolean {
        for (let i in this.routes) {
            if (this.routes[i].isMatch(path, method)) {
                return {
                    route: this.routes[i].getRoute(),
                    method: this.routes[i].getMethod(),
                    target: this.routes[i].getTarget(),
                    secured: this.routes[i].isSecured(),
                    params: this.routes[i].resolveParams(path),
                    path: path,
                }
            }
        }

        return false
    }

Resolver.prototype.addRoute =
    function addRoute(route: IRoute) {
        this.routes.push(new Route(route))

        return this
    }

export default Resolver
