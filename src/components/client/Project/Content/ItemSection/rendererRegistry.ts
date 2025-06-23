import { FC, lazy, LazyExoticComponent } from "react";

import { itemTypes } from "../config";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

export const rendererRegistry: Record<
    string,
    LazyExoticComponent<FC<{ item: ProjectItemProps }>>
> = {
    [itemTypes.image]: lazy(() => import("./ImageRenderer")),
    [itemTypes.video]: lazy(() => import("./VideoRenderer")),
    [itemTypes.text]: lazy(() => import("./TextRenderer")),
    [itemTypes.embed]: lazy(() => import("./EmbedRenderer")),
    [itemTypes.grid]: lazy(() => import("./PhotoGridRenderer")),
    [itemTypes.imageOrVideoAndText]: lazy(
        () => import("./ImageOrVideoAndTextRenderer")
    ),
    [itemTypes.slider]: lazy(() => import("./SliderRenderer")),
    [itemTypes.audio]: lazy(() => import("./AudioRenderer")),
};
