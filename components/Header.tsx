
import React from 'react';
import { SpinnerIcon } from './icons/SpinnerIcon';

interface HeaderProps {
    onReset: () => void;
    onRefresh: () => void;
    isLoading: boolean;
    lastUpdated: Date | null;
    apiKeyIsSet: boolean;
}

const Header: React.FC<HeaderProps> = ({ onReset, onRefresh, isLoading, lastUpdated, apiKeyIsSet }) => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    Selachimorphia Daily Routine
                </h1>
                <p className="text-gray-400 mt-1">An interactive checklist for Agaleus acquisition.</p>
                {lastUpdated && (
                     <p className="text-xs text-gray-500 mt-2">
                        Last synced: {lastUpdated.toLocaleTimeString()}
                    </p>
                )}
            </div>
            <div className="flex items-center gap-2">
                 <button
                    onClick={onRefresh}
                    disabled={isLoading || !apiKeyIsSet}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center gap-2 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:text-gray-400"
                    title={!apiKeyIsSet ? "Set an API key to enable syncing" : "Sync with your GW2 account"}
                >
                    {isLoading ? (
                        <>
                            <SpinnerIcon className="w-4 h-4"/>
                            <span>Syncing...</span>
                        </>
                    ) : (
                        "Sync Progress"
                    )}
                </button>
                <button
                    onClick={onReset}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                    Daily Reset
                </button>
            </div>
        </header>
    );
};

export default Header;