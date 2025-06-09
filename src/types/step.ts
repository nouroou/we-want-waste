import type {StepStatus} from "./step-status.ts";

export interface Step {
    name: string;
    status: StepStatus;
}