import { CSSProperties, FC, useCallback, useState } from 'react';
import styles from './Controls.module.scss';
import folder1 from "./ico/folder1.svg";
import folder2 from "./ico/folder2.svg";
import doc from "./ico/doc.svg";

export interface ControlsProps{
    readonly countInputLines?: 0 | 1 | 2
    readonly lastInputLineIsLong?: boolean
    readonly existOutputLine?: boolean
}

const InputLines: FC<Pick<ControlsProps, 'countInputLines' | 'lastInputLineIsLong'>> = p => {
    if (!p.countInputLines)
        return null

    const className = `${styles['controls__line']} ${styles['controls__line-input']}`

    const classes: string[] = []
    for (let i = 0; i < p.countInputLines - 1; i++)
        classes.push(`${className} ${styles['controls__line-input-long']}`)

    if (p.lastInputLineIsLong)
        classes.push(`${className} ${styles['controls__line-input-long']} ${styles['controls__line-input-last']}`)
    else
        classes.push(`${className} ${styles['controls__line-input-short']} ${styles['controls__line-input-last']}`)

    return <>{classes
        .map((className, i) => <div className={className} key={i} />)}
    </>
}

const ICO_HEIGHT = "--ico_height" as const
const ICO_WIGHT = "--ico_width" as const

function getIcoSrc(props: Pick<ControlsProps, 'countInputLines'>) {
    let result = folder1
    if (props.countInputLines === 1)
        result = folder2
    else if (props.countInputLines === 2)
        result = doc
    return result
}

export const Controls: FC<ControlsProps> = p => {
    // вынесение размеров иконки в корень элемента
    // необходимо для вычесления отступов линий

    // сделано так сложно, потому-что у иконок прозрачный центр и нельзя начинать линии от центра картинок.
    const [sizeConstants, setSizeConstants] = useState({ [ICO_HEIGHT]: '0px', [ICO_WIGHT]: '0px' })

    const onLoad = useCallback<React.ReactEventHandler<HTMLImageElement>>(e => {
        const { height: rawHeight, width: rawWidth } = window.getComputedStyle(e.currentTarget)

        let newSize: Partial<typeof sizeConstants> = {}
        if (rawHeight !== sizeConstants[ICO_HEIGHT])
            newSize[ICO_HEIGHT] = rawHeight
        if (rawWidth !== sizeConstants[ICO_WIGHT])
            newSize[ICO_WIGHT] = rawWidth

        if (!Object.keys(newSize).length)
            return

        setSizeConstants({ ...sizeConstants, ...newSize })
    }, [])

    const isChildren = !!p.countInputLines
    const icoSrc = getIcoSrc(p)

    return <div style={sizeConstants as CSSProperties} className={styles['controls']}>
        <InputLines countInputLines={p.countInputLines} lastInputLineIsLong={p.lastInputLineIsLong} />

        {isChildren && <div className={styles['controls__wrapper']}>
            <div className={`${styles['controls__line']} ${styles['controls__line-dash']}`} /></div>}

        {p.existOutputLine && <div className={styles['controls__wrapper']}>
            <div className={`${styles['controls__line']} ${styles['controls__line-output']}`} /></div>}

        <div className={styles['controls__wrapper']}>
            <div className={styles['controls__background_images']} />
            <div className={`${styles['controls__wrapper']} ${styles['controls__wrapper-bottom']}`}>
                <img src={icoSrc} onLoad={onLoad} className={styles['controls__image']} alt="" /></div>
        </div>
    </div>
}