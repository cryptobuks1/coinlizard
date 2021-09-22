import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export function Percent({ p }) {
    const className = p >= 0 ? 'text-primary inline-flex items-center' : 'inline-flex items-center text-danger';
    const icon = p >= 0 ? solid('turn-up') : solid('turn-down');

    return (
        <div className={className}>
            <div className="mr-1">{`${p.toFixed(1)}%`}</div>
            <FontAwesomeIcon icon={icon} />
        </div>
    );
}
