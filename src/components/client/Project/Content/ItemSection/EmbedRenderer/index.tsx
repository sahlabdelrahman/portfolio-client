/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { memo, useEffect, useRef, useCallback } from "react";
import DOMPurify from "dompurify";

import { ProjectItemProps } from "@/app/[locale]/(client)/projects/[slug]/types";
import { getEmbedUrl } from "./config";

import NoData from "@/components/global/NoData";
import styles from "./styles.module.scss";

interface EmbedProps {
    item: ProjectItemProps;
}

const EmbedRenderer = memo(function EmbedRenderer({ item }: EmbedProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const isInstagram = item.url?.includes("instagram.com");
    const isTwitter = item.url?.includes("twitter.com");
    const isFacebook = item.url?.includes("facebook.com");

    const loadScript = useCallback((src: string, id?: string) => {
        // Prevent adding the same script multiple times
        if (id && document.getElementById(id)) return;
        if (!id && document.querySelector(`script[src="${src}"]`)) return;

        const script = document.createElement("script");
        if (id) script.id = id;
        script.src = src;
        script.async = true;
        document.body.appendChild(script);
    }, []);

    useEffect(() => {
        if (!item.url) return;

        if (isInstagram) {
            loadScript("https://www.instagram.com/embed.js");
        }

        if (isTwitter) {
            loadScript("https://platform.twitter.com/widgets.js");
        }

        if (isFacebook) {
            loadScript(
                "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v16.0",
                "facebook-jssdk"
            );
        }

        // Trigger SDK parsing for social media embeds
        const timeout = setTimeout(() => {
            if (isInstagram && (window as any).instgrm?.Embeds?.process) {
                (window as any).instgrm.Embeds.process();
            }

            if (isTwitter && (window as any).twttr?.widgets?.load) {
                (window as any).twttr.widgets.load();
            }

            if (isFacebook && (window as any).FB?.XFBML?.parse) {
                (window as any).FB.XFBML.parse();
            }
        }, 300); // Delay to ensure DOM is updated

        return () => clearTimeout(timeout);
    }, [item.url, isInstagram, isTwitter, isFacebook, loadScript]);

    // ----------- Handle Social Media Embeds -----------
    if (isInstagram || isTwitter || isFacebook) {
        return (
            <div ref={containerRef} className={styles.socialMediaWrapper}>
                {isInstagram && (
                    <blockquote
                        className="instagram-media"
                        data-instgrm-permalink={item.url}
                        data-instgrm-version="14"
                        style={{
                            width: "100%",
                            margin: "0 auto",
                            minWidth: "326px",
                        }}
                    />
                )}

                {isTwitter && (
                    <blockquote className="twitter-tweet">
                        <a href={item.url}></a>
                    </blockquote>
                )}

                {isFacebook && <div className="fb-post" data-href={item.url} />}
            </div>
        );
    }

    // ----------- Handle Generic iframe Embeds (YouTube, Vimeo, etc.) -----------
    const embedUrl = getEmbedUrl(item.url);

    if (!embedUrl) {
        return (
            <NoData
                text={`Unsupported embed platform or malformed URL: ${item.url}`}
            />
        );
    }

    const safeUrl = DOMPurify.sanitize(embedUrl);

    return (
        <div
            className={styles.embedWrapper}
            style={{
                background: item.config?.background,
                paddingBlock: item.config?.spaceInTopAndBottom,
            }}
        >
            <iframe
                key={safeUrl}
                className={styles.embedIframe}
                src={safeUrl}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={item.caption?.content || "Embedded content"}
                aria-label={
                    item.ariaLabel ??
                    item.caption?.content ??
                    "Embedded social media or external content"
                }
            />
        </div>
    );
});

export default EmbedRenderer;
