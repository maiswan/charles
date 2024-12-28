const noAttr = () => {
  return {
    name: "no-attribute",
    transformIndexHtml(html) {
      return html
        .replaceAll("crossorigin ", "")
        .replaceAll(`type="module" `, "")
        .replaceAll(`"/assets/`, `"./assets/`);
    }
  }
}

export default ({
  plugins: [noAttr()]
})