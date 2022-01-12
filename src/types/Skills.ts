export interface Skill {
    domain: 'Frontend' | 'Backend' | 'Devops' | 'Miscellaneous';
    name: string;
    pinned?: boolean;
    subtitle?: string;
    description?: string[];
    subskills?: string[];
}