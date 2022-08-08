import React, { useState, useEffect } from "react";
type Props = {};
const AmazonWideAds = () => {
    const [width, setWidth] = useState(null);
    useEffect(() => {
        const width = document.getElementById("right_col")?.offsetWidth;
        setWidth(width);
        console.log(width);
    }, []);

    return (
        <div className="section_item">
            <div className="item_header">
                <h4>🧡 ADS</h4>
            </div>
            <div className="item_main ads">
                {width && (
                    <>
                        {width >= 728 ? (
                            <iframe
                                src="https://ads-partners.coupang.com/widgets.html?id=348254&template=banner&trackingCode=AF5174309&subId=&width=728&height=90"
                                width="728" height="90" frameBorder="0" scrolling="no"
                                referrerPolicy="unsafe-url"></iframe>
                        ) : width >= 468 ? (
                            <iframe
                                src="https://ads-partners.coupang.com/widgets.html?id=348254&template=banner&trackingCode=AF5174309&subId=&width=468&height=90"
                                width="468" height="90" frameBorder="0" scrolling="no"
                                referrerPolicy="unsafe-url"></iframe>
                        ) : (
                            <iframe src="https://coupa.ng/cc0PDv" width="100%" height="36" frameBorder="0"
                                    scrolling="no" referrerPolicy="unsafe-url"></iframe>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default AmazonWideAds;
