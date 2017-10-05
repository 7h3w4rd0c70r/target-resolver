
import {
    Route as IRoute,
    Method as IMethod,
} from './types'

const Route = function Route(route: IRoute): void {
    this.route = route.route
    this.target = route.target
    this.secured = route.secured
    this.method = route.method || 'ALL'
}

Route.prototype.isMatch =
    function isMatch(path: string, method: IMethod = 'ALL'): boolean {
        const routeParts: Array<string> = this.route.split('/')
        const pathParts: Array<string> = path.split('/')

        let isMatch: boolean = false

        if (this.method !== 'ALL' && this.method !== method) {
            return isMatch
        }

        for (let index = 0; index < Math.max(routeParts.length, pathParts.length); index++) {
            if (routeParts[index] === '*') {
                isMatch = true
                break
            } else if (routeParts[index] && routeParts[index][0] === ':' && pathParts[index]) {
                isMatch = true
            } else if (routeParts[index] === pathParts[index]) {
                isMatch = true
            } else {
                isMatch = false
                break
            }
        }

        return isMatch
    }

Route.prototype.resolveParams =
    function resolveParams(path: string): object {
        const routeParts: Array<string> = this.route.split('/')
        const pathParts: Array<string> = path.split('/')
        const params: object = { }

        for (let index = 0; index < Math.max(routeParts.length, pathParts.length); index++) {
            if (routeParts[index] && routeParts[index][0] === ':' && pathParts[index]) {
                params[routeParts[index].substr(1)] = pathParts[index]
            }
        }

        return params
    }

Route.prototype.getRoute =
    function getRoute(): string {
        return this.route
    }

Route.prototype.getTarget =
    function getTarget(): string {
        return this.target
    }

Route.prototype.getMethod =
    function getMethod(): string {
        return this.method
    }

Route.prototype.isSecure =
    function isSecure(): boolean {
        return this.secured
    }

export default Route
