import { memo } from "react";

import VideoComp from "@/components/global/VideoComp";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

const VideoRenderer = memo(function VideoRenderer({
    item,
}: {
    item: ProjectItemProps;
}) {
    return <VideoComp {...item} />;
});

export default VideoRenderer;
