import { gql, useQuery } from "@apollo/client";
import { isNil } from "lodash";
import getConfig from "next/config";
import { useRouter } from "next/router";
import RenderPage from "../../components/RenderPage";
import {
  usePageByUrlQuery,
  PageByUrlDocument,
  ValidPagePathsDocument,
  ValidPagePathsQueryResult,
} from "../../generated/gql";
import { initializeApollo } from "../../services/apollo-client";

const { publicRuntimeConfig } = getConfig();
const CMS_URL_ROOT = publicRuntimeConfig.cmsUrlRoot || "/my-blog";

function transformPageUrl(path: string) {
  const newPath =
    CMS_URL_ROOT + path.replace(/^\/content\/?/, "").replace(/\/?$/, "/");
  return newPath;
}

export async function getStaticPaths() {
  const client = initializeApollo();

  const { data } =
    await client.query<ValidPagePathsQueryResult>({
      query: ValidPagePathsDocument,
      variables: {},
    });
  const paths = ((data as any).pages ?? [])
    .flatMap(page =>{
      console.log(page)
      if (page){
        return [
          {params: {'...pageUrl': page.urlPath}}
        ]
      } else {
        return []
      }
    })

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const client = initializeApollo();
  const results = await Promise.all([
    client.query({
      query: PageByUrlDocument,
    }),
  ]);

  return {
    props: {
      initialApolloState: client.cache.extract(),
    },
    revalidate: 1,
  };
}

function CmsPage() {
  const router = useRouter();
  const pagePath = transformPageUrl(router.asPath);
  const { data, error, loading } = usePageByUrlQuery({
    variables: {
      pagePath,
    },
  });
  let content: JSX.Element;
  if (error) {
    content = <div>Error! {error}</div>;
  } else if (loading) {
    content = <div>Loading...</div>;
  } else if (data === undefined || data.page === undefined) {
    content = <div></div>;
  } else {
    content = <RenderPage value={data}></RenderPage>;
  }
  return (
    <div>
      <h1>Hello</h1>
      <p>path is {pagePath}</p>
      {content}
    </div>
  );
}

export default CmsPage;
