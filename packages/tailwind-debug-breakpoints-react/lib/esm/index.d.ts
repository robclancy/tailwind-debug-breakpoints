/// <reference types="react" />
import { ResolvableTo, ScreensConfig } from "tailwindcss/types/config";
declare type TailwindDebugBreakpointsProps = {
    screens: ResolvableTo<ScreensConfig> | undefined;
};
declare const TailwindDebugBreakpoints: ({ screens, }: TailwindDebugBreakpointsProps) => JSX.Element | null;
export default TailwindDebugBreakpoints;
