import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisible);

        return () => {
            window.removeEventListener('scroll', toggleVisible);
        };
    }, []);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;

        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const display = visible ? 'block' : 'hidden';

    return (
        <div
            className={`${display} p-3 border rounded hover:border-primary hover:text-primary bg-dark fixed right-[24px] bottom-[24px] h-[36px] w-[36px] flex items-center justify-center cursor-pointer`}
            onClick={scrollToTop}
        >
            <FontAwesomeIcon icon={solid('chevron-up')} />
        </div>
    );
}
