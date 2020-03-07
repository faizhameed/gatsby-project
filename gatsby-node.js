const path = require("path") // see nodejs docs to strip of the path and get the filename

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  // Transform the new node here and create a new node or
  // create a new node field.
  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md") //striping the url and getting the filename
    createNodeField({
      // here we are creating new node field
      node,
      name: "slug",
      value: slug,
    })
  }
}
