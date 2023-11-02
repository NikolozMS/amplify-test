import { Arrow } from "../icons/Arrow";
import { Pagination } from "@/types/ProductType";

export default function Pagination({
	fetchNextPage,
	fetchPreviousPage,
	hasNextPage,
	hasPreviousPage,
	meta = {
		current_page: 0,
		last_page: 0,
		total: 0,
		per_page: 0,
	},
}: {
	fetchNextPage: () => void;
	fetchPreviousPage: () => void;
	hasNextPage: boolean;
	hasPreviousPage: boolean;
	meta: Pagination;
}) {
	const { current_page = 0, last_page = 0, total = 0 } = meta;
	return (
		<div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
			<div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
				<div>
					<p className="text-sm text-gray-700">
						Showing <span className="font-medium">{current_page}</span> to{" "}
						<span className="font-medium">{last_page}</span> of{" "}
						<span className="font-medium">{total}</span> results
					</p>
				</div>
				<div>
					<nav
						className="isolate inline-flex -space-x-px rounded-md shadow-sm"
						aria-label="Pagination"
					>
						<button
							onClick={fetchPreviousPage}
							disabled={!hasPreviousPage}
							className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
						>
							<span className="sr-only">Previous</span>
							<Arrow
								style={{ transform: "rotate(180deg)" }}
								aria-hidden="true"
							/>
						</button>

						<button
							onClick={fetchNextPage}
							className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
							disabled={!hasNextPage}
						>
							<span className="sr-only">Next</span>
							<Arrow aria-hidden="true" />
						</button>
					</nav>
				</div>
			</div>
		</div>
	);
}
