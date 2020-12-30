export interface Config {
  baseURL?: string
  publicAuth?: {password: string, identifier: string}
}

interface Options {
  deleteElement: boolean;
}

export function configFromJSONElement(
  element: string | Element,
  options: Options = { deleteElement: true }
): Config {
  if (typeof element === "string") {
    const newElement = document.querySelector(element);
    if (newElement === null || newElement.textContent === null) {
      const err = Error(`element ${element} not found`);
      (err as any).element = element;
      throw err;
    }
    element = newElement

  }
  const config = JSON.parse(element.textContent!);
    if (options.deleteElement) {
      element.remove();
    }
    return config;
}

let $config: null | Config = null;
export default function useConfig(
  selector: string | Element = "script#app-config"
) {
  if (!$config) {
    $config = configFromJSONElement(selector);
  }
  return $config;
}
