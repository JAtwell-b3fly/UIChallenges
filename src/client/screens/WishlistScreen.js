import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderLayout } from '../../components/Layouts/Header'; //import custom created header component
import { ProductList } from '../../components/Forms/ProductList'; //import custom created wishlish catalogbox component
import { CLabel } from '../../components/common/Label'; //import the custom created Heading Label section component
import { Group2Layout } from '../../Screens/Layouts/Group2LayoutTest';

import styles from '../src/shared/WishlistScreenStyles.css'; //import the custom created stylesheet

//Actions
const filterComponent = document.querySelector('#wishlist-filter');

filterComponent.addEventListener('change', () => {
  // Get the selected filter options
  const selectedOptions = getSelectedOptions(filterComponent);

  // Update the products displayed in the catalog box
  WishlistCatalogBox.updateProducts(selectedOptions);
});

const paginationControl = document.querySelector('#wishlist-pagination');

paginationControl.addEventListener('swipe', (event) => {
  // Determine the direction of the swipe (left or right)
  const direction = event.detail.direction;

  // Get the current page number and total number of pages
  const currentPage = WishlistCatalogBox.getCurrentPage();
  const totalPages = WishlistCatalogBox.getTotalPages();

  // Update the displayed products in the catalog box based on the swipe direction
  if (direction === 'left' && currentPage < totalPages) {
    WishlistCatalogBox.showNextPage();
  } else if (direction === 'right' && currentPage > 1) {
    WishlistCatalogBox.showPreviousPage();
  }
});

export default function WishlistScreen () {
  return(
    <Group2Layout headercomponent={<HeaderLayout />}
                  headinglabel={<CLabel />}
                  catalogboxsection={<ProductList />}
    />
  );
}


