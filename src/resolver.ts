
import {
    IRoute,
    IMethod,
    IOptions,
} from './types'
import Route from './route'

const Resolver = function Resolver(routes: Array<IRoute> = [ ], options: IOptions = { }): void {
    this.routes = [ ]

    for (let i in routes) {
        this.routes.push(new Route(routes[i]))
    }
}

Resolver.prototype.resolve =
    function resolve(path: string, method: IMethod = 'ALL'): string|boolean {
        for (let i in this.routes) {
            if (this.routes[i].isMatch(path, method)) {
                return this.routes[i].getTarget()
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
