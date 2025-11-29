
import type { AccountAchievement } from '../types';

const API_BASE = 'https://api.guildwars2.com/v2';

export const fetchAccountAchievements = async (apiKey: string): Promise<Record<number, AccountAchievement>> => {
    if (!apiKey) {
        throw new Error('API Key is required.');
    }
    
    // Using a specific schema version to ensure consistent response structure
    const response = await fetch(`${API_BASE}/account/achievements?v=2022-03-23T19:00:00.000Z`, {
        headers: {
            Authorization: `Bearer ${apiKey}`,
        },
    });

    if (response.status === 401 || response.status === 403) {
        throw new Error('Invalid API Key. Please check the key and its permissions (requires "progression").');
    }

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to fetch data from Guild Wars 2 API: ${errorText}`);
    }

    const achievements: AccountAchievement[] = await response.json();
    
    // Convert array to a map for efficient O(1) lookups
    const achievementMap: Record<number, AccountAchievement> = {};
    for (const ach of achievements) {
        achievementMap[ach.id] = ach;
    }

    return achievementMap;
};
