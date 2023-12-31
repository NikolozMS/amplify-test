export type ProductType = {
	abs: boolean;
	active_ads: number;
	airbags: number;
	alarm: boolean;
	auction: boolean;
	auction_has_key: number;
	back_camera: boolean;
	board_comp: boolean;
	car_desc: string;
	car_id: number;
	car_model: string;
	car_run: number;
	car_run_dim: number;
	car_run_km: number;
	category_id: number;
	central_lock: boolean;
	chair_warming: boolean;
	changable: boolean;
	checked: boolean;
	checked_for_duplicates: boolean;
	client_name: string;
	client_phone: number;
	climat_control: boolean;
	color_id: number;
	comfort_features: number[];
	condition_type_id: number;
	conditioner: boolean;
	currency_id: number;
	customs_passed: boolean;
	cylinders: number;
	daily_views: { views: number; product_id: number; insert_Date: string };
	dealerId: number;
	dealer_title: string;
	dealer_user_id: number;
	disks: boolean;
	door_type_id: number;
	drive_type_id: number;
	el_starter: number;
	el_windows: boolean;
	engine_volume: number;
	esd: boolean;
	first_deposit: number;
	for_rent: boolean;
	fuel_type_id: number;
	gear_type_id: number;
	has_catalyst: number;
	has_logo: number;
	has_predicted_price: boolean;
	has_turbo: boolean;
	hatch: boolean;
	hdd: number;
	hours_used: number;
	hp: number;
	hydraulics: boolean;
	inspected_in_greenway: boolean;
	is_auction: number;
	is_payd: boolean;
	lang_type_id: number;
	leather: boolean;
	license_number: string;
	location_id: number;
	logo_ver: number;
	man_id: number;
	map_lat: number;
	map_long: number;
	map_title: string;
	model_id: number;
	nav_system: boolean;
	obstacle_indicator: boolean;
	order_date: string;
	order_number: number;
	paid_add: number;
	parent_loc_id: number;
	photo: string;
	photo_ver: number;
	pic_number: number;
	pred_first_breakpoint: number;
	pred_max_price: number;
	pred_min_price: number;
	pred_second_breakpoint: number;
	predicted_price: string;
	price: number;
	price_usd: number;
	price_value: number;
	primary_damage_type: number;
	prod_month: number;
	prod_year: number;
	prom_color: number;
	rent_daily: boolean;
	rent_driver: boolean;
	rent_insured: boolean;
	rent_purchase: boolean;
	right_wheel: boolean;
	saloon_color_id: number;
	saloon_material_id: number;
	secondary_damage_type: number;
	special_persons: boolean;
	start_stop: boolean;
	status_id: number;
	stickers: null;
	tech_inspection: boolean;
	tmp: string;
	trunk: boolean;
	user_id: number;
	user_type: number;
	vehicle_type: number;
	video_url: string;
	views: number;
	vin: string;
	windshield: boolean;
	words_checked: number;
	zoom: number;
};

export type Pagination = {
	current_page: number;
	last_page: number;
	per_page: number;
	total: number;
};
