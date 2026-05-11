/**
 * Returns the [x, y, rect] coordinate where the PointerEvent occured inside the passed Node
 */
export default function getClickCoordinate(event: PointerEvent | MouseEvent, node: HTMLElement): [number, number, DOMRect] {
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    return [x, y, rect];
}
