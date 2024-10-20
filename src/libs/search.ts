import { data, data2, DataType } from "./default";

export const searchDataToParam = (search: URLSearchParams): DataType => {
  return {
    userId: Number(search.get("userId")) || undefined,
    id: Number(search.get("id")) || undefined,
    title: search.get("title") || undefined,
    completed:
      search.get("completed") === "1"
        ? true
        : search.get("completed") === "0"
        ? false
        : undefined,
  };
};

export const handleFilterData = (search: DataType): DataType[] => {
  const { completed, title, userId } = search;

  const result = data.filter(
    (item) =>
      (!userId || userId === item.userId) &&
      item?.title?.includes(title ? title : " ") &&
      (!completed || item.completed)
  );

  return result.length > 0 ? result : data;
};

export const handleFilterDataByObject = (search: DataType): DataType[] => {
  const result = data.filter((item) =>
    Object.entries(search).every(([key, value]) => {
      if (!value && key !== "completed") {
        return true;
      }

      if (key === "title") {
        return item[key as keyof DataType]!.includes(value);
      }

      return item[key as keyof DataType] === value;
    })
  );

  return result.length > 0 ? result : data;
};
