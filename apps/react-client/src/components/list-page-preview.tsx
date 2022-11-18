import { useQuery } from "react-query";
import {
  isBlogPage,
  ListWagtailPage,
  WagtailClient,
} from "../api/wagtail-client";
import { MS_PER_HOUR } from "../constants";

export interface Props {
  page: ListWagtailPage;
}
export function ListPagePreview(props: Props) {
  const wagtail = new WagtailClient();
  const { page } = props;
  const { data, isLoading, isError } = useQuery(
    ["detail-page-by-id", page.id],
    (...params) => wagtail.detailPage(page.id),
    { staleTime: 12 * MS_PER_HOUR }
  );
  let intro = null;
  if (data && isBlogPage(data)) {
    intro = data.intro;
  }
  return (
    <div>
      <h2>{page.title}</h2>
      <p>{intro}</p>
    </div>
  );
}
