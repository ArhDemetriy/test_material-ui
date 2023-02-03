import { CSSProperties, FC, useCallback, useState } from 'react';
import styles from './Controls.module.scss';
import folder1 from "./ico/folder1.svg";
import folder2 from "./ico/folder2.svg";
import doc from "./ico/doc.svg";
import trash from "./ico/trash.svg";

interface InputLinesProps {
    /**
     * @example
     * ['invisible', 'short']
     */
    readonly linesMask?: [...('invisible' | 'long')[], 'short' | 'long']
}

const InputLines: FC<InputLinesProps> = p => {
    if (!p.linesMask?.length)
        return null

    const className = `${styles['controls__line']} ${styles['controls__line-input']}`

    const classes: string[] = p.linesMask.map(style => {
        if (style === 'invisible')
            return `${className} ${styles['controls__line-input-invisible']}`
        if (style === 'short')
            return `${className} ${styles['controls__line-input-short']}`
        return `${className} ${styles['controls__line-input-long']}`
    })

    classes[0] += ' ' + styles['controls__line-input-first']

    return <>{classes
        .map((className, i) => <div className={className} key={i} />)}
    </>
}

export interface ControlsProps extends InputLinesProps {
    readonly existOutputLine?: boolean
}

const ICO_HEIGHT = "--ico_height" as const
const ICO_WIGHT = "--ico_width" as const

function getIcoSrc(props: Pick<ControlsProps, 'linesMask'>) {
    let result = folder1
    if (props.linesMask?.length === 1)
        result = folder2
    else if (props.linesMask?.length === 2)
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
    }, []) // нужно только первое срабатывание

    const [showButton, setShowButton] = useState(false)
    const switchShowButton = useCallback<React.ChangeEventHandler<HTMLInputElement>>(e => setShowButton(e.currentTarget.checked), [setShowButton])

    const isChildren = !!p.linesMask?.length
    const icoSrc = getIcoSrc(p)

    return <div style={sizeConstants as CSSProperties} className={styles['controls']}>
        <InputLines linesMask={p.linesMask} />

        {isChildren && <div className={styles['controls__wrapper']}>
            <div className={`${styles['controls__line']} ${styles['controls__line-dash']}`} /></div>}

        {p.existOutputLine && <div className={styles['controls__wrapper']}>
            <div className={`${styles['controls__line']} ${styles['controls__line-output']}`} /></div>}

        <label className={styles['controls__images']}>
            <input className={styles['controls__images__button_switch']} type="checkbox" checked={showButton} onChange={switchShowButton} name="buttons" />

            {showButton && <div className={styles['controls__images__background']} />}
            <img src={icoSrc} onLoad={onLoad} className={styles['controls__images__main']} alt="" />

            <button className={styles['controls__images__button']} disabled={!showButton} type={"button"}>
                <img src={trash} alt="" />
            </button>
        </label>
    </div>
}