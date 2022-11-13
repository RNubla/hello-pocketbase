export default defineEventHandler(async (event) => {
  const { data } = await useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {
      initialCache: false,
    }
  );

  return {
    api: data,
  };
});
