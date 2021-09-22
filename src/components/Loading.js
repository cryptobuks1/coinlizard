import React from 'react';

export default function Loading() {
    return (
        <div className=" flex justify-center items-center m-10">
            <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-primary" />
        </div>
    );
}
