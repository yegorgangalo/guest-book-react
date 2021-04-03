import { ImSpinner2 } from 'react-icons/im';
import s from './Spinner.module.css'

export default function Spinner({classNames=""}) {
    return <ImSpinner2 className={`${s.iconSpin} ${classNames}`}/>;
}