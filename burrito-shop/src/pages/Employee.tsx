import { OrderList } from "../components/OrderList";
import { Col } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Employee() {
  const { getItemOrders } = useShoppingCart();

  return (
    <>
      <h1 className="heading">Order Log</h1>
      {getItemOrders().map((orders) => (
        <Col key={orders.orderId}>
          {" "}
          <OrderList {...orders} />{" "}
        </Col>
      ))}
    </>
  );
}
