import { CSSProperties, FC, useEffect, useRef, useState } from 'react';
import { IncludeClassName } from '../../types/reactTypes';
import styles from './Controls.module.scss';
import folder1 from "./ico/folder1.svg";
import folder2 from "./ico/folder2.svg";
import doc from "./ico/doc.svg";

export interface ControlsProps{
    readonly level?: 0 | 1 | 2
    readonly existNextItem?: boolean
}

const ICO_HEIGHT = "--ico_height" as const
const ICO_WIGHT = "--ico_width" as const

export const Controls: FC<IncludeClassName<ControlsProps>> = p => {
    let icoSrc = folder1
    if (p.level === 1)
        icoSrc = folder2
    else if (p.level === 2)
        icoSrc = doc

    // вынесение размеров иконки в корень элемента
    // необходимо для вычесления отступов линий

    // сделано так сложно, потому-что у иконок прозрачный центр и нельзя начинать линии от центра картинок.
    const icoRef = useRef<HTMLImageElement>(null)
    const [sizeConstants, setSizeConstants] = useState({ [ICO_HEIGHT]: '0px', [ICO_WIGHT]: '0px' })

    useEffect(() => {
        if (icoRef.current == null)
            return

        const { height: rawHeight, width: rawWidth } = window.getComputedStyle(icoRef.current)

        let newSize: Partial<typeof sizeConstants> = {}
        if (rawHeight != sizeConstants[ICO_HEIGHT])
            newSize[ICO_HEIGHT] = rawHeight
        if (rawWidth != sizeConstants[ICO_WIGHT])
            newSize[ICO_WIGHT] = rawWidth

        if (!Object.keys(newSize).length)
            return

        setSizeConstants({ ...sizeConstants, ...newSize })

    }, [icoSrc, icoRef])

    return <td className={p.requiredClass}>
        <div style={sizeConstants as CSSProperties} className={styles['controls']}>
            <div className={`${styles['controls__wrapper']} ${styles['controls__wrapper-left']}`}>
                <div className={styles['controls__wrapper']}>
                    <div className={`${styles['controls__line']} ${styles['controls__line-horizontal']}`} />
                </div>
                <div className={`${styles['controls__wrapper']} ${styles['controls__wrapper-bottom']}`}>
                    <div className={styles['controls__wrapper']}>
                        <div className={`${styles['controls__line']} ${styles['controls__line-vertical']}`} />
                    </div>
                    <img ref={icoRef} src={icoSrc} className={styles['controls__image']} alt="" />
                </div>
            </div>
        </div>
    </td>
}