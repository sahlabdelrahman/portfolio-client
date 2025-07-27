"use client";

import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

import {
    BookConfigProps,
    BookItemProps,
} from "@/app/[locale]/(client)/books/[slug]/types";

import styles from "./styles.module.scss";
import ImageComponent from "@/components/global/ImageComponent";

interface FlipBookProps {
    config: BookConfigProps;
    items: BookItemProps[];
}

const FlipBook = ({ config, items }: FlipBookProps) => {
    // TODO: we need to change width and height with more suitable values also update the style of this comp
    const { width = 400, height = 500, withSound } = config;
    const { container, flipBook } = styles;

    const audioRef = useRef<HTMLAudioElement>(null);
    const bookRef = useRef(null);

    const handleFlip = () => {
        if (withSound && audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    // We need loader here
    // if (!imagesLoaded) return <div className={loader}>Loading book...</div>;

    return (
        <div className={container}>
            <HTMLFlipBook
                width={width}
                height={height}
                showCover
                mobileScrollSupport
                drawShadow={false}
                ref={bookRef}
                onFlip={handleFlip}
                className={flipBook}
            >
                {items.map((item) => (
                    <ImageComponent key={item.id} {...item} />
                ))}
            </HTMLFlipBook>
            {/* We need audio here */}
            {withSound && (
                <audio ref={audioRef} src="/sounds/flip.mp3" preload="auto" />
            )}
        </div>
    );
};

export default FlipBook;
