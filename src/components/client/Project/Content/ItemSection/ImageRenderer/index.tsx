import { memo } from "react";

import ImageComponent from "@/components/global/ImageComponent";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

const ImageRenderer = memo(function ImageRenderer({
    item,
}: {
    item: ProjectItemProps;
}) {
    return <ImageComponent {...item} />;
});

export default ImageRenderer;
