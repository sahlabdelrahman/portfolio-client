"use client";
import { CSSProperties, memo } from "react";

import DOMPurify from "dompurify";

interface SafeHTMLProps {
    html: string;
    className?: string;
    style?: CSSProperties;
}

const SafeHTML = memo(({ html, className, style }: SafeHTMLProps) => {
    return (
        <div
            className={className}
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
            style={style}
        />
    );
});

SafeHTML.displayName = "SafeHTML";

export default SafeHTML;
