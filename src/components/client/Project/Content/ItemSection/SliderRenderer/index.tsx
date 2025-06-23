"use client";

import { memo } from "react";

import Slider from "@/components/global/Slider";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

interface SliderRendererProps {
    item: ProjectItemProps;
}

const SliderRenderer = memo(function SliderRenderer({
    item,
}: SliderRendererProps) {
    if (!item?.items || item.items.length === 0) return null;

    return <Slider {...item?.config} items={item.items} />;
});

export default SliderRenderer;
