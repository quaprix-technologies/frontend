import { useMemo } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import getConfig from "../config.js";

const useCloudinary = () => {
  return useMemo(() => {
    return new Cloudinary({
      cloud: {
        cloudName: getConfig().cloudinaryCloudName,
      },
    });
  }, []);
};

export default useCloudinary;
