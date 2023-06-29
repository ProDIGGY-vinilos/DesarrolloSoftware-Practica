export interface User {
  results: [
    {
      name: {
        first: string;
        last: string;
      };
      picture: {
        large: string;
      };
    }
  ];
  info: {
    seed: string;
  };
}
