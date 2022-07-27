import * as React from "react";
import { normalizeScreens } from "tailwindcss/src/util/normalizeScreens";
import buildMediaQuery from "tailwindcss/src/util/buildMediaQuery";
var containerStyles = {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    position: "fixed",
    bottom: "0px",
    left: "0px",
    display: "flex",
    alignItems: "center",
    borderTopRightRadius: "4px",
    backgroundColor: "rgb(17 24 39 / 0.9)",
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "2px",
    paddingBottom: "2px",
    color: "rgb(255 255 255)",
};
var iconStyles = {
    marginLeft: "-4px",
    height: "16px",
    width: "auto",
};
var screenStyles = {
    boxSizing: "border-box",
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: "#e5e7eb",
    color: "rgb(55 65 81)",
    marginLeft: "8px",
};
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
        return "@media ".concat(buildMediaQuery(screenDefinition), " { div[data-tailwind-debug-breakpoint=b").concat(screenDefinition.name, "] { color: white !important } }");
    };
    return (React.createElement("div", { style: containerStyles },
        React.createElement("svg", { style: iconStyles, viewBox: "0 0 50 31" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z", fill: "#38bdf8" })),
        Object.entries(screens).map(function (_a) {
            var name = _a[0], size = _a[1];
            return (React.createElement("div", { style: screenStyles, key: size, title: size, "data-tailwind-debug-breakpoint": "b".concat(name) },
                React.createElement("style", null, breakpointCss(name)),
                name));
        })));
};
export default TailwindDebugBreakpoints;
