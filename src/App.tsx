import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import type { Skip } from './types/skip';
import {mockSkipsData} from "./lib/skipData.ts";
import Stepper from "./components/Stepper.tsx";
import SkipCard from "./components/SkipCard.tsx";
import {formatCurrency} from "./lib/utils.ts";



const App = () => {
    const [skips, setSkips] = useState<Skip[]>([]);
    const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadSkips = () => {
            setIsLoading(true);
            try {
                setTimeout(() => {
                    const sortedSkips = [...mockSkipsData].sort((a, b) => parseInt(a.size) - parseInt(b.size));
                    setSkips(sortedSkips);

                    const defaultSkip = sortedSkips.find(s => s.size === '8');
                    if (defaultSkip) {
                        setSelectedSkipId(defaultSkip.id);
                    }
                    setIsLoading(false);
                }, 500);
            } catch (err) {
                const message = err instanceof Error ? err.message : "An unknown error occurred.";
                console.error("Failed to load skips:", message);
                setError('Could not load skip information. Please try again later.');
                setIsLoading(false);
            }
        };
        loadSkips();
    }, []);

    const selectedSkip = skips.find(skip => skip.id === selectedSkipId);

    return (
        <div className="container mx-auto px-4 py-8 sm:py-12">
            <div className="mb-12">
                <Stepper />
            </div>

            <header className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-text-heading tracking-tight">
                    Choose Your Skip Size
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-text-muted">
                    Select the skip size that best suits your needs. All our prices include VAT.
                </p>
            </header>

            <main>
                {isLoading && (
                    <div className="text-center py-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                        <p className="mt-4 text-lg font-semibold text-text-muted">Finding available skips...</p>
                    </div>
                )}

                {error && <p className="text-center text-red-500 font-semibold">{error}</p>}

                {!isLoading && !error && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
                        {skips.map((skip) => (
                            <SkipCard
                                key={skip.id}
                                skip={skip}
                                isSelected={selectedSkipId === skip.id}
                                onSelect={setSelectedSkipId}
                            />
                        ))}
                    </div>
                )}
            </main>

            {!isLoading && !error && (
                <footer className="footer-bar">
                    <div className="footer-bar-content">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div className="flex-grow text-center sm:text-left">
                                {selectedSkip ? (
                                    <div>
                                        <p className="text-lg font-bold text-text-heading">{selectedSkip.title} Selected</p>
                                        <p className="text-sm text-text-muted">
                                            <span className="font-semibold">{formatCurrency(selectedSkip.price)}</span> for a {selectedSkip.hire_period} day hire.
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-lg font-medium text-text-muted">Please select a skip to continue.</p>
                                )}
                            </div>
                            <div className="flex w-full sm:w-auto items-center gap-4">
                                <button type="button" className="btn btn-secondary w-1/2 sm:w-auto">
                                    Back
                                </button>
                                <button type="button" disabled={!selectedSkip} className="btn btn-primary w-1/2 sm:w-auto flex items-center justify-center gap-2">
                                    Continue
                                    <ArrowRight className="h-5 w-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </footer>
            )}
        </div>
    );
}

export default App;
