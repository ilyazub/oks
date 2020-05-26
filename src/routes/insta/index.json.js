import axios from "axios";

const username = "ilya.zoob";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const { data: posts } = await axios.get(
    `https://www.instagram.com/${username}/?__a=1`
  );

  const contents = JSON.stringify(
    posts.graphql.user.edge_owner_to_timeline_media.edges.map(({ node }) => ({
      image: node.display_url,
      slug: node.accessibility_caption,
    }))
  );

  res.end(contents);
}
