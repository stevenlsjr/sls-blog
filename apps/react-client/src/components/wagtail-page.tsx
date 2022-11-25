import {
  DetailPage,
  BLOG_PAGE_TYPE,
  BLOG_LANDING_PAGE_TYPE,
  isBlogPage,
  isBlogLandingPage,
} from "../api/wagtail-client";

import BlogPageView from "./page-types/blog-page-view";
import BlogLandingPageView from "./page-types/blog-landing-page-view";
export interface Props {
  page: DetailPage;
}

export default function WagtailPage({ page }: Props) {
  if (isBlogPage(page)) {
    return <BlogPageView page={page}></BlogPageView>;
  } else if (isBlogLandingPage(page)) {
    return <BlogLandingPageView page={page}></BlogLandingPageView>;
  }
  return <></>;
}
