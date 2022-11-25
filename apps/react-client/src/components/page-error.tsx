import { UseQueryResult } from "react-query";
import { DetailPage } from "../api/wagtail-client";

export default function PageError({
  pageQuery,
}: {
  pageQuery: UseQueryResult<DetailPage>;
}) {
  return (
    <div>
      Error...
      <p>{(pageQuery.error as any).toString()}</p>
    </div>
  );
}
