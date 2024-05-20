/* eslint-disable @next/next/no-img-element */
// the line aboe is added to disable the eslint warning for the img tag, since we are not using the next/image component here <Image>
import React from "react";
import Link from "next/link";
import { urlFor } from "../../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            width={250}
            height={250}
            className="product-image"
            alt={name}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">
            $
            {process.toLocaleString("en-US", {
              maximumFractionDigits: 2,
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
