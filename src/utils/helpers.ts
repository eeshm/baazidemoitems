export function sortData<T>(data: T[], key: keyof T, ascending: boolean = true): T[] {
    return [...data].sort((a, b) => {
      if (a[key] < b[key]) return ascending ? -1 : 1;
      if (a[key] > b[key]) return ascending ? 1 : -1;
      return 0;
    });
  }
  
  export function filterData<T>(data: T[], key: keyof T, query: string): T[] {
    return data.filter((item) =>
      String(item[key]).toLowerCase().includes(query.toLowerCase())
    );
  }
  