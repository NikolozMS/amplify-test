import Image from "next/image";

import { CarFeaturesAndPrice } from "./CarFeaturesAndPrice";
import { TitleAndLocation } from "./TitleAndLocation";
import { StatusAndViews } from "./StatusAndViews";
import { MobileHeading } from "./MobileHeading";
import { MobileCardFooter } from "./MobileCardFooter";
import { MobileCarFeaturesAndLocations } from "./MobileCarFeaturesAndLocations";

import { ProductType } from "@/types/ProductType";
import { InfiniteQueryObserverResult } from "@tanstack/react-query";
import { useCallback } from "react";
import { ProductsResponse } from "@/services/getProducts";

export const Card = ({
	item,
	hasMore,
	isLast,
	onLoadMoreClick,
}: {
	item: ProductType;
	hasMore?: boolean;
	isLast: boolean;
	onLoadMoreClick: () => Promise<
		InfiniteQueryObserverResult<ProductsResponse, unknown>
	>;
}) => {
	const handleObserver = useCallback(
		(e: HTMLAnchorElement) => {
			const observer = new IntersectionObserver(async (entries) => {
				const { isIntersecting } = entries[0];

				if (isIntersecting && hasMore) {
					await onLoadMoreClick();
					observer.unobserve(e);
				}
			});

			if (e) {
				observer.observe(e);
			}
		},
		[hasMore]
	);

	return (
		<article
			ref={isLast ? handleObserver : null}
			className="flex flex-col w-full p-[1.6rem] duration-100 hover:bg-green-100 border border-solid border-white hover:border-green-110 pb-7 md:pb-[1.6rem] md:rounded-xl bg-white md:w-[780px]"
		>
			<article className="flex flex-col md:flex-row w-full gap-[1.6rem]">
				<MobileHeading
					usd={item.price_usd}
					gel={item.price_value}
					year={item.prod_year}
					customs_passed={item.customs_passed}
					status_id={item.status_id}
				/>

				<figure className="w-[343px] md:w-[178px]">
					<Image
						width={178}
						height={140}
						src={`https://static.my.ge/myauto/photos/${item.photo}/thumbs/${item.car_id}_1.jpg?v=${item.photo_ver}`}
						alt=""
						className="rounded-3xl md:rounded-xl"
						sizes="100vw"
						style={{
							width: "100%",
							height: "auto",
						}}
					/>
				</figure>
				<section className="hidden md:flex flex-1 flex-col">
					<TitleAndLocation
						prod_year={item.prod_year}
						customs_passed={item.customs_passed}
					/>

					<CarFeaturesAndPrice item={item} />
					<StatusAndViews
						views={item.views}
						status_id={item.status_id}
						order_date={item.order_date}
					/>
				</section>
				<section className="md:hidden flex flex-1 flex-col">
					<MobileCarFeaturesAndLocations item={item} />
					<MobileCardFooter views={item.views} order_date={item.order_date} />
				</section>
			</article>
			{/* <footer>chips goes here if exists</footer> */}
		</article>
	);
};
