

import { Link } from 'react-router-dom';

export default function NavItem(props){
    return (
    <Link className={`${props.styling} text-lightColor`}  to={`${props.novToLink}`}>{props.title.toLocaleUpperCase()}</Link>
  );
}
