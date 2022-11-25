import { useRouter } from "next/router";
import { dehydrate, QueryClient, useQuery } from "react-query";
import { WagtailClient } from "../../api/wagtail-client";
import PageError from "../../components/page-error";
import PageLoading from "../../components/page-loading";
import WagtailPage from "../../components/wagtail-page";

export function getServerSideProps() {
  const qc = new QueryClient();
  return {
    props: { dehydratedState: dehydrate(qc) },
  };
}

export default function CmsPage() {
  const router = useRouter();
  let pagePath = router.isReady ? router.asPath : "/pages/";
  pagePath = pagePath.replace(/^\/pages/, '/')
  console.log(pagePath);
  const wagtail = new WagtailClient();
  const page = useQuery(["page-detail", { pagePath }], async () => {
    const resp = await wagtail.byHtmlPath(pagePath);
    return resp;
  });
  if (page.isLoading) {
    return <PageLoading pageQuery={page}></PageLoading>;
  } else if (page.isError) {
    return <PageError pageQuery={page}></PageError>;
  } else return <WagtailPage page={page.data!}></WagtailPage>;
}
