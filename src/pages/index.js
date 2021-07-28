import * as React from "react";
import "@fontsource/open-sans/700.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/lora/400.css";
import "../css/styles.css";
import { graphql } from "gatsby";
import Post from "../components/post";
import Layout from "../components/layout";

// markup
const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter((edge) => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map((edge) => <Post key={edge.node.id} post={edge.node} />);

  return (
    <Layout>
      <main>
        <title>Erik v Kalifornii</title>
        <h1>Erik v Kalifornii</h1>
        <p>
          Představte si, že jste dostali možnost studovat půl roku, v oblasti,
          která je světoznámá, kvůli vašemu koníčku. Tak přesně tohle budu
          dokumentovat, normální život kluka, který miluje programování, v
          Kalifornii, místě technologického nekonečna.
        </p>
        <div className="articleBox">{Posts}</div>
      </main>
      <footer>
        <p>
          Web vznikl jako kařdoroční tradice studentů, kteří odcestují do
          Orindy, díky programu{" "}
          <a href="https://orindaklub.com" className="un">
            Orinda Klubu Tábor
          </a>
        </p>
      </footer>
    </Layout>
  );
};

export default IndexPage;
export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 90)
          frontmatter {
            date(formatString: "D. MMMM YYYY", locale: "cs")
            slug
            title
            featured {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP]
                  layout: CONSTRAINED
                  height: 800
                )
              }
            }
          }
          timeToRead
        }
      }
    }
  }
`;
