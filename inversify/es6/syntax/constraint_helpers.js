"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeConstraint = exports.namedConstraint = exports.taggedConstraint = exports.traverseAncerstors = void 0;
const METADATA_KEY = __importStar(require("../constants/metadata_keys"));
const metadata_1 = require("../planning/metadata");
const traverseAncerstors = (request, constraint) => {
    const parent = request.parentRequest;
    if (parent !== null) {
        return constraint(parent) ? true : traverseAncerstors(parent, constraint);
    }
    else {
        return false;
    }
};
exports.traverseAncerstors = traverseAncerstors;
const taggedConstraint = (key) => (value) => {
    const constraint = (request) => request !== null && request.target !== null && request.target.matchesTag(key)(value);
    constraint.metaData = new metadata_1.Metadata(key, value);
    return constraint;
};
exports.taggedConstraint = taggedConstraint;
const namedConstraint = taggedConstraint(METADATA_KEY.NAMED_TAG);
exports.namedConstraint = namedConstraint;
const typeConstraint = (type) => (request) => {
    let binding = null;
    if (request !== null) {
        binding = request.bindings[0];
        if (typeof type === "string") {
            const serviceIdentifier = binding.serviceIdentifier;
            return serviceIdentifier === type;
        }
        else {
            const constructor = request.bindings[0].implementationType;
            return type === constructor;
        }
    }
    return false;
};
exports.typeConstraint = typeConstraint;
//# sourceMappingURL=constraint_helpers.js.map