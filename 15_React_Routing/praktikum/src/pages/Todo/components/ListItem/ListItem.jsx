import style from "./ListItem.module.css";
const LisItem = ({ item }) => {
	return <div className={`ps-2 ${style.item}`}>{item.title}</div>;
};

export default LisItem;
