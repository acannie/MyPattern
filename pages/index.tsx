"use client";

import React from 'react'
import HeadInfo from "./HeadInfo";
import PrivacyPolicy from './PrivacyPolicy';


// `page/index.tsx` is the UI for the `/` URL
export default function Page() {
    return (
        <>
            <HeadInfo />
            <div>
                <PrivacyPolicy />
            </div>
        </>

    );
}