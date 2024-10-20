import { useEffect, useState } from "react";
import { DataType } from "../libs/default";
import { useSearchParams } from "react-router-dom";
import {
  handleFilterData,
  searchDataToParam,
  handleFilterDataByObject,
} from "../libs/search";

// export type Props = {
//   data?: string;
// };

export default function ListDataSearch() {
  const [datas, setDatas] = useState<DataType[]>([]);

  const [searchParam] = useSearchParams();

  useEffect(() => {
    const search = searchDataToParam(searchParam);
    const rs = handleFilterDataByObject(search);
    setDatas(rs);
  }, [searchParam]);

  return (
    <ul>
      {datas.map((item) => (
        <li key={`index${item.id}`}>
          Inform:
          {item.id} - {item.userId} - {item.title} -{" "}
          {item.completed ? "true" : "false"}
        </li>
      ))}
    </ul>
  );
}
