import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import SecondaryLayout from "../components/layout/secondary/secondary"
import CategoryBanner from "../components/category-banner/category-banner"
import ProductGrid from "../components/product-grid/product-grid"
import { Box, Grid, Heading, jsx, Button } from "theme-ui"

const CategoryPage = ({ data, pageContext }) => {
  const { image, products } = data.shopifyCollection
  const productsType = pageContext?.handle
  const title = productsType.charAt(0).toUpperCase() + productsType.slice(1)
  const inlineStyle = {
    backgroundColor: "rgba(144, 238, 144, 0.3)",
    padding: "0 3px 0 3px",
    fontFamily: "Courier",
    fontWeight: "400",
  }
  return (
    <SecondaryLayout>
      <SEO title={title} />
      <br />
      <Heading as="h3">
        All {products.length} <span style={inlineStyle}>{productsType}</span>{" "}
        Items
      </Heading>
      <ProductGrid id="category" products={products} isCategoryProduct={true} />
    </SecondaryLayout>
  )
}

export const query = graphql`
  query($handle: String!) {
    shopifyCollection(handle: { eq: $handle }) {
      image {
        id
        src
        localFile {
          childImageSharp {
            fluid(maxWidth: 910) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
      products {
        id
        title
        handle
        createdAt
        shopifyId
        availableForSale
        variants {
          id
          price
          priceV2 {
            amount
            currencyCode
          }
          shopifyId
          availableForSale
        }
        images {
          id
          originalSrc
          localFile {
            childImageSharp {
              fluid(maxWidth: 910, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default CategoryPage
