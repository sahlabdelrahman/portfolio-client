import ItemsLayout from "@/components/global/ItemsLayout";
import ItemLayout from "@/components/global/ItemsLayout/ItemLayout";

import { ItemProps } from "@/types/client/global";

import { items } from "../../config";

export default function Projects() {
    return (
        <main>
            <ItemsLayout>
                {items?.map((item: ItemProps) => (
                    <ItemLayout
                        key={item?.id}
                        item={item}
                        path={`/books/${item?.id}`}
                    />
                ))}
            </ItemsLayout>
        </main>
    );
}
