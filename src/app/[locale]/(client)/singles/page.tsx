import ItemLayout from "@/components/global/ItemsLayout/ItemLayout";

import MasonryGrid from "@/components/global/MasonryGrid";

import { ItemProps } from "@/types/client/global";

import { dummySingleImages } from "./config";

export default function Singles() {
    return (
        <main>
            <MasonryGrid>
                {dummySingleImages?.map((item: ItemProps) => (
                    <ItemLayout key={item?.id} item={item} />
                ))}
            </MasonryGrid>
        </main>
    );
}
