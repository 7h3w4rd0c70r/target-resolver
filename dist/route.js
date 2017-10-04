"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Route = function Route(route) {
    this.route = route.route;
    this.target = route.target;
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
Route.prototype.getTarget =
    function getTarget() {
        return this.target;
    };
exports.default = Route;
//# sourceMappingURL=route.js.map