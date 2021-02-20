import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import ErrorMessage from "../../components/ErrorMessage";
import OrderStyles from "../../components/styles/OrderStyles";
import formatMoney from "../../lib/formatMoney";

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order: Order(where: { id: $id }) {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`;

export default function SingleOrderPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ORDER_QUERY, {
    variables: { id: query.id },
  });

  if (loading) {
    return (
      <div>
        <p>{data}</p>
        <p>Loading...</p>;
      </div>
    );
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const { order } = data;

  return (
    <OrderStyles>
      <Head>
        <title>Sick Fits - {order.id}</title>
      </Head>
      <p>
        <span>Order id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{formatMoney(order.total)}</span>
      </p>
      <p>
        <span>Item Count:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map((item) => (
          <div className="order-item" key={item.id}>
            {console.log(item)}
            <img src={item.photo.image.publicUrlTransformed} alt="item.tile" />
            <div className="items-details">
              <h2>{item.name}</h2>
              <p> Qty: {item.quantity}</p>
              <p>Each: {formatMoney(item.price)}</p>
              <p>Sub Total: {formatMoney(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  );
}
