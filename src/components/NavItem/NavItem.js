

import { Link } from 'react-router-dom';

export default function NavItem(props){
    return (
    <Link className={`${props.styling}`}  to={`${props.novToLink}`}>{props.title}</Link>
  );
}
