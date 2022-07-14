
export function getViewMode(screenWidth) {
    switch(true) {
        case screenWidth < 768: 
            return "mobile";
        case screenWidth < 1100:
            return "wacky";
        default:
            return "desktop"
    }
}
