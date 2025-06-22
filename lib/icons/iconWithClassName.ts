/* 
    Neglecting to wrap icons with iconWithClassName will prevent you from being 
    able to update the color or opacity props via the className prop. 
*/

import type { LucideIcon } from 'lucide-react-native';
import { cssInterop } from 'nativewind';

export function iconWithClassName(icon: LucideIcon) {
cssInterop(icon, {
    className: {
    target: 'style',
    nativeStyleToProp: {
        color: true,
        opacity: true,
    },
    },
});
}

/* 
    Create a file for each icon in ~/lib/icons/
    Wrap your icon components with iconWithClassName to add a class name to the icon.

    First, create a new file in the ~/lib/icons/ directory with the name of the LucideIcon.

    Then, in each file:

    1. Import the Icon from LucideIcon
    2. Import the iconWithClassName function
    3. Call the iconWithClassName function and pass the icon as its argument
    4. Export the Icon as a named export
*/