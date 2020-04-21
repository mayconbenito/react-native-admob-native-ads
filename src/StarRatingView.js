import React, { useContext, createRef } from "react";
import { Platform, findNodeHandle } from "react-native";
import { NativeAdContext, nativeAdView } from "./context";
import StarRating from "react-native-star-rating";
const starRatingRef = createRef();

const StarRatingView = (props) => {
  const { nativeAd, setNativeAd } = useContext(NativeAdContext);

  const _onLayout = () => {
    let handle = findNodeHandle(starRatingRef.current);
    nativeAdView.current?.setNativeProps({
      starrating: handle,
    });
  };

  return nativeAd && nativeAd.rating && nativeAd.rating > 0.5 ? (
    <StarRating
      {...props}
      ref={starRatingRef}
      rating={nativeAd ? nativeAd.rating : null}
      onLayout={_onLayout}
    />
  ) : null;
};

export default StarRatingView;
