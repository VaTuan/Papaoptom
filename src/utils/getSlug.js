function getSlug(string) {
  return string?.trim()?.toLowerCase()?.split(" ")?.join("-");
}
export default getSlug;
