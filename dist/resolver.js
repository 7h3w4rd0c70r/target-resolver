"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_1 = require("./route");
const Resolver = function Resolver(routes = [], options = {}) {
    this.routes = [];
    for (let i in routes) {
        this.routes.push(new route_1.default(routes[i]));
    }
};
Resolver.prototype.resolve =
    function resolve(path, method = 'ALL') {
        for (let i in this.routes) {
            if (this.routes[i].isMatch(path, method)) {
                return this.routes[i].getTarget();
            }
        }
        return false;
    };
Resolver.prototype.addRoute =
    function addRoute(route) {
        this.routes.push(new route_1.default(route));
    };
exports.default = Resolver;
//# sourceMappingURL=resolver.js.map