import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.css";

import { Navigation, Pagination } from "swiper";
import { amount } from "utils";
import ProductCard from "./ProductCard";

const product = [
  {
    id: 1,
    title: "زانو 90 درجه جوشی بدون درز شعاع بلند رده 40 بنکن (BENKAN)",
    discount: 20,
    size: 3,
    price: 100000,
  },
  {
    id: 2,
    title: "لوله مانیسمان (فولادی بدون درز)",
    discount: 30,
    size: 2,
    price: 300000,
  },
];

const ProductsCarousel: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h3>پرفروش های پایپ کالا</h3>
        <Link href="/">
          مشاهده بیشتر
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
            className="icon !w-4 !h-4 mr-2"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </Link>
      </div>
      <Swiper
        // onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        dir="rtl"
      >
        {product.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="min-h-[300px] border p-3 flex flex-col rounded-lg">
                <h4 className="mb-3">{item.title}</h4>
                <div className="flex justify-between mt-auto">
                  <span>بنکن</span>
                  <span className="inline-block whitespace-nowrap rounded-[0.27rem] bg-danger-100 px-[0.65em] pt-[0.55em] pb-[0.25em] text-center align-baseline text-[0.75em] font-bold leading-none text-primary-700">
                    تا
                    {item.discount}% تخفیف
                  </span>
                </div>
                <div className="flex justify-between mt-3">
                  <span>سایز</span>
                  <span>
                    {item.size}
                    عدد
                  </span>
                </div>
                <div className="flex justify-between mt-3">
                  <span>قیمت</span>
                  <span>
                    {amount(item.price)} <small>ریال</small>
                  </span>
                </div>
                <ProductCard item={item} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ProductsCarousel;
