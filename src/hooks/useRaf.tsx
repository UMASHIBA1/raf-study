import { RefObject, useEffect, useRef } from "react";

const useRaf = <T extends Element, >(animationFunc: (ref: RefObject<T>, progressTime: number) => void, animationDuration: number) => {
    const ref = useRef<T>(null);

    let startTime: number | null = null;

    const _animationControll = (timestamp: number) => {
        if (startTime === null) {
            startTime = timestamp;
        }

        if (ref.current !== null && startTime !== null) {
            const progressTime = timestamp - startTime;
            animationFunc(ref, progressTime);
            if (progressTime < animationDuration) {
                requestAnimationFrame(_animationControll);
            }
        }
    }

    useEffect(() => {
        requestAnimationFrame(_animationControll);
    }, [ref]);

    return [ref] as [typeof ref];

}

export default useRaf;