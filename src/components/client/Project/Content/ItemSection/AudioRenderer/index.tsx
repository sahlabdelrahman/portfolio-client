import { memo } from "react";

import AudioComp from "@/components/global/AudioComp";
import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";

const AudioRenderer = memo(function AudioRenderer({
    item,
}: {
    item: ProjectItemProps;
}) {
    return <AudioComp {...item} />;
});

export default AudioRenderer;
