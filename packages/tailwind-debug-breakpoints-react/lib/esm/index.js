var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import * as React from "react";
import styled from "styled-components";
import { normalizeScreens } from "tailwindcss/src/util/normalizeScreens";
import buildMediaQuery from "tailwindcss/src/util/buildMediaQuery";
var Container = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  display: flex;\n  align-items: center;\n  border-top-right-radius: 4px;\n  background-color: rgb(17 24 39 / 0.9);\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  color: rgb(255 255 255);\n"], ["\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n  position: fixed;\n  bottom: 0px;\n  left: 0px;\n  display: flex;\n  align-items: center;\n  border-top-right-radius: 4px;\n  background-color: rgb(17 24 39 / 0.9);\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  color: rgb(255 255 255);\n"])));
var Icon = styled.svg(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  margin-left: -4px;\n  height: 16px;\n  width: auto;\n"], ["\n  margin-left: -4px;\n  height: 16px;\n  width: auto;\n"])));
var Screen = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n  color: rgb(55 65 81);\n  margin-left: 8px;\n"], ["\n  box-sizing: border-box;\n  border-width: 0;\n  border-style: solid;\n  border-color: #e5e7eb;\n  color: rgb(55 65 81);\n  margin-left: 8px;\n"])));
var TailwindDebugBreakpoints = function (_a) {
    var screens = _a.screens;
    if (!screens) {
        return null;
    }
    // adapted from https://github.com/tailwindlabs/tailwindcss/blob/deefbf5aafdfc6d65843eb9382b4d1295ec26628/src/lib/evaluateTailwindFunctions.js#L225
    var breakpointCss = function (screen) {
        screen = screen.replace(/^['"]+/g, "").replace(/['"]+$/g, "");
        var normalizedScreens = normalizeScreens(screens);
        var screenDefinition = normalizedScreens.find(function (_a) {
            var name = _a.name;
            return name === screen;
        });
        if (!screenDefinition) {
            return;
        }
        return "@media ".concat(buildMediaQuery(screenDefinition), " { [data-tailwind-debug-breakpoint=b-").concat(screenDefinition.name, "] { color: white } }");
    };
    return (React.createElement(Container, null,
        React.createElement(Icon, { viewBox: "0 0 50 31" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z", fill: "#38bdf8" })),
        Object.entries(screens).map(function (_a) {
            var name = _a[0], size = _a[1];
            return (React.createElement(Screen, { key: size, className: "text-gray-700 ".concat(name, ":text-white"), title: size, "data-tailwind-debug-breakpoint": "b-".concat(name) },
                React.createElement("style", null, breakpointCss(name)),
                name));
        })));
};
export default TailwindDebugBreakpoints;
var templateObject_1, templateObject_2, templateObject_3;
