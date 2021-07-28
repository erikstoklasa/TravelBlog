import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Post = ({ post }) => {
  const featuredImage = getImage(post.frontmatter.featured);
  return (
    <div className="article">
      <Link to={post.frontmatter.slug}>
        <GatsbyImage image={featuredImage} alt={post.frontmatter.featured} />
        <h2 className="un">{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
        <div className="meta">
          <span>
            {post.frontmatter.date} - {post.timeToRead} min
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Post;
