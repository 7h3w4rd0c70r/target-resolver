"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route = function Route(route) {
    this.route = route.route;
    this.target = route.target;
    this.secured = typeof route.secured === 'boolean' ? route.secured : true;
    this.method = route.method || 'ALL';
};
Route.prototype.isMatch =
    function isMatch(path, method = 'ALL') {
        const routeParts = this.route.split('/');
        const pathParts = path.split('/');
        let isMatch = false;
        if (this.method !== 'ALL' && this.method !== method) {
            return isMatch;
        }
        for (let index = 0; index < Math.max(routeParts.length, pathParts.length); index++) {
            if (routeParts[index] === '*') {
                isMatch = true;
                break;
            }
            else if (routeParts[index] && routeParts[index][0] === ':' && pathParts[index]) {
                isMatch = true;
            }
            else if (routeParts[index] === pathParts[index]) {
                isMatch = true;
            }
            else {
                isMatch = false;
                break;
            }
        }
        return isMatch;
    };
Route.prototype.resolveParams =
    function resolveParams(path) {
        const routeParts = this.route.split('/');
        const pathParts = path.split('/');
        const params = {};
        for (let index = 0; index < Math.max(routeParts.length, pathParts.length); index++) {
            if (routeParts[index] && routeParts[index][0] === ':' && pathParts[index]) {
                params[routeParts[index].substr(1)] = pathParts[index];
            }
        }
        return params;
    };
Route.prototype.getRoute =
    function getRoute() {
        return this.route;
    };
Route.prototype.getTarget =
    function getTarget() {
        return this.target;
    };
Route.prototype.getMethod =
    function getMethod() {
        return this.method;
    };
Route.prototype.isSecure =
    function isSecure() {
        return this.secured;
    };
exports.default = Route;
//# sourceMappingURL=route.js.map