export interface Lookup {
  id: string;
  name: string;
  checked:boolean;
}

export const createEmptyLookup = (): Lookup => ({
  id: '',
  name: '',
  checked: false,
});
