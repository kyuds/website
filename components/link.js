import React from "react";

const Link = ({ url, contents }) => {
    return (
        <a className="text-center text-lg text-foreground font-bold font-[family-name:var(--font-geist-mono)] px-3
                      relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-foreground 
                      after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100"
             href={url}>{contents}</a>
    );
};

export default Link;
