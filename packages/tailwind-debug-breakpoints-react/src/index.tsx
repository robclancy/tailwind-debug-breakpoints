import * as React from "react";
import { normalizeScreens } from "tailwindcss/src/util/normalizeScreens";
import buildMediaQuery from "tailwindcss/src/util/buildMediaQuery";
import { ResolvableTo, ScreensConfig } from "tailwindcss/types/config";

const containerStyles: React.CSSProperties = {
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

const iconStyles: React.CSSProperties = {
  marginLeft: "-4px",
  height: "16px",
  width: "auto",
};

const screenStyles: React.CSSProperties = {
  boxSizing: "border-box",
  borderWidth: "0",
  borderStyle: "solid",
  borderColor: "#e5e7eb",
  color: "rgb(55 65 81)",
  marginLeft: "8px",
};

type TailwindDebugBreakpointsProps = {
  screens: ResolvableTo<ScreensConfig> | undefined;
};

const TailwindDebugBreakpoints = ({
  screens,
}: TailwindDebugBreakpointsProps): JSX.Element | null => {
  if (!screens) {
    return null;
  }

  // adapted from https://github.com/tailwindlabs/tailwindcss/blob/deefbf5aafdfc6d65843eb9382b4d1295ec26628/src/lib/evaluateTailwindFunctions.js#L225
  const breakpointCss = (screen: string) => {
    screen = screen.replace(/^['"]+/g, "").replace(/['"]+$/g, "");

    let normalizedScreens = normalizeScreens(screens);
    let screenDefinition = normalizedScreens.find(
      ({ name }) => name === screen
    );

    if (!screenDefinition) {
      return;
    }

    return `@media ${buildMediaQuery(
      screenDefinition
    )} { div[data-tailwind-debug-breakpoint=b${
      screenDefinition.name
    }] { color: white !important } }`;
  };

  return (
    <div style={containerStyles}>
      <svg style={iconStyles} viewBox="0 0 50 31">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z"
          fill="#38bdf8"
        ></path>
      </svg>
      {Object.entries(screens).map(([name, size]) => (
        <div
          style={screenStyles}
          key={size}
          title={size}
          data-tailwind-debug-breakpoint={`b${name}`}
        >
          <style>{breakpointCss(name)}</style>
          {name}
        </div>
      ))}
    </div>
  );
};

export default TailwindDebugBreakpoints;
