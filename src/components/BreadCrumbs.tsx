import { memo } from "react";
import { Arrow } from "./icons/Arrow";

const commonStyle = "text-[1.2rem] font-neue";
const grayTextClassname = "text-black-600 " + commonStyle;

export const BreadCrumb = memo(() => (
	<div className="hidden md:flex items-center justify-start">
		<span className={grayTextClassname}>მთავარი</span>
		<Arrow />
		<span className={grayTextClassname}>ძიება</span>
		<Arrow />
		<span className={`text-main ${commonStyle}`}>იყიდება</span>
	</div>
));

BreadCrumb.displayName = "BreadCrumb";
