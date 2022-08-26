export type ISchedule = {
  availability: {
    label: string;
    month: string;
    year: string;
    day: string;
    date: string;
    available: number;
    unavailable: number;
    total: number;
  };
  unavailable: {
    from_unix: number;
    to_unix: number;
  }[];
  available: {
    from_unix: number;
    to_unix: number;
  }[];
}[];
