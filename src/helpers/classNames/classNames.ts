type Mods = Record<string, boolean | string>;

export function classNames(cls: string, mods: Mods, aditional: string[]): string {
	return [
		cls,
		...aditional,
		...Object.entries(mods)
			.filter(([cls, value]) => Boolean(value))
			.map(([cls, value]) => cls),
	].join(' ');
}