import { useRouter } from "next/router";

function getCmsPath(path: string): string {
  return path.replace(/^\/cms\//, '/')
}

function CmsPage() {
  const router = useRouter();
  const pagePath = getCmsPath(router.asPath)
  return (
    <div>
      <h1>Hello</h1>
      <p>path is { pagePath }</p>
    </div>
  );
}

export default CmsPage;
