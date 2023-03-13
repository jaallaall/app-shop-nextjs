import { Accordion, Breadcrumbs } from "ui";
import { product } from "utils";

const breadcrumbs = [
  { name: "صفحه نخست", id: 1, href: "/" },
  { name: "لوله فلزی", id: 2, href: "/" },
  { name: "لوله مانیسمان (فولادی بدون درز)", id: 3, href: "/" },
];

const Products: React.FC = (): React.ReactElement => {
  return (
    <div>
      <Breadcrumbs breadcrumbs={breadcrumbs} />
      <Accordion>
        <>
          <div className="grid grid-cols-7 gap-3 text-center">
            <div>سایز</div>
            <div>نوع اتصال</div>
            <div>واحد</div>
            <div>توضیحات بیشتر</div>
            <div>قیمت واحد</div>
            <div>خرید</div>
            <div>قیمت کل</div>
          </div>
          {product.map((item) => {
            <div className="" key={item.id}></div>;
          })}
        </>
      </Accordion>
    </div>
  );
};

export default Products;
