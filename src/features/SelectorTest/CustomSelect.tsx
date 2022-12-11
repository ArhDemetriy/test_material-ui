import { FC } from 'react';
import styles from './CustomSelect.module.scss';

interface CustomSelectProps{
    isChild?: boolean
}

export const CustomSelect: FC<CustomSelectProps> = p => {
    let className = styles['section']
    if (p.isChild) className += ` ${styles['section__child']}`

    return <select className={className}>
    </select>
}