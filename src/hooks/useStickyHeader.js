import { useState, useEffect, useRef, useCallback } from 'react';

const useStickyHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const tableRef = useRef(null);

    const handleWindowScroll = useCallback(
        ({ top }) => {
            if (top <= 0) {
                !isSticky && setIsSticky(true);
            } else {
                isSticky && setIsSticky(false);
            }
        },
        [isSticky]
    );

    useEffect(() => {
        const handleScroll = () => handleWindowScroll(tableRef.current.getBoundingClientRect());
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isSticky]);

    return { tableRef, isSticky };
};

export default useStickyHeader;
