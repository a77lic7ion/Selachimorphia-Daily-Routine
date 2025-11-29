
import React from 'react';
import { SectionData } from '../types';
import EventTimer from '../components/EventTimer';

export const sections: SectionData[] = [
  {
    id: 'precursor',
    title: 'I. Precursor Progress Gated Activities (Agaleus)',
    description: 'The precursor, Agaleus, requires completing the 24-step Acquiring Agaleus achievement. These tasks are gated by daily resets.',
    headers: ['Task', 'Location', 'Waypoint / POI', 'Description / Notes'],
    tasks: [
      {
        id: 'booters_path',
        task: "Complete 'Booter's Path Minidungeon",
        location: 'Shipwreck Strand / Twisting Hollows',
        waypoints: [{ code: '[&BJEPAAA=]', description: "Pub Canach Waypoint" }],
        description: "Complete the 'Booter's Path minidungeon. If this is completed before the achievement step (Step 10) is unlocked, you must wait until the daily reset.",
      },
      {
        id: 'ornate_keys',
        task: 'Acquire Ornate Rusted Keys',
        location: 'Central Tyria / Various',
        waypoints: [],
        description: 'These keys are required to open the Sunken Chests in fractals for Step 7 of the precursor achievement. Obtain keys by completing the "Blood in the Water" achievement once per day.',
      },
      {
        id: 'fractal_chest',
        task: 'Fractal Sunken Chest Attempt',
        location: "Lion's Arch / Fort Marriner",
        waypoints: [{ code: '[&BDAEAAA=]', description: 'Fort Marriner Waypoint' }],
        description: "Run the Siren's Reef Fractal or Aquatic Ruins Fractal and use an Ornate Rusted Key to open the Sunken Chest at the end. Multiple keys may be needed.",
      },
    ],
  },
  {
    id: 'currency',
    title: 'II. Castora Map Currency & Coin Farming (Daily Limit Focus)',
    description: 'The final acquisition of Gift of the Survivors and Gift of the People requires large quantities of map currencies (Chromatic Sap, Aether-Rich Sap, etc.) and Unusual Coins.',
    headers: ['Task', 'Map / Location', 'Waypoint / POI', 'Currencies Acquired'],
    tasks: [
      {
        id: 'world_boss',
        // FIX: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
        task: React.createElement(React.Fragment, null, 'Shipwreck Strand World Boss ', React.createElement(EventTimer, { offsetMinutes: 0, intervalHours: 2 })),
        location: 'Shipwreck Strand',
        waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }],
        description: "Complete Hammerhart Rumble! world boss for a Hero's choice chest (25 Chromatic Saps or 25 Raw Enchanting Stones) once per day.",
      },
      {
        id: 'starlit_meta',
        // FIX: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
        task: React.createElement(React.Fragment, null, 'Starlit Weald Meta Event ', React.createElement(EventTimer, { offsetMinutes: 30, intervalHours: 2 })),
        location: 'Starlit Weald',
        waypoints: [
            { code: '[&BMAPAAA=]', description: 'Foothold Bivouac Waypoint' },
            { code: '[&BJ4PAAA=]', description: 'Priory Expedition WP' },
        ],
        description: "Complete Secrets of the Weald meta event for a Hero's choice chest (25 Chromatic Saps or 25 Raw Enchanting Stones) once per day.",
      },
      {
        id: 'magic_mirror',
        task: 'Magic Mirror Keepsake Box',
        location: 'Shipwreck Strand & Starlit Weald',
        waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }],
        description: "Interact with a Magic Mirror (requires Secrets Unearthed mastery) to spawn one Long-Lost Keepsake Box (daily limit per mirror) and multiple Obscured Chests.",
      },
       {
        id: 'ethereal_keys',
        task: 'Ethereal Key Farming',
        location: 'Shipwreck Strand & Starlit Weald',
        waypoints: [{ code: '[&BMAPAAA=]', description: 'Foothold Bivouac Waypoint' }],
        description: 'Repeat Magic Mirror challenge (relog/swap char) to earn 5 Ethereal Key Charges (Prosperity Unending mastery) for Obscured Chests.',
      },
      {
        id: 'skimmer_aether',
        task: 'Skimmer Aetherlocation',
        location: 'Castora Maps',
        waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }],
        description: 'Use the Skimmer to locate Aetherlocation Treasure chests (requires Castoran Intuition mastery).',
      },
      {
        id: 'targeted_gathering',
        task: 'Targeted Gathering',
        location: 'Castora Maps',
        waypoints: [],
        description: 'Utilize the Resourcefulness mastery while harvesting, logging, or mining any resource node for a chance to acquire the map currency associated with that zone.',
      },
    ],
  },
    {
    id: 'materials',
    title: 'III. Core Legendary Materials & Vendor Visits (Daily/Weekly)',
    description: 'These materials are needed for the Gift of Castoran Mastery (which requires 250 Obsidian Shards) and the Gift of Adventure (which requires 55 Mystic Clovers).',
    headers: ['Task', 'Component', 'Waypoint / Location', 'Cost / Limit / Description'],
    tasks: [
        {
            id: 'obsidian_shards',
            task: 'Obsidian Shard Purchase',
            location: 'Various',
            component: 'Obsidian Shards',
            waypoints: [{ code: '[&BDAEAAA=]', description: 'Fort Marriner Waypoint' }],
            description: 'Purchase limit-gated Obsidian Shards from Laurel Merchant (3 Laurels) or Fractal Reliquary (25 Relics for 3).',
        },
        {
            id: 'mystic_clovers',
            task: 'Mystic Clovers (Weekly)',
            location: 'Various',
            component: 'Mystic Clovers',
            waypoints: [],
            description: 'Purchase weekly limited Mystic Clovers from vendors (PvP, WvW, Strikes, Fractals, Raids) or Miyani (up to 10/week).',
        },
        {
            id: 'bloodstone_shard',
            task: 'Bloodstone Shard Purchase',
            location: 'Various',
            component: 'Bloodstone Shard',
            waypoints: [],
            description: 'Purchase the required Bloodstone Shard for 200 Spirit Shards from Miyani or a Mystic Forge Attendant.',
        },
        {
            id: 'vision_crystals',
            task: 'Vision Crystals (Optional)',
            location: 'Wizard\'s Vault',
            component: 'Vision Crystals',
            waypoints: [],
            description: 'Purchase Vision Crystals for 150 Astral Acclaims each from the Wizard\'s Vault if you cannot craft them.',
        },
    ],
    },
    {
        id: 'checklist',
        title: 'IV. One-Time Precursor Route Checklist',
        description: 'Once you are ready to begin the Acquiring Agaleus achievement, these are the initial, non-repeatable steps.',
        headers: ['Step', 'Location', 'Waypoint / POI', 'Description'],
        tasks: [
            { id: 'start_rumors', task: 'Start Rumors', location: 'Shipwreck Strand', waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }], description: 'Talk to "Captain" Ruymond Lakes. Bring him a drink from the Mixology Station.' },
            { id: 'find_diver', task: 'Find the Diver', location: 'Lion\'s Arch', waypoints: [{ code: '[&BC8EAAA=]', description: 'Sanctum Harbor Waypoint' }], description: 'Talk to Dive Master Astora.' },
            { id: 'master_diver', task: 'Master Diver', location: 'Lion\'s Arch', waypoints: [], description: 'Complete the Sunken Treasure Hunter: Master Diver achievement (open 5 sunken chests).' },
            { id: 'sharkmaw_caverns', task: 'Sharkmaw Caverns', location: 'Lion\'s Arch', waypoints: [{ code: '[&BDMEAAA=]', description: 'Farshore Waypoint' }], description: 'Complete Weyandt\'s Revenge JP and open the chest for the Tattered Note.' },
            { id: 'wileys_note', task: 'Wiley\'s Note', location: 'Gendarran Fields', waypoints: [{ code: '[&BM0DAAA=]', description: 'Brigantine Waypoint' }], description: 'Interact with the Torn Note inside of Wiley\'s Cove.' },
            { id: 'vigil_keep_cache', task: 'Vigil Keep Cache', location: 'Gendarran Fields', waypoints: [{ code: '[&BJIBAAA=]', description: 'Vigil Keep Waypoint' }], description: 'Find cave south of WP, loot chest for mask piece.' },
            { id: 'shipwreck_grotto', task: 'Shipwreck Strand Grotto', location: 'Shipwreck Strand', waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }], description: 'Head south into Riddled Cove caves. Find chest underwater in Greenroot Grotto Skimmerway.' },
            { id: 'freebooter_drop', task: 'Freebooter Drop', location: 'Shipwreck Strand', waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }], description: 'Defeat freebooter enemies for a random mask piece drop.' },
            { id: 'southsun_cove', task: 'Southsun Cove', location: 'Southsun Cove', waypoints: [{ code: '[&BNUGAAA=]', description: 'Pearl Islet Waypoint' }], description: 'Dive underwater of Privateer\'s Moorage POI on the bay floor.' },
            { id: 'la_underwater', task: 'Lion\'s Arch Underwater', location: 'Lion\'s Arch', waypoints: [{ code: '[&BABEAAA=]', description: 'Claw Island Portage Waypoint' }], description: 'Locate mask piece on sea floor, North of West of Phoenix Roost POI.' },
            { id: 'cursed_shore', task: 'Cursed Shore (Orr)', location: 'Cursed Shore', waypoints: [{ code: '[&BOQGAAA=]', description: 'Shipwreck Rock Waypoint' }], description: 'Find mask piece West of WP, underwater, enclosed by ship wreckage.' },
            // FIX: Replaced JSX with React.createElement to avoid syntax errors in a .ts file.
            { id: 'defeat_taidha', task: React.createElement(React.Fragment, null, 'Defeat Taidha Covington ', React.createElement(EventTimer, { offsetMinutes: 45, intervalHours: 2 })), location: 'Bloodtide Coast', waypoints: [{ code: '[&BKoBAAA=]', description: 'Firthside Vigil Waypoint' }], description: 'Defeat world boss Admiral Taidha Covington and loot her chest.' },
            { id: 'combine_mask', task: 'Combine the Mask Pieces', location: 'Shipwreck Strand', waypoints: [{ code: '[&BJEPAAA=]', description: 'Pub Canach Waypoint' }], description: 'Return to "Captain" Ruymond Lakes, then talk to Cecil the Strong Arm.' },
            { id: 'find_shaman', task: 'Find the Shaman', location: 'Shipwreck Strand', waypoints: [{ code: '[&BJwPAAA=]', description: 'Dark Leviathan Waypoint' }], description: 'Talk to the Castaway NPC west of Leystone Promontory.' },
            { id: 'find_shark_spirit', task: 'Find the Shark Spirit', location: 'Frostgorge Sound', waypoints: [{ code: '[&BEMFAAA=]', description: 'Honor of the Waves Waypoint' }], description: 'Interact with the Shark Spirit swimming west of the waypoint.' },
            { id: 'honor_of_waves', task: 'Honor of the Waves', location: 'Frostgorge Sound', waypoints: [{ code: '[&BEMFAAA=]', description: 'Honor of the Waves Waypoint' }], description: 'Complete one of the explorable paths in the Honor of the Waves dungeon.' },
            { id: 'final_steps', task: 'Final Steps', location: 'Frostgorge/Shipwreck', waypoints: [{ code: '[&BEMFAAA=]', description: 'HotW WP' }, { code: '[&BJwPAAA=]', description: 'Dark Leviathan WP' }], description: 'Return to the Shark Spirit, then return to the Castaway shaman to obtain the Agaleus Container.' },
        ],
    },
];
