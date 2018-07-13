import * as path from "path";

export const rootDir = path.resolve(__dirname, "./");

export function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [rootDir].concat(args));
}
