declare module '*.json' {
  const value: {
    vehicles: {
      id: string;
      name: string;
      slug: string;
      price: number;
      oldPrice: number | null;
      category: string;
      inStock: boolean;
      stockStatus: string;
      description: string;
      shortDescription: string;
      images: string[];
      specs: {
        [key: string]: {
          [key: string]: string;
        };
      };
      features: string[];
      highlights: string[];
      additionalOptions: {
        id: string;
        name: string;
        price: number;
      }[];
      recommended?: boolean;
    }[];
  };
  export default value;
}
