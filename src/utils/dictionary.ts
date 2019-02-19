export interface Dictionary {
  [key: string]: string;
}

export interface DictionaryEdge {
  node?: {
    slug?: string;
    title?: string;
  };
}

export const getDictionary = (edges: DictionaryEdge[]): Dictionary => {
  const dictionary: Dictionary = {};
  edges.forEach(({ node }: DictionaryEdge) => {
    if (node.slug && node.title) {
      dictionary[node.slug] = node.title;
    }
  });
  return dictionary;
};
