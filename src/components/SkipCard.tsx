import React from 'react';
import { Trash2, Calendar } from 'lucide-react';
import type {Skip} from "../types/skip.ts";
import {formatCurrency, getBinBagEstimate} from "../lib/utils.ts";

interface SkipCardProps {
    skip: Skip;
    isSelected: boolean;
    onSelect: (id: number) => void;
}

const SkipCard: React.FC<SkipCardProps> = ({ skip, isSelected, onSelect }) => {
    const cardClasses = isSelected ? 'skip-card skip-card--selected' : 'skip-card';

    return (
        <div onClick={() => onSelect(skip.id)} className={cardClasses}>
            <div className="flex flex-col h-full">
                <div className="flex-grow">
                    <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold text-text-base">{skip.title}</h3>
                        <div className={`py-1 px-3 rounded-full text-sm font-semibold ${isSelected ? 'bg-primary text-white' : 'bg-primary-light text-primary-text'}`}>
                            {skip.size} Yards
                        </div>
                    </div>
                    <p className="mt-4 text-4xl font-extrabold text-text-heading">{formatCurrency(skip.price)}</p>
                    <p className="mt-1 text-sm text-text-muted">inc. VAT</p>
                </div>

                <div className="mt-6 space-y-3 text-sm text-text-muted">
                    <div className="flex items-center gap-2">
                        <Trash2 className="h-5 w-5 text-primary" />
                        <span>Approx. {getBinBagEstimate(skip.size)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-primary" />
                        <span>{skip.hire_period} day hire period</span>
                    </div>
                </div>

                <div className="mt-6">
                    <div className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${isSelected ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'}`}>
                        {isSelected ? 'Selected' : 'Select This Skip'}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SkipCard;
