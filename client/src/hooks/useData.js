import { useQuery } from "react-query";

export function useWiki(searchTerm) {
  return useQuery(
    ["wiki", searchTerm],
    () => {
      return fetch(
        `https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=${searchTerm}&origin=*`
      ).then((res) => res.json());
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
      enabled: false,
    }
  );
}

export function useAppleMusic() {
  return useQuery(
    "AppleMusic",
    () => {
      return fetch("/music").then((res) => res.json());
    },
    {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  );
}
