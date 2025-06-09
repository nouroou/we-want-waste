import React from 'react';
import { CheckCircle } from 'lucide-react';
import type {StepStatus} from "../types/step-status.ts";
import type {Step} from "../types/step.ts";

const steps: Step[] = [
    { name: 'Postcode', status: 'complete' },
    { name: 'Waste Type', status: 'complete' },
    { name: 'Select Skip', status: 'current' },
    { name: 'Permit Check', status: 'upcoming' },
    { name: 'Choose Date', status: 'upcoming' },
    { name: 'Payment', status: 'upcoming' },
];

const getStepIconClasses = (status: StepStatus) => {
    const baseClasses = "stepper-item-icon";
    if (status === 'complete') return `${baseClasses} stepper-item-icon--complete`;
    if (status === 'current') return `${baseClasses} stepper-item-icon--current`;
    return `${baseClasses} stepper-item-icon--upcoming`;
}

const Stepper: React.FC = () => (
    <nav aria-label="Progress">
        <ol role="list" className="flex flex-wrap items-center justify-center gap-y-4 gap-x-6">
            {steps.map((step, stepIdx) => (
                <li key={step.name} className={`relative flex items-center ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                        <div className={`h-0.5 w-full ${step.status === 'complete' ? 'bg-primary' : 'bg-gray-200'}`} />
                    </div>

                    <a href="#" className={getStepIconClasses(step.status)}>
                        {step.status === 'complete' && <CheckCircle className="h-5 w-5 text-white" aria-hidden="true" />}
                        {step.status === 'current' && <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />}
                        {step.status === 'upcoming' && <span className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" aria-hidden="true" />}
                        <span className="sr-only">{step.name}</span>
                    </a>

                    <span className="absolute -bottom-6 text-xs font-medium text-text-muted">{step.name}</span>
                </li>
            ))}
        </ol>
    </nav>
);

export default Stepper;
