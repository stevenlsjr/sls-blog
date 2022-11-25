import { AxiosInstance } from "axios";
import { getAxios } from "./axios";

export interface WagtailClientOptions {
  axios?: AxiosInstance;
}

export interface Pagination<M> {
  meta: {
    total_count?: number;
  };
  items: M[];
}

export interface ListPageMeta {
  type: string;
  detail_url: string;
  html_url: string;
  slug: string;
  first_published_at: string;
  locale: string;
}

export interface DetailPageMeta<T extends PageType = PageType> {
  type: T;
  detail_url: string;
  html_url: string;
  slug: string;
  show_in_menus: false;
  seo_title: string;
  search_description: string;
  first_published_at: string;
  alias_of: null;
  parent?: ListWagtailPage;
  locale: string;
}

export interface ListWagtailPage {
  id: number;
  title: string;
  meta: ListPageMeta;
}
export const BLOG_PAGE_TYPE = "slsblog_cms.BlogPage";
export const BLOG_LANDING_PAGE_TYPE = "slsblog_cms.BlogLandingPage";
export type PageType = typeof BLOG_PAGE_TYPE | typeof BLOG_LANDING_PAGE_TYPE;

export interface DetailPage {
  id: number;
  meta: DetailPageMeta;
  title: string;
}

export interface BlogPage extends DetailPage {
  id: number;
  meta: DetailPageMeta<typeof BLOG_PAGE_TYPE>;
  title: string;
  intro: string;
  body: BlogPageBlock[];
}

export interface BlogLandingPage extends DetailPage {}

export interface BlogPageBlock {
  type: string;
  value: string;
  id: string;
}
export function isBlogPage(page: DetailPage): page is BlogPage {
  return page.meta.type === BLOG_PAGE_TYPE;
}

export function isBlogLandingPage(page: DetailPage): page is BlogLandingPage {
  return page.meta.type === BLOG_LANDING_PAGE_TYPE;
}

export class WagtailClient {
  constructor(options: WagtailClientOptions = {}) {
    this.axios = options.axios ?? getAxios();
  }

  async listPages(params: any = {}) {
    const resp = await this.axios.get<Pagination<ListWagtailPage>>(
      "/api/wagtail-v2/pages",
      { params }
    );

    return resp.data;
  }

  listPagesByCursor(params: any = {}, initialCursor = 0, limit = 10) {
    return async ({ pageParam = initialCursor }) => {
      const cursor = pageParam;
      const offset = cursor * limit;
      const pages = await this.listPages({ ...params, limit, offset });
      const nextOffset = offset + limit;
      const next =
        nextOffset >= (pages.meta.total_count ?? 0) ? undefined : cursor + 1;
      return { pages: pages.items, next };
    };
  }

  async listBlogPages(params: any = {}) {
    params.type = BLOG_PAGE_TYPE;
    return this.listPages(params);
  }

  async detailPage(id: number): Promise<DetailPage> {
    const resp = await this.axios.get<DetailPage>(
      `/api/wagtail-v2/pages/${id}/`
    );
    return resp.data;
  }

  async byHtmlPath(path: string): Promise<DetailPage> {
    return (
      await this.axios.get("/api/wagtail-v2/pages/find/", {
        params: {
          html_path: path,
        },
      })
    ).data;
  }

  axios: AxiosInstance;
}
