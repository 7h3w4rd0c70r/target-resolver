
import {
    IRoute,
    IMethod,
} from './types'

const Route = function Route(route: IRoute): void {
    this.route = route.route
    this.target = route.target
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

Route.prototype.getTarget =
    function getTarget(): string {
        return this.target
    }

export default Route
