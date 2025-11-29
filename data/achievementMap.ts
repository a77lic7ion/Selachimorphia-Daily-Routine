
export type TaskType = 'daily-account' | 'once';

export const achievementTaskMap: Record<string, { achievementId: number; bit?: number; type: TaskType }> = {
    // Section I: Precursor Progress
    'booters_path': { achievementId: 1032, type: 'daily-account' }, // Daily Booter's Path
    'ornate_keys': { achievementId: 9057, type: 'daily-account' }, // Daily Blood in the Water
    'fractal_chest': { achievementId: 8880, bit: 6, type: 'once' }, // Acquiring Agaleus: Step 7

    // Section IV: One-Time Precursor Route Checklist (all bits of Acquiring Agaleus - ID 8880)
    'start_rumors': { achievementId: 8880, bit: 0, type: 'once' },
    'find_diver': { achievementId: 8880, bit: 1, type: 'once' },
    'master_diver': { achievementId: 8869, type: 'once' }, // This is its own achievement, but also bit 2 of 8880
    'sharkmaw_caverns': { achievementId: 8880, bit: 3, type: 'once' },
    'wileys_note': { achievementId: 8880, bit: 4, type: 'once' },
    'vigil_keep_cache': { achievementId: 8880, bit: 5, type: 'once' },
    'shipwreck_grotto': { achievementId: 8880, bit: 7, type: 'once' },
    'freebooter_drop': { achievementId: 8880, bit: 8, type: 'once' },
    'southsun_cove': { achievementId: 8880, bit: 10, type: 'once' },
    'la_underwater': { achievementId: 8880, bit: 11, type: 'once' },
    'cursed_shore': { achievementId: 8880, bit: 12, type: 'once' },
    'defeat_taidha': { achievementId: 8880, bit: 13, type: 'once' },
    'combine_mask': { achievementId: 8880, bit: 14, type: 'once' },
    'find_shaman': { achievementId: 8880, bit: 15, type: 'once' },
    'find_shark_spirit': { achievementId: 8880, bit: 16, type: 'once' },
    'honor_of_waves': { achievementId: 2315, type: 'once' }, // Also bit 17 of 8880
    'final_steps': { achievementId: 8880, bit: 18, type: 'once' },
};
