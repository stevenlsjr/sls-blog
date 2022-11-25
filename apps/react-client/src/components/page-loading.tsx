import { UseQueryResult } from "react-query"
import { DetailPage } from "../api/wagtail-client"

export default function PageLoading({pageQuery}: {pageQuery: UseQueryResult< DetailPage>}){
  return <div>Loading...</div>
}