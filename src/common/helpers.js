import { Href, push, PushAction } from "redux-little-router";

export function changeLocation(
  url,
  persistQuery
) {
  if (typeof url !== "string") {
    return push(url, { persistQuery });
  }
  let resultPath = url;

  return push({ pathname: resultPath }, { persistQuery });
}
