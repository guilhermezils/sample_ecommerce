/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { client, urlFor } from "../../lib/client";
import { Product } from "../..components";

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, sku, ingredients, weight, delivery } =
    product;
  const [index, setIndex] = useState(0);

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              alt={name}
              className="product-detail-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
