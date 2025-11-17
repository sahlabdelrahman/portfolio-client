// TODO: Temporary component for testing page transitions.
// Will be refined later with final UI updates and translated labels.
"use client";

import Link from "next/link";
import { useTransitionRouter } from "next-view-transitions";
import { useLocale } from "next-intl";

import { pageAnimation } from "@/utils/constants/viewTransition";

import { navRoutes } from "./config";

const Navbar = () => {
    const router = useTransitionRouter();
    const locale = useLocale();

    return (
        <nav>
            <ul>
                {navRoutes.map((route) => {
                    const href = `/${locale}${route.url}`;

                    return (
                        <li key={route.label}>
                            <Link
                                href={href}
                                onClick={(e) => {
                                    // allow normal browser behavior
                                    if (
                                        e.metaKey ||
                                        e.ctrlKey ||
                                        e.shiftKey ||
                                        e.altKey ||
                                        e.button !== 0
                                    ) {
                                        return;
                                    }

                                    e.preventDefault();
                                    router.push(href, {
                                        onTransitionReady: pageAnimation,
                                    });
                                }}
                            >
                                {route.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Navbar;
