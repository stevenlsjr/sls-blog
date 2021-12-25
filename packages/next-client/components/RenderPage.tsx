import { PageByUrlQuery } from "../generated/gql";

export interface Props {
  value: PageByUrlQuery
}
export default function RenderPage({value}: Props) {
  return <div>Ok {value.page?.pageType}</div>
}