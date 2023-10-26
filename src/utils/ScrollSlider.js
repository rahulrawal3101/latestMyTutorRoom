import React, { useState, useEffect, useRef } from 'react';

const ScrollableContainer = () => {
    const containerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [items, setItems] = useState(Array.from({ length: 10 }, (_, index) => index + 1));

    useEffect(() => {
        const container = containerRef.current;
        let scrollInterval;

        const startScrolling = () => {
            scrollInterval = setInterval(() => {
                container.scrollTop += 1; // Adjust the scroll speed as desired

                if (container.scrollTop >= container.scrollHeight - container.offsetHeight) {
                    // Reached the end of the scrollable content
                    setItems((prevItems) => {
                        const shiftedItems = prevItems.slice(1); // Remove the first item
                        shiftedItems.push(prevItems[0]); // Add the first item to the end
                        return shiftedItems;
                    });
                    container.scrollTop = 0; // Reset the scroll position
                }
            }, 20); // Adjust the interval (in milliseconds) as desired for smooth scrolling

            // Stop scrolling when hovering over items
            container.addEventListener('mouseenter', () => {
                clearInterval(scrollInterval);
                setIsHovered(true);
            });

            // Resume scrolling when not hovering over items
            container.addEventListener('mouseleave', () => {
                setIsHovered(false);
                startScrolling();
            });
        };

        startScrolling();

        return () => {
            clearInterval(scrollInterval);
            container.removeEventListener('mouseenter', () => { });
            container.removeEventListener('mouseleave', () => { });
        };
    }, []);

    return (
        <div
            ref={containerRef}
            style={{
                height: '300px', // Adjust the container height as desired
                overflowX: 'scroll',
                border: '1px solid #ccc',
                padding: '10px',
            }}
        >
            {/* Your scrollable items */}
            {items.map((item, index) => (
                <div
                    key={index}
                    style={{
                        height: '50px', // Adjust the item height as desired
                        background: isHovered ? 'yellow' : 'white',
                        marginBottom: '10px',
                    }}
                >
                    Item {item}
                </div>
            ))}
        </div>
    );
};

export default ScrollableContainer;
