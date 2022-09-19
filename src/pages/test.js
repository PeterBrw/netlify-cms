import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql, useStaticQuery } from 'gatsby';

const Test = () => {
    const data = useStaticQuery(graphql`
        query Soc2Query {
            inventory: file(relativePath: { eq: "profile-pic.png" }) {
                childImageSharp {
                    gatsbyImageData(width: 1080, layout: CONSTRAINED)
                }
            }
        }
    `);

    return (
        <>
            <h1 className='text-white bg-blue-900'>Test CSS</h1>
            <GatsbyImage alt='' image={data.inventory.childImageSharp.gatsbyImageData} className="h-48 w-96" />
        </>
    );
};

export default Test;
