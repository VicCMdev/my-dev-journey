// This File contains all flags for applications. Controlling "WIP" sections.

export const flags = {
    home: true,
    about: true,
    contact: true,
    projects: false,
};

export type FlagName = keyof typeof flags;

const previewAll = import.meta.env.DEV || import.meta.env.MODE === "development" || import.meta.env.PUBLIC_SHOW_WIP === 'true';

export const isFlagEnabled = (flag: FlagName): boolean => {
    return flags[flag] || previewAll;
}

