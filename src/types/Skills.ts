export interface Skill {
    domain: 'Frontend' | 'Backend' | 'Devops' | 'Miscellaneous';
    name: string;
    subtitle?: string;
    description?: string[];
    subskills?: string[];
}